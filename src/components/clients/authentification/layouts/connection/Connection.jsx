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

const theme = createMuiTheme({
    palette: {
        type: 'dark'
    }
})

class Connexion extends Component {
    constructor (props) {
        super(props)
        this.state = {
            name: '',
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

    onSubmit (e) {
        e.preventDefault()
        const {
            name,
            password
        } = this.state
        this.setState({ isLoading: true, isOblige: false, error: false })
        if (name !== '' && password !== '') {
            axios
                .post('/api/login', {
                    name,
                    password
                })
                .then(async ({ data: { token } }) => {
                    this.setState({ isLoading: false })
                    await localStorage.setItem('Token', JSON.stringify(token))
                    this.props.history.push('/Profiles')
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
            name,
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

                <div className="boxRounded dark-shadow">
                    <h2 className="whiteSecondTitle centeredText">Connexion</h2>
                    <ThemeProvider theme={theme}>
                        <div
                            className="inline"
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                style={{ borderRadius: 30 }}
                                startIcon={<img src={Facebook} alt='facebook' style={{ width: 20, height: 20 }} />}
                            >
                                      Facebook
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                size="small"
                                style={{ borderRadius: 30 }}
                                startIcon={ <img src={Google} alt='google' style={{ width: 20, height: 20 }}/> }
                            >
                                      Google
                            </Button>
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
                                            label="Pseudo *"
                                            value={name}
                                            error={isOblige || error}
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

                        { /* Button */ }
                        <ul className="standar-vertic-spacing">
                            <li>
                                <input
                                    style={{ cursor: 'pointer' }}
                                    className="max-width btn button-light-blue"
                                    type="button"
                                    value={ isLoading ? 'Loading...' : 'Connexion' }
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
