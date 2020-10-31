import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    TextField,
    FormControl,
    IconButton,
    Grid,
    Button
} from '@material-ui/core'
import {
    createMuiTheme,
    ThemeProvider
} from '@material-ui/core/styles'

import {
    LocationOn,
    ArrowBack,
    EmojiFlags,
    Map
} from '@material-ui/icons'
import { connect } from 'react-redux'

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

class MonDomicile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: false,
            isLoading: false
        }
    }

    onSubmit(e) {
        e.preventDefault()
        const {
            ville,
            departement,
            region,
            pays
        } = this.props.inscription.datas
        this.setState({ isReq: false })
        if (ville !== '' && departement !== '' && region !== '' && pays !== '') {
            this.setState({ isLoading: true })
            this.props.history.push('/Authentification=Parlezvous')
        } else {
            this.setState({ isReq: true })
        }
    }

    onChangeInput(e) {
        this.setState({ isReq: false })
        this.props.putInscription({ ...this.props.inscription.datas, [e.target.name]: e.target.value })
    }

    setReturn() {
        this.props.history.goBack()
    }

    render() {
        const {
            error,
            isLoading
        } = this.state
        const {
            ville,
            departement,
            region,
            pays
        } = this.props.inscription.datas
        return (
            <div className='Connection'>
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
                        Mon domicile
                    </h2>
                    <ul className="standar-vertic-spacing">
                        <ThemeProvider theme={theme}>
                            <Button
                                variant="contained"
                                color="primary"
                                style={{ borderRadius: 30 }}
                                startIcon={<LocationOn />}
                                onClick={() => this.props.history.push('/Authentification=Geolocalisation')}
                            >
                                Ma position GPS
                            </Button>
                        </ThemeProvider>
                    </ul>
                    <h2 style={{ color: '#afb0b2', marginTop: 20 }}>- ou -</h2>
                    <form className="margin-tb-20" >
                        <FormControl required error={error} component="fieldset">
                            <ul style={{ marginBottom: 30 }}>
                                <li>
                                    <Grid container spacing={1} alignItems="flex-end">
                                        <Grid item>
                                            <EmojiFlags />
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                label="Ville *"
                                                error={error}
                                                value={ville}
                                                onChange={this.onChangeInput.bind(this)}
                                                // className="max-width"
                                                name='ville'
                                                style={{ width: 215 }}
                                            />
                                        </Grid>
                                    </Grid>
                                </li>
                                <li>
                                    <Grid container spacing={1} alignItems="flex-end">
                                        <Grid item>
                                            <EmojiFlags />
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                label="Département *"
                                                error={error}
                                                value={departement}
                                                onChange={this.onChangeInput.bind(this)}
                                                name='departement'
                                                style={{ width: 215 }}
                                            />
                                        </Grid>
                                    </Grid>
                                </li>
                                <li>
                                    <Grid container spacing={1} alignItems="flex-end">
                                        <Grid item>
                                            <EmojiFlags />
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                label="Région *"
                                                error={error}
                                                value={region}
                                                onChange={this.onChangeInput.bind(this)}
                                                name='region'
                                                style={{ width: 215 }}
                                            />
                                        </Grid>
                                    </Grid>
                                </li>
                                <li>
                                    <Grid container spacing={1} alignItems="flex-end">
                                        <Grid item>
                                            <Map />
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                label="Pays *"
                                                error={error}
                                                value={pays}
                                                onChange={this.onChangeInput.bind(this)}
                                                name='pays'
                                                style={{ width: 215 }}
                                            />
                                        </Grid>
                                    </Grid>
                                </li>
                            </ul>
                        </FormControl>
                        <ul className="standar-vertic-spacing">
                            <li>
                                <input
                                    style={{ cursor: 'pointer' }}
                                    className="max-width btn button-light-blue"
                                    type="button"
                                    value={isLoading ? 'Loading...' : 'Valider'}
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

export default connect(mapStateToProps, mapDispatchToProps)(MonDomicile)
