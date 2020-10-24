import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {
    TextField,
    IconButton,
    MenuItem,
    Grid
} from '@material-ui/core'
import {
    ThemeProvider
} from '@material-ui/core/styles'

import {
    LocationOn,
    ArrowBack
} from '@material-ui/icons'

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
            first: true,
            sexe: 'Homme'
        }
    }

    onSubmit (e) {
        e.preventDefault()
        this.props.history.push('/Authentification=Dernier')
    }

    onChangeInput (e) {
        this.setState({ [e.target.name]: e.target.value, error: false })
    }

    onChangeCheck (e) {
        this.setState({ [e.target.name]: e.target.checked, error: false })
    }

    setReturn () {
        this.props.history.push('/Authentification=Parlezvous')
    }

    onClickSexe (e) {
        this.setState({ sexe: e })
    }

    getArrayBetween (start, fin) {
        const stock = []
        for (let i = start + 1; i < fin; i++) {
            stock.push(i)
        }
        return stock
    }

    render () {
        const {
            isLoading,
            error
        } = this.state
        const mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
        const dateList = this.getArrayBetween(0, 31)
        const yearsNow = new Date().getFullYear()
        const anneeList = this.getArrayBetween(yearsNow - 30, yearsNow)
        return (
            <div className='Connection'>
                <ThemeProvider>
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
                            Parlez-moi de vous
                        </h2>
                        <p
                            style={{
                                fontSize: 19,
                                textAlign: 'left',
                                margin: '15px 0'
                            }}
                        >
                            Je suis ne en
                        </p>
                        <div
                            className="inline"
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                flex: 1
                            }}
                        >
                            <TextField
                                select
                                value={dateList[parseInt(dateList.length / 2)]}
                                // onChange={handleChange('currency')}
                                margin="normal"
                            >
                                {dateList.map(e => (
                                    <MenuItem key={e} value={e}>
                                        {e}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                select
                                value={mois[parseInt(mois.length / 2)]}
                                // onChange={handleChange('currency')}
                                margin="normal"
                            >
                                {mois.map(e => (
                                    <MenuItem key={e} value={e}>
                                        {e}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                select
                                value={anneeList[parseInt(anneeList.length / 2)]}
                                // onChange={handleChange('currency')}
                                margin="normal"
                            >
                                {anneeList.map(e => (
                                    <MenuItem key={e} value={e}>
                                        {e}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                        <div style={{ marginBottom: 100 }} className="margin-tb-20" >
                            <li>
                                <Grid container spacing={1} alignItems="flex-end">
                                    <Grid item>
                                        <LocationOn />
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            label="Je suis ne a"
                                            error={error}
                                            onChange={this.onChangeInput.bind(this)}
                                            // className="max-width"
                                            name='ville'
                                            style={{ width: 215 }}
                                        />
                                    </Grid>
                                </Grid>
                            </li>
                        </div>
                        <div style={{ marginBottom: 20 }}>
                            <h1 style={{ fontSize: 18, color: 'white' }}>Notre politique de confidentialite</h1>
                            <p style={{ width: 245 }}>
                                Votre vrai prenom, nom de famille et
                                adresse mail restrons confidentiel, seul
                                votre votre pseudo sera visible pas les
                                utilisateurs.
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

export default Parlezvous
