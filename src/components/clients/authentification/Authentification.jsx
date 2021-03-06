import React, { Component } from 'react'
import Connexion from './layouts/connection/Connection'
import Inscription from './layouts/inscription/Inscription'
import Parlezvous from './layouts/parlezvous/Parlezvous'
import MonDomicile from './layouts/monDomicile/MonDomicile'
import Geolocalisation from './layouts/geolocalisation/Geolocalisation'
import Dernier from './layouts/dernier/Dernier'
import Suites from './layouts/suites/Suites'
import './statics/styles/Authentification.scss'

class Authentification extends Component {
    constructor (props) {
        super(props)
        this.state = {
            isLogin: 'Connexion'
        }
    }

    componentDidMount () {
        this.setState({ isLogin: this.props.match.params.type })
        if (Object.prototype.hasOwnProperty.call(localStorage, 'Token')) {
            this.props.history.push('/Profiles')
        }
    }

    componentDidUpdate (prevProps, prevState) {
        if (this.state.isLogin !== this.props.match.params.type) {
            this.setState({ isLogin: this.props.match.params.type })
        }
    }

    render () {
        const { isLogin } = this.state
        const { history } = this.props
        return (
            <div className='Authentification'>
                <div className="dark max-size standar-padding lightText">
                    <div className="centeredBox centeredText">
                        {
                            (isLogin === 'Connexion' || isLogin === '') && <Connexion history={ history }/>
                        }
                        {
                            isLogin === 'Inscription' && <Inscription history={ history }/>
                        }
                        {
                            isLogin === 'Parlezvous' && <Parlezvous history={ history }/>
                        }
                        {
                            isLogin === 'MonDomicile' && <MonDomicile history={ history }/>
                        }
                        {
                            isLogin === 'Geolocalisation' && <Geolocalisation history={ history }/>
                        }
                        {
                            isLogin === 'Dernier' && <Dernier history={ history }/>
                        }
                        {
                            isLogin === 'Suites' && <Suites history={ history }/>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Authentification
