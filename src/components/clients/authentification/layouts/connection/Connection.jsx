import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {
    TextField,
    InputLabel,
    IconButton,
    InputAdornment,
    Button,
    Grid,
    FormControl,
    Input
} from '@material-ui/core'
import {
    createMuiTheme,
    ThemeProvider
} from '@material-ui/core/styles'

import {
    Visibility,
    VisibilityOff,
    Person,
    Https
} from '@material-ui/icons'

import Facebook from './statics/images/Facebook.png'
import Google from './statics/images/Google.png'

import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

const theme = createMuiTheme({
    palette: {
        type: 'dark'
    }
})

class Connexion extends Component {
    constructor (props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            error: false,
            isLoading: false,
            isShow: false,
            isOblige: false
        }
    }

    onClickPushInscription () {
        const monde = this.props.history.location.search.split('=')[1]
        if (monde) {
            this.props.history.push('/Authentification=Inscription?id=' + monde)
        }
    }

    async redirect (token) {
        if (token) {
            await localStorage.setItem('Token', JSON.stringify(token))
            this.props.history.push('/Profiles')
            return true
        }
        return false
    }

    onClickFaceboookBtn ({ userID: facebookId, name }) {
        const mondes = parseInt(this.props.history.location.search.split('=')[1])
        const datas = {
            facebookId,
            name,
            mondes
        }
        if (facebookId && name) {
            console.log(facebookId, name, facebookId && name)
            axios.post('/api/register/facebook', datas)
                .then(({ data }) => {
                    console.log({ data })
                    this.redirect(data.token) && this.setState({ error: true })
                })
                .catch(error => console.log({ error }))
        }
    }

    onClickGoogleBtn ({ googleId, profileObj: { name, email } }) {
        const mondes = parseInt(this.props.history.location.search.split('=')[1])
        const datas = {
            googleId,
            email,
            name,
            mondes
        }
        axios.post('/api/register/google', datas)
            .then(async ({ data }) => {
                console.log(data)
                this.redirect(data.token) && this.setState({ error: true })
            })
            .catch(error => console.log({ error }))
    }

    onSubmit (e) {
        e.preventDefault()
        const {
            email,
            password
        } = this.state
        this.setState({ isLoading: true, isOblige: false, error: false })
        if (email !== '' && password !== '') {
            axios
                .post('/api/login', {
                    email,
                    password
                })
                .then(async ({ data: { token } }) => {
                    this.setState({ isLoading: false })
                    if (token) {
                        await localStorage.setItem('Token', JSON.stringify(token))
                        this.props.history.push('/Profiles')
                    } else {
                        this.setState({ error: true })
                    }
                })
                .catch(e => {
                    this.setState({ isLoading: false, error: true })
                })
        } else {
            this.setState({ isLoading: false, isOblige: true })
        }
    }

    onChangeInput (e) {
        this.setState({ [e.target.name]: e.target.value, error: false, isOblige: false })
    }

    render () {
        const {
            error,
            isLoading,
            email,
            password,
            isShow,
            isOblige
        } = this.state
        return (
            <div className='Connection'>
                <div className="parent-space-between">
                    <p><Link className="backward-round" to='/'>Revenir</Link></p>
                </div>

                <h1 className="whiteSpecialTitle">Rencontre love</h1>

                <div className="boxRounded dark-shadow semiOpacity">
                    <h2 className="whiteSecondTitle centeredText">Connexion</h2>
                    <ThemeProvider theme={theme}>
                        <div
                            className="inline"
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}
                        >
                            <FacebookLogin
                                render={e => (
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        onClick={e.onClick}
                                        style={{ borderRadius: 30 }}
                                        startIcon={<img src={Facebook} alt='facebook' style={{ width: 20, height: 20 }} />}
                                    >
                                      Facebook
                                    </Button>
                                )}
                                autoLoad={false}
                                callback={this.onClickFaceboookBtn.bind(this)}
                                appId="385906195896536"
                            />
                            <GoogleLogin
                                render={e => (
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        size="small"
                                        style={{ borderRadius: 30 }}
                                        onClick={e.onClick}
                                        startIcon={ <img src={Google} alt='google' style={{ width: 20, height: 20 }}/> }
                                    >
                                      Google
                                    </Button>
                                )}
                                onSuccess={() => this.onClickGoogleBtn.bind(this)}
                                onFailure={this.onClickGoogleBtn.bind(this)}
                                cookiePolicy={'single_host_origin'}
                                clientId="771939562585-noigod9r3l0ddqmh822uki4kmefqvarl.apps.googleusercontent.com"
                            />
                        </div>
                    </ThemeProvider>
                    <h2 style={{ color: '#afb0b2', marginTop: 20 }}>- ou -</h2>
                    <form className="margin-tb-20" >
                        <ul className="standar-vertic-spacing standar-bottom-spacing">
                            <li>
                                <Grid container spacing={1} alignItems="flex-end">
                                    <Grid item>
                                        <Person />
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            label="Email *"
                                            value={email}
                                            error={isOblige || error}
                                            onChange={this.onChangeInput.bind(this)}
                                            // className="max-width"
                                            name='email'
                                            style={{ width: 215 }}
                                        />
                                    </Grid>
                                </Grid>
                            </li>
                            <li>
                                <Grid container spacing={1} alignItems="flex-end">
                                    <Grid item>
                                        <Https />
                                    </Grid>
                                    <Grid item>
                                        <FormControl>
                                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                            <Input
                                                type={isShow ? 'text' : 'password'}
                                                value={password}
                                                onChange={this.onChangeInput.bind(this)}
                                                name='password'
                                                error={isOblige || error}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={() => this.setState({ isShow: !isShow })}
                                                            onMouseDown={() => this.setState({ isShow: !isShow })}
                                                            edge="end"
                                                        >
                                                            {isShow ? <Visibility /> : <VisibilityOff />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                labelWidth={70}
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </li>
                        </ul>
                        <p
                            style={{
                                textAlign: 'left',
                                cursor: 'pointer',
                                marginBottom: 10,
                                color: '#15c2cf'
                            }}
                        >Mot de passe oublié ?</p>

                        { /* Button */}
                        <ul className="standar-vertic-spacing">
                            <li>
                                <input
                                    style={{ cursor: 'pointer' }}
                                    className="max-width btn button-light-blue"
                                    type="button"
                                    value={isLoading ? 'Loading...' : 'Connexion'}
                                    onClick={this.onSubmit.bind(this)}
                                />
                            </li>
                            <li>
                                <input
                                    style={{ cursor: 'pointer' }}
                                    className="max-width btn btn-light-border-only"
                                    type="button"
                                    value="Inscription"
                                    onClick={this.onClickPushInscription.bind(this)}
                                />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        )
    }
}

export default Connexion
