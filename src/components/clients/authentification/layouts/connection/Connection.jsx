import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {
    TextField,
    Input,
    IconButton,
    InputAdornment
} from '@material-ui/core'
import {
    createMuiTheme,
    ThemeProvider
} from '@material-ui/core/styles'

import {
    Visibility,
    VisibilityOff
} from '@material-ui/icons'

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
            isShow: false
        }
    }

    onSubmit (e) {
        e.preventDefault()
        const {
            email,
            password
        } = this.state
        if (email !== '' && password !== '') {
            this.setState({ isLoading: true })
            axios
                .post('/api/login', {
                    email,
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
        }
    }

    onChangeInput (e) {
        this.setState({ [e.target.name]: e.target.value, error: false })
    }

    render () {
        const {
            error,
            isLoading,
            email,
            password,
            isShow
        } = this.state
        return (
            <div className='Connection'>
                <ThemeProvider theme={theme}>
                    <div className="parent-space-between">
                        <p><Link className="backward-round" to='/'>Revenir</Link></p>
                    </div>

                    <h1 className="whiteSpecialTitle">Rencontre love</h1>

                    <div className="boxRounded dark-shadow">
                        <h2 className="whiteSecondTitle centeredText">Connexion</h2>
                        <form className="margin-tb-20" >
                            <ul className="standar-vertic-spacing standar-bottom-spacing">
                                <li>
                                    <TextField
                                        id="standard-basic"
                                        label="Email"
                                        value={email}
                                        error={error}
                                        onChange={this.onChangeInput.bind(this)}
                                        className="max-width input-transparent"
                                        name='email'
                                    />
                                </li>
                                <li style={{ marginTop: 30 }}>
                                    <Input
                                        placeholder="Password"
                                        type={isShow ? 'text' : 'password'}
                                        value={password}
                                        error={error}
                                        className="max-width"
                                        onChange={this.onChangeInput.bind(this)}
                                        name='password'
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={() => this.setState({ isShow: !isShow })}
                                                    onMouseDown={(e) => e.preventDefault()}
                                                >
                                                    {isShow ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </li>
                                { error ? <li style={{ color: 'red' }}>E-mail ou mot de passe incorrect</li> : null }
                            </ul>

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
                                    <Link to="/Authentification=Inscription">
                                        <input
                                            style={{ cursor: 'pointer' }}
                                            className="max-width btn btn-light-border-only"
                                            type="button"
                                            value="Inscription"
                                        />
                                    </Link>
                                </li>
                            </ul>
                        </form>

                        <div>
                            <li className="centeredText small-padding ">Ou se connecter avec</li>
                            <li>
                                <ul className="inline">
                                    <li><input className="btn btn-social-network btn-facebook" type="button" value="Facebook" /></li>
                                    <li><input className="btn btn-social-network btn-google" type="button" value="Google" /></li>
                                </ul>
                            </li>
                        </div>
                    </div>
                </ThemeProvider>
            </div>
        )
    }
}

export default Connexion
