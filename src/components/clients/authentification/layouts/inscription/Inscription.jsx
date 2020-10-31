import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import {
    TextField,
    Button,
    IconButton,
    Grid,
    InputLabel,
    InputAdornment,
    FormControl,
    Input
} from '@material-ui/core'
import {
    createMuiTheme,
    ThemeProvider
} from '@material-ui/core/styles'

import Facebook from './statics/images/Facebook.png'
import Google from './statics/images/Google.png'

import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import {
    Visibility,
    VisibilityOff,
    ArrowBack,
    Person,
    Email,
    Https
} from '@material-ui/icons'
import { connect } from 'react-redux'
import axios from 'axios'

const theme = createMuiTheme({
    palette: {
        type: 'dark'
    }
})


class Inscription extends Component {
    constructor (props) {
        super(props)
        this.state = {
            error: false,
            isLoading: false,
            isNotCopy: false,
            isReq: false,
            isShowP: false,
            isShowC: false,
        }
    }

    onSubmit (e) {
        e.preventDefault()
        console.log()
        const {
            name,
            email,
            password,
            vpassword
        } = this.props.inscription.datas
        this.setState({ isNotCopy: false })
        if (password === vpassword) {
            this.setState({ isReq: false })
            const mondes = this.props.history.location.search.split('=')[1]
            if (name !== '' && email !== '' && password !== '' && mondes) {
                this.setState({ isLoading: true })
                console.log({ name, email, password, mondes })
                axios
                    .post('/api/register', {
                        name,
                        email,
                        password,
                        mondes: parseInt(mondes)
                    })
                    .then(async ({ data }) => {
                        console.log(data)
                        this.setState({ isLoading: false })
                        if (data.token) {
                            await localStorage.setItem('Token', JSON.stringify(data.token))
                            this.props.history.push('/Authentification=MonDomicile')
                        }
                    })
                    .catch(error => {
                        console.log({ error })
                        this.setState({ isLoading: false, error: true })
                    })
            } else {
                this.setState({ isReq: true })
            }
        } else {
            this.setState({ isNotCopy: true })
        }
    }

    async redirect (token) {
        if (token) {
            await localStorage.setItem('Token', JSON.stringify(token))
            this.props.history.push('/Authentification=MonDomicile')
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
        console.log({ googleId, name, email, mondes })
        if (googleId && email && name && mondes) {
            const datas = {
                googleId,
                email,
                name,
                mondes
            }
            axios.post('http://www.perlerencontre.fr/api/register/google', datas)
                .then(async (e) => {
                    const { data: { token } } = e
                    this.redirect(token) && this.setState({ error: true })
                })
                .catch(error => console.log({ error }))
        }
    }

    onChangeInput (e) {
        this.setState({ error: false, isReq: false })
        this.props.putInscription({ ...this.props.inscription.datas, [e.target.name]: e.target.value })
    }

    setReturn () {
        const monde = this.props.history.location.search.split('=')[1]
        if (monde) {
            this.props.history.push('/Authentification=Connexion?id=' + monde)
        } else {
            this.props.history.goBack()
        }
    }

    render () {
        const {
            name,
            email,
            password,
            vpassword
        } = this.props.inscription.datas
        const {
            error,
            isLoading,
            isNotCopy,
            isReq,
            isShowP,
            isShowC
        } = this.state
        return (
            <div className='Inscription'>
                <div className="parent-space-between">
                    <p><Link to='/' className="backward-round">Revenir</Link></p>
                </div>

                <h1 className="whiteSpecialTitle">Rencontre love</h1>

                <div className="boxRounded dark-shadow semiOpacity">
                    {/* eslint-disable-next-line */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 10,
                            left: 10,
                            border: '1px solid white',
                            borderRadius: '100%'
                        }}
                        onClick={this.setReturn.bind(this)}
                        role="button"
                        tabIndex="0"
                    >
                        <IconButton aria-label="delete" size="small" >
                            <ArrowBack fontSize="small" />
                        </IconButton>
                    </div>
                    <div
                        style={{
                            width: '100%',
                            height: 30
                        }}
                    >
                    </div>
                    <h2 className="whiteSecondTitle centeredText">Inscription</h2>
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
                                appId="1049953638795724"
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
                                onSuccess={this.onClickGoogleBtn.bind(this)}
                                onFailure={this.onClickGoogleBtn.bind(this)}
                                cookiePolicy={'single_host_origin'}
                                clientId="771939562585-noigod9r3l0ddqmh822uki4kmefqvarl.apps.googleusercontent.com"
                            />
                        </div>
                    </ThemeProvider>
                    <h2 style={{ color: '#afb0b2', marginTop: 20 }}>- ou -</h2>
                    <form>
                        <ul className="standar-vertic-spacing standar-bottom-spacing">
                            <li>
                                <Grid container spacing={1} alignItems="flex-end">
                                    <Grid item>
                                        <Person />
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            label="Pseudo *"
                                            value={name}
                                            error={error}
                                            onChange={this.onChangeInput.bind(this)}
                                            // className="max-width"
                                            name='name'
                                            style={{ width: 215 }}
                                        />
                                    </Grid>
                                </Grid>
                            </li>
                            <li>
                                <Grid container spacing={1} alignItems="flex-end">
                                    <Grid item>
                                        <Email />
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            label="Email *"
                                            value={email}
                                            error={error}
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
                                            <InputLabel htmlFor="outlined-adornment-password">Mot de passe *</InputLabel>
                                            <Input
                                                type={isShowP ? 'text' : 'password'}
                                                value={password}
                                                onChange={this.onChangeInput.bind(this)}
                                                name='password'
                                                style={{ width: 215 }}
                                                error={error}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={() => this.setState({ isShowP: !isShowP })}
                                                            onMouseDown={() => this.setState({ isShowP: !isShowP })}
                                                            edge="end"
                                                        >
                                                            {isShowP ? <Visibility /> : <VisibilityOff />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                labelWidth={70}
                                            />
                                        </FormControl>
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
                                            <InputLabel htmlFor="outlined-adornment-password">Confirmation *</InputLabel>
                                            <Input
                                                type={isShowC ? 'text' : 'password'}
                                                value={vpassword}
                                                onChange={this.onChangeInput.bind(this)}
                                                name='vpassword'
                                                style={{ width: 215 }}
                                                error={error}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={() => this.setState({ isShowC: !isShowC })}
                                                            onMouseDown={() => this.setState({ isShowC: !isShowC })}
                                                            edge="end"
                                                        >
                                                            {isShowC ? <Visibility /> : <VisibilityOff />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                labelWidth={70}
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </li>
                            {isNotCopy && <p className='error'>Mot de pass differents</p>}
                            {isReq && <p className='error'>* Champ obligatoire</p>}
                        </ul>
                        <ul className="standar-vertic-spacing">
                            <li>
                                <input
                                    style={{ cursor: 'pointer' }}
                                    className="max-width btn button-light-blue"
                                    type="button"
                                    value={isLoading ? 'Loading...' : 'Inscription'}
                                    onClick={this.onSubmit.bind(this)}
                                />
                            </li>
                        </ul>
                    </form>
                    <div>
                        <li className="centeredText small-padding "></li>
                        <li className="centeredText small-padding ">* Champ obligatoire</li>
                    </div>
                </div>
            </div>)
    }
}

const mapStateToProps = state => {
    return {
        inscription: state.inscription
    }
}

const mapDispatchToProps = dispatch => {
    return {
        putInscription: (datas) => {
            dispatch({ type: 'PUT_INSCRIPTION', datas })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inscription)
