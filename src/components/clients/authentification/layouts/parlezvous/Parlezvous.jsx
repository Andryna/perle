import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    FormLabel,
    FormControl,
    FormGroup,
    FormControlLabel,
    Checkbox,
    IconButton,
    Button
} from '@material-ui/core'
import {
    ThemeProvider
} from '@material-ui/core/styles'

import {
    ArrowBack
} from '@material-ui/icons'

import { connect } from 'react-redux'

class Parlezvous extends Component {
    constructor (props) {
        super(props)
        this.state = {
            isReq: false,
            isLoading: false,
            location: '',
            first: true
        }
        this.check = ['Homme', 'Femme', 'Gays', 'Lesbiennes', 'Hommebi', 'Femmebi']
    }

    onSubmit (e) {
        e.preventDefault()
        const {
            sexe,
            search
        } = this.props.inscription.datas
        this.setState({ isReq: false })
        if (sexe !== '' && search.length > 0) {
            this.props.history.push('/Authentification=Suites')
        } else {
            this.setState({ isReq: true })
        }
    }

    onChangeCheck (e) {
        this.setState({ [e.target.name]: e.target.checked, isReq: false }, () => {
            const search = this.check.filter(e => {
                return this.state[e] === true
            })
            this.props.putInscription({ ...this.props.inscription.datas, search })
        })
    }

    setReturn () {
        this.props.history.push('/Authentification=MonDomicile')
    }

    onClickSexe (e) {
        this.setState({ isReq: false })
        this.props.putInscription({ ...this.props.inscription.datas, sexe: e })
    }

    render () {
        const {
            isReq,
            isLoading
        } = this.state
        const {
            sexe,
            search
        } = this.props.inscription.datas

        const isHomme = sexe === 'Homme'
        const isFemme = sexe === 'Femme'
        return (
            <div className='Connection'>
                <ThemeProvider>
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
                            Parlez-moi de vous
                        </h2>
                        <p
                            style={{
                                fontSize: 19,
                                textAlign: 'left',
                                margin: '15px 0'
                            }}
                        >
                            Je suis: *
                        </p>
                        <div
                            className="inline"
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                flex: 1
                            }}
                        >
                            <Button
                                variant={ isHomme ? 'contained' : 'outlined'}
                                color={ isHomme ? 'primary' : 'secondary' }
                                style={{ borderRadius: 30, flex: 1, margin: 3 }}
                                onClick={this.onClickSexe.bind(this, 'Homme')}
                            >
                                Homme
                            </Button>
                            <Button
                                variant={ isFemme ? 'contained' : 'outlined'}
                                color={ isFemme ? 'primary' : 'secondary' }
                                style={{ borderRadius: 30, flex: 1, margin: 3 }}
                                onClick={this.onClickSexe.bind(this, 'Femme')}
                            >
                                Femme
                            </Button>
                        </div>
                        { isReq && <p className='error'>* Champ obligatoire</p>}
                        <div
                            className="margin-tb-20" >
                            <FormControl
                                required
                                component="fieldset"
                                style={{ float: 'left' }}
                            >
                                <FormLabel
                                    component="legend"
                                    style={{ textAlign: 'left' }}
                                >Je cherche</FormLabel>
                                <FormGroup
                                    style={{ height: 150 }}
                                >
                                    <FormControlLabel
                                        control={<Checkbox checked={search.indexOf('Homme') >= 0} onChange={this.onChangeCheck.bind(this)} name="Homme" />}
                                        label="Homme"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={search.indexOf('Gays') >= 0} onChange={this.onChangeCheck.bind(this)} name="Gays" />}
                                        label="Gays"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={search.indexOf('Hommebi') >= 0} onChange={this.onChangeCheck.bind(this)} name="Hommebi" />}
                                        label="Homme bi"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={search.indexOf('Femme') >= 0} onChange={this.onChangeCheck.bind(this)} name="Femme" />}
                                        label="Femme"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={search.indexOf('Lesbiennes') >= 0} onChange={this.onChangeCheck.bind(this)} name="Lesbiennes" />}
                                        label="Lesbiennes"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={search.indexOf('Femmebi') >= 0} onChange={this.onChangeCheck.bind(this)} name="Femmebi" />}
                                        label="Femme bi"
                                    />
                                </FormGroup>
                            </FormControl>
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
                        </div>
                        <div>
                            <li className="centeredText small-padding "></li>
                            <li className="centeredText small-padding ">* Champ obligatoire</li>
                        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Parlezvous)
