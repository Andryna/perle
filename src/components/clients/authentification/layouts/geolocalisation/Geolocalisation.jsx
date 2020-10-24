import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    IconButton,
    Button
} from '@material-ui/core'
import {
    createMuiTheme,
    ThemeProvider
} from '@material-ui/core/styles'

import {
    LocationOn,
    ArrowBack,
    Refresh
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

const diametre = 300
const padding = 30
class Geolocalisation extends Component {
    constructor (props) {
        super(props)
        this.state = {
            error: false,
            isMove: true,
            latitude: '',
            longitude: ''
        }
    }

    setReturn () {
        this.props.history.push('/Authentification=MonDomicile')
    }

    async geoloc () {
        this.props.putInscription({
            ...this.props.inscription.datas,
            ville: 'Fianarantsoa',
            departement: 'tsy haiko',
            region: 'Mahatsiatra ambony',
            pays: 'Madagascar'
        })
    }

    componentDidMount () {
        this.actualiseSearch()
    }

    actualiseSearch () {
        this.setState({ error: false, isMove: true })
        this.geoloc()
        setTimeout(() => {
            this.setState({ isMove: false }, () => this.onSubmit())
        }, 10000)
    }

    onSubmit () {
        const {
            ville,
            departement,
            region,
            pays
        } = this.props.inscription.datas
        console.log('submit', this.props.inscription.datas)
        this.setState({ error: false })
        if (ville !== '' && departement !== '' && region !== '' && pays !== '') {
            this.setState({ isLoading: true })
            this.props.history.push('/Authentification=Parlezvous')
        } else {
            this.setState({ error: true })
        }
    }

    annullerSearch (e) {
        this.props.putInscription({
            ...this.props.inscription.datas,
            ville: '',
            departement: '',
            region: '',
            pays: ''
        })
        this.props.history.push('/Authentification=MonDomicile')
    }

    render () {
        const {
            isMove,
            error
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
                          Ma Position GPS
                        </h2>
                        <div>
                            <div
                                style={{ height: diametre, width: diametre }}>
                                <div
                                    style={{
                                        height: diametre - padding,
                                        width: diametre - padding,
                                        borderColor: error ? 'red' : null
                                    }}
                                    className='circleLocation'
                                >
                                    <div
                                        style={{
                                            height: diametre - (2 * padding),
                                            width: diametre - (2 * padding)
                                        }}
                                        className='circleLocation'
                                    >
                                        <div
                                            style={{
                                                position: 'relative',
                                                height: diametre - (3 * padding),
                                                width: diametre - (3 * padding),
                                                display: 'flex'
                                            }}
                                            className='circleLocation'
                                        >
                                            <div>
                                                {
                                                    error && <Refresh style={{ cursor: 'pointer' }} onClick={this.actualiseSearch.bind(this)} />
                                                }
                                                <LocationOn
                                                    className={isMove ? 'cursorLocatisation' : ''}
                                                    style={{
                                                        fontSize: 100,
                                                        position: 'absolute',
                                                        fill: error ? 'red' : null
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '20px 0'
                                }}
                            >
                                <p style={{ fontSize: 20, overflowWrap: 'break-word', width: 250, textAlign: 'center' }}>
                                    Perle rencontre essaie de géolocalisation votre position
                                </p>
                            </div>

                            <Button
                                variant="contained"
                                color="secondary"
                                size="small"
                                style={{
                                    borderRadius: 30,
                                    backgroundColor: '#eb565a',
                                    color: 'white'
                                }}
                                onClick={this.annullerSearch.bind(this) }
                            >
                                je ne souhaite pas etre localiser
                            </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Geolocalisation)
