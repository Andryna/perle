import React, { Component } from 'react'
import './statics/styles/Profiles.scss'
import TopHeader from './layouts/topHeader/TopHeader'
import Header from './layouts/header/Header'
import BoxProfile from './layouts/boxProfile/BoxProfile'
import Aside from './layouts/aside/Aside'
import axios from 'axios'
import jwtdecode from 'jwt-decode'

class Profiles extends Component {
    constructor (props) {
        super(props)
        this.state = {
            user: {},
            search: '',
            infouser:[],
            info:[],
            credit:[],
            showUser:[],
            monde:'',
            listUser:[]
        }
    }

    componentDidMount () {
        const Authorization = 'Bearer ' + JSON.parse(localStorage.getItem('Token'))
        axios.get('/api/profil', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: Authorization
            }
        })
            .then(({ data }) => {
                console.log('response: ', data)
                
                this.setState({infouser:data.User,
                               info:data.Information,
                               credit:data.Credit,
                               showUser:data.UtilisateurAfficher,
                               monde:data.Monde,
                               listUser:data.UtilisateurAfficher,

                            })
                // console.log('decode: ', this.state.infouser.User)
                var decoded = jwtdecode(data)
            })
            .catch(e => console.log(e))
        if (!Object.prototype.hasOwnProperty.call(localStorage, 'Token')) {
            this.props.history.push('/Authentification=Connexion')
        }
    }

    OnChange (e) {
        e.prevenDefault()
        this.setState({ [e.target.name]: e.target.value })
    }

    render () {
        const {
            search,
            infouser,
            info,
            monde,
            credit,
            listUser
        } = this.state
        return (
            <div className='Profiles'>
                <div className="header-profiles">
                    <TopHeader/>
                    <Header monde={monde}/>
                </div>

                <div className="center">
                    <Aside
                        datas={{ 
                            //user
                        name: infouser.name,
                        imageUser:infouser.profil_image,
                        audio:infouser.profil_audio,
                        video:infouser.profil_videos,
                        //INformation
                        age:info.age,
                        couleur_cheveux:info.couleur_cheveux,
                        couleur_yeux:info.couleur_yeux,
                        created_at:info.created_at,
                        degaine:info.degaine,
                        departement:info.departement,
                        etudes:info.etudes,
                        faiblesse:info.faiblesse,
                        hobbies:info.hobbies,
                        id:info.id,
                        longeur_cheveux:info.longeur_cheveux,
                        music:info.music,
                        nombres_enfant:info.nombres_enfant,
                        origine:info.origine,
                        pays:info.pays,
                        personnalite:info.personnalite,
                        poids:info.poids,
                        profession:info.profession,
                        region:info.region,
                        religion:info.religion,
                        sexualite:info.sexualite,
                        signe_aestrologique:info.signe_aestrologique,
                        silouchette:info.silouchette,
                        sport:info.sport,
                        style_cheveux:info.style_cheveux,
                        style_de_vie:info.style_de_vie,
                        taille:info.taille,
                        updated_at:info.updated_at,
                        user_id:info.user_id,
                        ville:info.ville,
                        perle:credit.perle,
                        bourse:credit.bourse,
                     }}
                     datalist={listUser}
                        history={this.props.history}
                    />

                    <div className="main">
                        <div className="findBox">
                            <form className="findForm">
                                <input
                                    value={search}
                                    type="text"
                                    placeholder="Rechercher..."
                                    name='search'
                                    onChange={ this.OnChange.bind(this) }
                                />
                            </form>
                        </div>

                     <div className="mainBoxSort">
                            <div className="boxSort">
                                <div className="sortMap">
                                    <label className="checkboxContainer">France
                                        <input type="checkbox" defaultChecked={true}/>
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <div>
                                 <p>{infouser.User}</p> 

                                </div>
                                <div className="sortMap">
                                    <select>
                                        <option>Departement</option>
                                        <option>Lorem</option>
                                        <option>Ipsum</option>
                                        <option>Ipsum</option>
                                    </select>
                                </div>
                                <div className="sortMap">
                                    <select>
                                        <option>Ville de</option>
                                        <option>Lorem</option>
                                        <option>Ipsum</option>
                                        <option>Ipsum</option>
                                    </select>
                                </div>
                            </div>
                            <div className="boxSort">
                                <select placeholder="Age">
                                    <option>Age inconnu</option>
                                    <option>18ans - 25ans</option>
                                    <option>25ans - 35ans </option>
                                    <option>35ans - 45ans</option>
                                </select>
                                <label className="checkboxContainer">Nouvelle
                                    <input type="checkbox" defaultChecked={true}/>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="checkboxContainer">En ligne
                                    <input type="checkbox" defaultChecked={true}/>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>

                        <div className="mainContent">
                            <div className="col">
                                <BoxProfile/>
                                <BoxProfile/>
                            </div>

                            <div className="col colsMiddle">
                                <div className="event">
                                    <h1>A ne pas raté!</h1>
                                    <div className="eventContent">
                                        <p className="eventName">Easy love</p>
                                        <p className="eventDetails"> Ce 25 Septembre 2020 à 20h à 25km </p>
                                    </div>
                                    <p>Love et Humour</p>
                                </div>

                                <div className="col">
                                    <BoxProfile/>
                                    <BoxProfile/>
                                </div>

                                <div className="col">
                                    <BoxProfile/>
                                    <BoxProfile/>
                                </div>
                            </div>

                            <div className="col">
                                <BoxProfile/>
                                <BoxProfile/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Profiles
