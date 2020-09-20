import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Connexion extends Component {
    constructor (props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            error: false,
            isLoading: false
        }
    }

    onSubmit (e) {
        e.preventDefault()
        const {
            email,
            password
        } = this.state
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
    }

    onChangeInput (e) {
        this.setState({ [e.target.name]: e.target.value, error: false })
    }

    render () {
        const {
            error,
            isLoading
        } = this.state
        return (
            <div className='Connection'>
                <div className="parent-space-between">
                    <p><Link className="backward-round" to='/'>Revenir</Link></p>
                </div>

                <h1 className="whiteSpecialTitle">Rencontre love</h1>

                <div className="boxRounded dark-shadow">
                    <h2 className="whiteSecondTitle centeredText">Connexion</h2>

                    <form className="margin-tb-20" >
                        <ul className="standar-vertic-spacing standar-bottom-spacing">
                            { error ? <li>Mot de passe oublié</li> : null }
                            <li>
                                <input
                                    className="max-width input-transparent"
                                    type="text"
                                    placeholder="email"
                                    name='email'
                                    onChange={this.onChangeInput.bind(this)}
                                />
                            </li>
                            <li>
                                <input
                                    className="max-width input-transparent"
                                    type="password" placeholder="password"
                                    name='password'
                                    onChange={this.onChangeInput.bind(this)}
                                />
                            </li>
                        </ul>

                        <ul className="standar-vertic-spacing">
                            <li>
                                <input
                                    style={{ cursor: 'pointer' }}
                                    className="max-width btn button-light-blue"
                                    type="button"
                                    value={ isLoading ? 'Loading...' : 'Connexion' }
                                    onClick={this.onSubmit.bind(this)}
                                />
                            </li>
                            <li>
                                <Link to="/Authentification=Inscription">
                                    <input
                                        style={{ cursor: 'pointer' }}
                                        className="max-width btn btn-light-border-only"
                                        type="button"
                                        value="Inscription"
                                    />
                                </Link>
                            </li>
                        </ul>
                    </form>

                    <div>
                        <li className="centeredText small-padding ">Ou se connecter avec</li>
                        <li>
                            <ul className="inline">
                                <li><input className="btn btn-social-network btn-facebook" type="button" value="Facebook" /></li>
                                <li><input className="btn btn-social-network btn-google" type="button" value="Google" /></li>
                            </ul>
                        </li>
                    </div>
                </div>
            </div>
        )
    }
}

export default Connexion
