import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import {
    TextField,
    Button,
    IconButton,
    Grid
} from '@material-ui/core'
import {
    createMuiTheme,
    ThemeProvider
} from '@material-ui/core/styles'

import Facebook from './statics/images/Facebook.png'
import Google from './statics/images/Google.png'
import {
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
            isReq: false
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
                        mondes
                    })
                    .then(async ({ data }) => {
                        console.log(data)
                        this.setState({ isLoading: false })
                        if (data.token) {
                            await localStorage.setItem('Token', JSON.stringify(data.token))
                            this.props.history.push('/Authentification=MonDomicile')
                        }
                    })
                    .catch(e => {
                        this.setState({ isLoading: false, error: true })
                    })
            } else {
                this.setState({ isReq: true })
            }
        } else {
            this.setState({ isNotCopy: true })
        }
    }

    onChangeInput (e) {
        this.setState({ error: false, isReq: false })
        this.props.putInscription({ ...this.props.inscription.datas, [e.target.name]: e.target.value })
    }

    getfacebookinfo (e) {
        alert('get fb info')
    }

    getgoogleinfo (e) {
        alert('get google info')
    }

    setReturn () {
        const monde = this.props.history.location.search.split('=')[1]
        if (monde) {
            this.props.history.push('/Authentification=Connexion?id=' + monde)
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
            isReq
        } = this.state
        return (
            <div className='Inscription'>
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
                                        <TextField
                                            label="Mot de passe *"
                                            type="password"
                                            value={password}
                                            error={error}
                                            onChange={this.onChangeInput.bind(this)}
                                            name='password'
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
                                        <TextField
                                            label="Confirmation *"
                                            value={vpassword}
                                            type="password"
                                            error={error}
                                            onChange={this.onChangeInput.bind(this)}
                                            style={{ width: 215 }}
                                            name='vpassword'
                                        />
                                    </Grid>
                                </Grid>
                            </li>
                            { isNotCopy && <p className='error'>Mot de pass differents</p> }
                            { isReq && <p className='error'>* Champ obligatoire</p>}
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
