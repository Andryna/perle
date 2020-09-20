import React, { Component } from 'react'
import Connexion from './layouts/connection/Connection'
import Inscription from './layouts/inscription/Inscription'
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
                            isLogin === 'Connexion'
                                ? <Connexion history={ history }/>
                                : <Inscription history={ history }/>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Authentification
