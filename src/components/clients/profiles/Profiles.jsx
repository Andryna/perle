import React, { Component } from 'react'
import './statics/styles/Profiles.scss'
import TopHeader from './layouts/topHeader/TopHeader'
import Header from './layouts/header/Header'
import BoxProfile from './layouts/boxProfile/BoxProfile'
import Aside from './layouts/aside/Aside'
import UserProfile from './layouts/userprofile/UserProfile'
import axios from 'axios'
import jwtdecode from 'jwt-decode'
import BoxActif from './layouts/aside/layouts/boxActif/BoxActif'
import Slider from 'react-slick'
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import VisibilityIcon from '@material-ui/icons/Visibility'
import ForumRoundedIcon from '@material-ui/icons/ForumRounded'
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded'
import photoDeProfile from './statics/images/photoDeProfile.png'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Divider } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

import Fab from '@material-ui/core/Fab'
import EditIcon from '@material-ui/icons/Edit'
import FavoriteIcon from '@material-ui/icons/Favorite'
import NavigationIcon from '@material-ui/icons/Navigation'

class Profiles extends Component {
    constructor (props) {
        super(props)
        this.state = {
            user: {},
            search: '',
            infouser: [],
            info: [],
            credit: [],
            showUser: [],
            monde: '',
            listUser: [],
            teststate: false,
            quicksearch: false
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

                this.setState({
                    infouser: data.User,
                    info: data.Information,
                    credit: data.Credit,
                    showUser: data.UtilisateurAfficher,
                    monde: data.Monde,
                    listUser: data.UtilisateurAfficher

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

    handleClick = () => {
        console.log('I have been clicked')
        this.setState({
            teststate: false
        }, () => console.log(this.state.isClicked))
    }

        openProfil = () => {
            // alert("ok")
            this.setState({
                teststate: true
            })
        }

        quicksearch = () => {
            this.setState({ quicksearch: !this.state.quicksearch })
        }

        render () {
            const {
                search,
                infouser,
                info,
                monde,
                credit,
                listUser,
                teststate,
                quicksearch
            } = this.state
            // const settings = {
            //     className: 'center',
            //     centerMode: true,
            //     infinite: true,
            //     centerPadding: '60px',
            //     slidesToShow: 3,
            //     speed: 500
            // }
            return (
                <div>
                    {!teststate ? (<div className='Profiles'>
                        <div className="header-profiles">
                            <TopHeader
                                monde={monde}
                            />
                            {/* <Header monde={monde}/> */}

                            <div className='slideshow' style={{ position: 'relative', top: -250 }}>
                                <div className='slidecontent' >
                                    <BoxActif
                                        listUser={listUser}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="center">
                            {/* <Aside
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
                     opendetails={this.openProfil}
                     datalist={listUser}
                        history={this.props.history}
                    /> */}

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
                                {/* eslint-disable-next-line */}
                                <div className="more" onClick={() => this.quicksearch()}>
                                    <AddIcon style={{ color: 'white' }} />
                                    <p className="searchLabel">Recherche rapide</p>
                                </div>
                                <div>
                                    {/* debut */}
                                    {quicksearch ? (<div className="mainBoxSort">
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
                                    </div>) : null}
                                    {/* fin */}
                                    {/* debut */}

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

                                    {/* fin */}
                                </div>
                            </div>
                        </div>

                    </div>) : <div><UserProfile
                        clickMe={this.handleClick}
                        details={{
                            // user
                            name: infouser.name,
                            imageUser: infouser.profil_image,
                            audio: infouser.profil_audio,
                            video: infouser.profil_videos,
                            // INformation
                            age: info.age,
                            couleur_cheveux: info.couleur_cheveux,
                            couleur_yeux: info.couleur_yeux,
                            created_at: info.created_at,
                            degaine: info.degaine,
                            departement: info.departement,
                            etudes: info.etudes,
                            faiblesse: info.faiblesse,
                            hobbies: info.hobbies,
                            id: info.id,
                            longeur_cheveux: info.longeur_cheveux,
                            music: info.music,
                            nombres_enfant: info.nombres_enfant,
                            origine: info.origine,
                            pays: info.pays,
                            personnalite: info.personnalite,
                            poids: info.poids,
                            profession: info.profession,
                            region: info.region,
                            religion: info.religion,
                            sexualite: info.sexualite,
                            signe_aestrologique: info.signe_aestrologique,
                            silouchette: info.silouchette,
                            sport: info.sport,
                            style_cheveux: info.style_cheveux,
                            style_de_vie: info.style_de_vie,
                            taille: info.taille,
                            updated_at: info.updated_at,
                            user_id: info.user_id,
                            ville: info.ville,
                            perle: credit.perle,
                            bourse: credit.bourse
                        }}
                    />
                    </div>}

                    <div className="floatbutton">
                        <div className="opencontainer">
                            <img src={photoDeProfile} alt='profil' className="openprofile" onClick={this.openProfil}/>
                        </div>
                        <div className="iconbutton">
                            <Fab color="secondary" aria-label="edit">
                                <HomeIcon onClick={this.handleClick}/>
                            </Fab>
                            <Fab color="secondary" aria-label="edit">
                                <MenuIcon />
                            </Fab>
                            <Fab disabled aria-label="like">
                                <ForumRoundedIcon />
                            </Fab>
                            <Fab color="primary" aria-label="add">
                                <NotificationsRoundedIcon />
                            </Fab>
                            <Fab color="primary" aria-label="add">
                                <AddIcon />
                            </Fab>
                        </div>
                    </div>

                </div>
            )
        }
}

export default Profiles
