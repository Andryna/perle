import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {
    FormControl,
    FormGroup,
    FormControlLabel,
    Checkbox,
    IconButton
} from '@material-ui/core'
import {
    createMuiTheme,
    ThemeProvider
} from '@material-ui/core/styles'

import {
    ArrowBack
} from '@material-ui/icons'
import { connect, useSelector } from 'react-redux'

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

class Dernier extends Component {
    constructor (props) {
        super(props)
        this.state = {
            isReq: false,
            isLoading: false
        }
    }

    onSubmit (e) {
        /* eslint-disable */
        e.preventDefault()
        const {
            // name,
            // email,
            // password,
            // vpassword,
            ville,
            departement,
            region,
            pays,
            sexe,
            search,
            majeur,
            autorise_mail,
            condition_generale,
            condition_vente
        } = this.props.inscription.datas
        if (majeur !== false && condition_generale !== false && condition_vente !== false) {
            this.setState({ isLoading: true })
            console.log({
                    ville,
                    departement,
                    region,
                    pays,
                    sexe,
                    faiblesse: search,
                    majeur,
                    autorise_mail,
                    condition_generale,
                    condition_vente
                })
            const Authorization = 'Bearer ' + JSON.parse(localStorage.getItem('Token'))
            console.log({ Authorization })
            axios
                .post('api/information/post', {
                    ville,
                    departement,
                    region,
                    pays,
                    sexe,
                    faiblesse: search,
                    majeur,
                    autorise_mail,
                    condition_generale,
                    condition_vente
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: Authorization
                    }
                })
                .then(() => {
                    this.setState({ isLoading: false }, () => this.props.history.push('/Profiles'))
                })
                .catch(error => {
                    console.log({ error })
                    this.setState({ isLoading: false, error: true })
                })
        } else {
            this.setState({ isReq: true })
        }
        /* eslint-enable */
    }

    onChangeCheck (e) {
        this.setState({ isReq: false })
        this.props.putInscription({ ...this.props.inscription.datas, [e.target.name]: e.target.checked })
    }

    setReturn () {
        this.props.history.push('/Authentification=Suites')
    }

    render () {
        const {
            error,
            isLoading,
            majeur,
            autorise_mail, // eslint-disable-line
            condition_generale, // eslint-disable-line
            condition_vente // eslint-disable-line
        } = this.props.inscription.datas
        return (
            <div className='Connection'>
                <ThemeProvider theme={theme}>
                    <div className="parent-space-between">
                        <p><Link className="backward-round" to='/'>Revenir</Link></p>
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
                        <h2 className="whiteSecondTitle centeredText">
                            Derniere chose
                        </h2>
                        <form className="margin-tb-20" >
                            <FormControl required error={error} component="fieldset">
                                <FormGroup
                                    style={{ width: 300 }}
                                >
                                    <FormControlLabel
                                        style={{ width: 300, textAlign: 'left', alignItems: 'start' }}
                                        control={<Checkbox checked={majeur} onChange={this.onChangeCheck.bind(this)} name="majeur" />}
                                        label="En cochant cette case, je certifie etre majeur et responsable."
                                    />
                                    <br/>
                                    {/* eslint-disable */}
                                    <FormControlLabel
                                        style={{ width: 300, textAlign: 'left', alignItems: 'start' }}
                                        control={<Checkbox checked={autorise_mail} onChange={this.onChangeCheck.bind(this)} name="autorise_mail" />}
                                        label="En cochant cette case, je donne l'ordre de ne pas m'envoyer
                                            de mail provenant du monde rencontre love.
                                            j'autorise seulement la reception de mail pour la confirmation de mon compte et
                                            pour la reinitialisation ou le changement de nom mot de passe"
                                    />
                                    <br/>
                                    <FormControlLabel
                                        style={{ width: 300, textAlign: 'left', alignItems: 'start' }}
                                        control={<Checkbox checked={condition_generale} onChange={this.onChangeCheck.bind(this)} name="condition_generale" />}
                                        label="J'ai lu et j'accepte les conditions generales d'utilisations."
                                    />
                                    <br/>
                                    <FormControlLabel
                                        style={{ width: 300, textAlign: 'left', alignItems: 'start' }}
                                        control={<Checkbox checked={condition_vente} onChange={this.onChangeCheck.bind(this)} name="condition_vente" />}
                                        label="J'ai lu et j'accepte les conditions generales de vente."
                                    />
                                    <br/>
                                    {/* eslint-enable */}
                                </FormGroup>
                            </FormControl>
                            <ul className="standar-vertic-spacing">
                                <li>
                                    <input
                                        style={{ cursor: 'pointer' }}
                                        className="max-width btn button-light-blue"
                                        type="button"
                                        value={ isLoading ? 'Loading...' : 'Terminer' }
                                        onClick={this.onSubmit.bind(this)}
                                    />
                                </li>
                            </ul>
                        </form>
                    </div>
                </ThemeProvider>
            </div>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(Dernier)
