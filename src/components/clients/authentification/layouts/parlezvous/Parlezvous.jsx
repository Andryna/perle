import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {
    TextField,
    FormLabel,
    FormControl,
    FormGroup,
    FormControlLabel,
    Checkbox,
    IconButton,
    MenuItem,
    Select
} from '@material-ui/core'
import {
    createMuiTheme,
    ThemeProvider
} from '@material-ui/core/styles'

import {
    LocationOn,
    ArrowBack
} from '@material-ui/icons'

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        secondary: {
            main: '#d3d3d3'
        }
    },
    typography: {
        button: {
            textTransform: 'none'
        }
    }
})

class Parlezvous extends Component {
    constructor (props) {
        super(props)
        this.state = {
            error: false,
            isLoading: false,
            Homme: false,
            Femme: false,
            Gays: false,
            Lesbiennes: false,
            Hommebi: false,
            Femmebi: false,
            location: '',
            first: true
        }
    }

    onSubmit (e) {
        e.preventDefault()
        const {
            email,
            password,
            first
        } = this.state
        if (first) {
            if (email !== '' && password !== '') {
                this.setState({ isLoading: true })
                axios
                    .post('/api/login', {
                        email,
                        password
                    })
                    .then(async ({ data: { token } }) => {
                        this.setState({ isLoading: false })
                        this.setState({ first: false })
                    })
                    .catch(e => {
                        this.setState({ isLoading: false, error: true })
                    })
            // 
            console.log(email)
            }
            console.log(first)
        } else {
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
            console.log(first+ 'auther log ')
        }
    }

    onChangeInput (e) {
        this.setState({ [e.target.name]: e.target.value, error: false })
    }

    onChangeCheck (e) {
        this.setState({ [e.target.name]: e.target.checked, error: false })
        console.log( e.target.name)
    }

    initData (val) {
        const tab = []
        if (val === 'dd') {
            for (let i = 1; i < 32; i++) {
                tab.push(i)
            }
        } else if (val === 'mm') {
            const mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
            for (let i = 0; i < mois.length; i++) {
                tab.push(mois[i])
            }
        } else {
            const years = new Date().getFullYear()
            for (let i = 0; i < 100; i++) {
                tab.push(years - i)
            }
        }
        return tab
    }

    setReturn () {
        if (this.state.first) {
            this.props.history.push('/Authentification=Inscription')
        } else {
            this.setState({ first: true })
        }
    }

