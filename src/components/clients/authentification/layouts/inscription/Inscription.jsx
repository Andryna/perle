import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import {
    Radio,
    RadioGroup,
    FormControlLabel,
    TextField,
    MenuItem,
    Select,
    IconButton
} from '@material-ui/core'
import {
    createMuiTheme,
    ThemeProvider
} from '@material-ui/core/styles'

import {
    ArrowBack
} from '@material-ui/icons'

const theme = createMuiTheme({
    palette: {
        type: 'dark'
    }
})

class Inscription extends Component {
    constructor (props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            sexe: 'monsieur',
            vpassword: '',
            mondes: '0',
            error: false,
            isLoading: false,
            isNotCopy: false
        }
    }

    onSubmit (e) {
        e.preventDefault()
        const {
            name,
            email,
            password,
            mondes,
            vpassword
        } = this.state
        if (password === vpassword) {
            if (name && email && password && mondes) {
                this.setState({ isLoading: true })
                axios
                    .post('/api/register', {
                        name,
                        email,
                        password,
                        mondes
                    })
                    .then(async ({ data: { token } }) => {
                        this.setState({ isLoading: false })
                        await localStorage.setItem('Token', JSON.stringify(token))
                        console.log(token)
                        // alert('ok ok')
                        this.props.history.push('/Authentification=Parlezvous')
                    })
                    .catch(e => {
                        this.setState({ isLoading: false, error: true })
                    })
            }
        } else {
            this.setState({ isNotCopy: true })
        }
this.props.history.push('/Authentification=Parlezvous')
    }

    onChangeInput (e) {
        this.setState({ error: false })
        this.setState({ [e.target.name]: e.target.value, error: false })
        console.log(this.state.name)
    }

    onSelect (e) {
        this.setState({ mondes: e.target.value, error: false })
    }

    getfacebookinfo (e) {
        alert("get fb info")
    }

    getgoogleinfo (e) {
        alert("get google info")
    }

    setReturn () {
        this.props.history.push('/Authentification=Connexion')
    }

    render () {
        const {
            name,
            email,
            password,
            sexe,
            vpassword,
            error,
            isLoading,
            isNotCopy,
            mondes
        } = this.state
        return (
            <div className='Inscription'>
                <ThemeProvider theme={theme}>
                    <div className="parent-space-between">
                        <p><Link to='/' className="backward-round">Revenir</Link></p>
                    </div>

                    <h1 className="whiteSpecialTitle">Rencontre love</h1>

                    <div className="boxRounded dark-shadow">
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
                        { isNotCopy ? 'Mot de pass differents' : null }

                        <form className="margin-tb-20" >
                            <ul className="standar-vertic-spacing standar-bottom-spacing">
                                <li>
                                    <RadioGroup
                                        row aria-label="position"
                                        name="position"
                                        defaultValue={sexe}
                                    >
                                        <FormControlLabel
                                            value="monsieur"
                                            control={<Radio color="primary" />}
                                            label="Monsieur"
                                        />
                                        <FormControlLabel
                                            value="madame"
                                            control={<Radio color="primary" />}
                                            label="Madame"
                                        />
                                    </RadioGroup>
                                </li>
                                <li>
                                    <TextField
                                        label="Email *"
                                        value={email}
                                        error={error}
                                        onChange={this.onChangeInput.bind(this)}
                                        className="max-width input-transparent"
                                        name='email'
                                    />
                                </li>
                                <li>
                                    <TextField
                                        label="Nom *"
                                        value={name}
                                        error={error}
                                        onChange={this.onChangeInput.bind(this)}
                                        className="max-width input-transparent"
                                        name='name'
                                    />
                                </li>
                                <li>
                                    <TextField
                                        label="Mot de passe *"
                                        type="password"
                                        value={password}
                                        error={error}
                                        onChange={this.onChangeInput.bind(this)}
                                        className="max-width input-transparent"
                                        name='password'
                                    />
                                </li>
                                <li>
                                    <TextField
                                        label="Vérification de mot de passe *"
                                        value={vpassword}
                                        type="password"
                                        error={error}
                                        onChange={this.onChangeInput.bind(this)}
                                        className="max-width input-transparent"
                                        name='vpassword'
                                    />
                                </li>
                                <li
                                    style={{ marginTop: 30 }}
                                >
                                    <Select
                                        className="max-width"
                                        labelId="demo-simple-select-label"
                                        value={mondes}
                                        onChange={this.onSelect.bind(this)}
                                        name='mondes'
                                    >
                                        <MenuItem value={0}>Monde 1</MenuItem>
                                        <MenuItem value={'1'}>Monde 2</MenuItem>
                                        <MenuItem value={'2'}>Monde 3</MenuItem>
                                    </Select>
                                    
                                </li>
                            </ul>

                            <ul className="standar-vertic-spacing">
                                <li>
                                    <input
                                        style={{ cursor: 'pointer' }}
                                        className="max-width btn button-light-blue"
                                        type="button"
                                        value={ isLoading ? 'Loading...' : 'Inscription' }
                                        onClick={this.onSubmit.bind(this)}
                                    />
                                </li>
                            </ul>
                        </form>

                        <div>
                            <li className="centeredText small-padding ">S'inscrire avec</li>
                            <li>
                                <ul className="inline">
                                    <li><input className="btn btn-social-network btn-facebook" type="button" value="Facebook"  onClick={this.getfacebookinfo.bind(this)}/></li>
                                    <li><input className="btn btn-social-network btn-google" type="button" value="Google" onClick={this.getgoogleinfo.bind(this)} /></li>
                                </ul>
                            </li>
                            <li className="centeredText small-padding ">* Champ obligatoire</li>
                        </div>
                    </div>
                </ThemeProvider>

            </div>)
    }
}

export default Inscription
