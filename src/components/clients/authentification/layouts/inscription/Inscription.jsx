import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Inscription extends Component {
    constructor (props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            vpassword: '',
            mondes: 1,
            error: false,
            isLoading: false,
            isNotCopy: false
        }
    }

    onSubmit (e) {
        e.preventDefault()
        const {
            name,
            email,
            password,
            mondes,
            vpassword
        } = this.state
        if (password === vpassword) {
            if (name && email && password && mondes) {
                this.setState({ isLoading: true })
                axios
                    .post('/api/register', {
                        name,
                        email,
                        password,
                        mondes
                    })
                    .then(async ({ data: { token } }) => {
                        this.setState({ isLoading: false })
                        await localStorage.setItem('Token', JSON.stringify(token))
                        console.log(token)
                        this.props.history.push('/Profiles')
                    })
                    .catch(e => {
                        this.setState({ isLoading: false, error: true })
                    })
            }
        } else {
            this.setState({ isNotCopy: true })
        }
    }

    onChangeInput (e) {
        this.setState({ [e.target.name]: e.target.value, error: false })
    }

    render () {
        const {
            isLoading,
            isNotCopy
        } = this.state
        return (
            <div className='Inscription'>
                <div className="parent-space-between">
                    <p><Link to='/' className="backward-round">Revenir</Link></p>
                </div>

                <h1 className="whiteSpecialTitle">Rencontre love</h1>

                <div className="boxRounded dark-shadow">
                    <h2 className="whiteSecondTitle centeredText">Inscription</h2>
                    { isNotCopy ? 'Mot de pass differents' : null }

                    <form className="margin-tb-20" >
                        <ul className="standar-vertic-spacing standar-bottom-spacing">
                            <li>
                                <ul className="inline">
                                    <li>
                                        <input name="sexe" type="radio" value="madame"/>
                                        <span>Madame</span>
                                        <div className="check"></div>
                                    </li>
                                    <li style={{ marginLeft: 30 }}>
                                        <input name="sexe" type="radio" value="monsieur"/>
                                        <span>Monsieur</span>
                                        <div className="check"></div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <input
                                    className="max-width input-transparent"
                                    type="text"
                                    placeholder="Nom *"
                                    name='name'
                                    onChange={this.onChangeInput.bind(this)}

                                />
                            </li>
                            <li>
                                <input
                                    className="max-width input-transparent"
                                    type="text"
                                    placeholder="email *"
                                    name='email'
                                    onChange={this.onChangeInput.bind(this)}
                                />
                            </li>
                            <li>
                                <input
                                    className="max-width input-transparent"
                                    type="password"
                                    placeholder="Mot de passe *"
                                    name='password'
                                    onChange={this.onChangeInput.bind(this)}
                                />
                            </li>
                            <li>
                                <input
                                    className="max-width input-transparent"
                                    type="password"
                                    placeholder="Vérification de mot de passe *"
                                    name='vpassword'
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
                                    value={ isLoading ? 'Loading...' : 'Inscription' }
                                    onClick={this.onSubmit.bind(this)}
                                />
                            </li>
                        </ul>
                    </form>

                    <div>
                        <li className="centeredText small-padding ">S'inscrire avec</li>
                        <li>
                            <ul className="inline">
                                <li><input className="btn btn-social-network btn-facebook" type="button" value="Facebook" /></li>
                                <li><input className="btn btn-social-network btn-google" type="button" value="Google" /></li>
                            </ul>
                        </li>
                        <li className="centeredText small-padding ">* Champ obligatoire</li>
                    </div>
                </div>

            </div>)
    }
}

export default Inscription