    render () {
        const {
            error,
            isLoading,
            Homme,
            Femme,
            Gays,
            Lesbiennes,
            Hommebi,
            Femmebi,
            location,
            first
        } = this.state
        return (
            <div className='Connection'>
                <ThemeProvider theme={theme}>
                    <div className="parent-space-between">
                        <p><Link className="backward-round" to='/'>Revenir</Link></p>
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
                        <h2 className="whiteSecondTitle centeredText">
                            { first ? 'Parlez-moi de vous' : 'derniere question sur vous' }
                        </h2>
                        <form className="margin-tb-20" >
                            { first
                                ? <>
                            <FormControl required error={error} component="fieldset">
                                <FormLabel
                                    component="legend"
                                    style={{ textAlign: 'left' }}
                                >Je cherche</FormLabel>
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Checkbox checked={Homme} onChange={this.onChangeCheck.bind(this)} name="Homme" />}
                                        label="Homme"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={Femme} onChange={this.onChangeCheck.bind(this)} name="Femme" />}
                                        label="Femme"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={Gays} onChange={this.onChangeCheck.bind(this)} name="Gays" />}
                                        label="Gays"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={Lesbiennes} onChange={this.onChangeCheck.bind(this)} name="Lesbiennes" />}
                                        label="Lesbiennes"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={Hommebi} onChange={this.onChangeCheck.bind(this)} name="Hommebi" />}
                                        label="Homme bi"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={Femmebi} onChange={this.onChangeCheck.bind(this)} name="Femmebi" />}
                                        label="Femme bi"
                                    />
                                </FormGroup>
                            </FormControl>
                            <ul
                                className="standar-vertic-spacing standar-bottom-spacing"
                                style={{ marginBottom: 50 }}
                            >
                                <li>
                                    <TextField
                                        id="standard-basic"
                                        label="je vis a"
                                        value={location}
                                        error={error}
                                        onChange={this.onChangeInput.bind(this)}
                                        className="max-width input-transparent"
                                        name='location'
                                        helperText={<span style={{
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}><LocationOn style={{ fontSize: 15, marginRight: 5 }} /> Me geolocaliser</span>}
                                    />
                                </li>
                            </ul>
                            <ul className="standar-vertic-spacing">
                                <li>
                                    <input
                                        style={{ cursor: 'pointer' }}
                                        className="max-width btn button-light-blue"
                                        type="button"
                                        value={ isLoading ? 'Loading...' : 'Valider' }
                                        onClick={this.onSubmit.bind(this)}
                                    />
                                </li>
                            </ul></> : <>
                                <FormControl required error={error} component="fieldset">
                                    <FormLabel
                                        component="legend"
                                        style={{ textAlign: 'left' }}
                                    >Je suis ne en</FormLabel>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between'
                                        }}>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={18}
                                            onChange={() => console.log('age')}
                                        >
                                            {
                                                this.initData('dd').map(e => {
                                                    return <MenuItem key={e} value={e}>{e}</MenuItem>
                                                })
                                            }
                                        </Select>
                                        <Select
                                            style={{
                                                flex: 1,
                                                margin: '0 10px'
                                            }}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={'janvier'}
                                            onChange={() => console.log('age')}
                                        >
                                            {
                                                this.initData('mm').map(e => {
                                                    return <MenuItem key={e} value={e}>{e}</MenuItem>
                                                })
                                            }
                                        </Select>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={2020}
                                            onChange={() => console.log('age')}
                                        >
                                            {
                                                this.initData('yy').map(e => {
                                                    return <MenuItem key={e} value={e}>{e}</MenuItem>
                                                })
                                            }
                                        </Select>
                                    </div>
                                </FormControl>
                                <div style={{ marginTop: 30 }}>
                                    <FormLabel component="legend">Mon prenom et nom de famille</FormLabel>
                                    <ul
                                        className="standar-vertic-spacing standar-bottom-spacing"
                                    >
                                        <li>
                                            <TextField
                                                id="standard-basic"
                                                label="Prenom"
                                                value={location}
                                                error={error}
                                                onChange={this.onChangeInput.bind(this)}
                                                className="max-width input-transparent"
                                                name='location'
                                            />
                                        </li>
                                        <li>
                                            <TextField
                                                id="standard-basic"
                                                label="Nom"
                                                value={location}
                                                error={error}
                                                onChange={this.onChangeInput.bind(this)}
                                                className="max-width input-transparent"
                                                name='location'
                                            />
                                        </li>
                                    </ul>
                                </div>
                                <div style={{ margin: '20px 0' }}>
                                    <h3 style={{ marginBottom: 10 }}>Notre politique confidentielle</h3>
                                    <p style={{ width: 260 }}>
                                        Votre prenom, nom de famille et adresse
                                        mail resterons confidentiel, seul
                                        votre pseudo sera visible par les utilisatuers.
                                    </p>
                                </div>
                            <ul className="standar-vertic-spacing">
                                <li>
                                    <input
                                        style={{ cursor: 'pointer' }}
                                        className="max-width btn button-light-blue"
                                        type="button"
                                        value={ isLoading ? 'Loading...' : 'Valider' }
                                        onClick={this.onSubmit.bind(this)}
                                    />
                                </li>
                            </ul>
                                    </>
                            }
                        </form>
                    </div>
                </ThemeProvider>
            </div>
        )
    }
}

export default Parlezvous
