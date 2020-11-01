import React, { Component } from 'react'
import './statics/styles/Profiles.scss'
import TopHeader from './layouts/topHeader/TopHeader'
import BoxProfile from './layouts/boxProfile/BoxProfile'
import UserProfile from './layouts/userprofile/UserProfile'
import axios from 'axios'
import BoxActif from './layouts/aside/layouts/boxActif/BoxActif'
import MenuIcon from '@material-ui/icons/Menu'
import ForumRoundedIcon from '@material-ui/icons/ForumRounded'
import photoDeProfile from './statics/images/photoDeProfile.png'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import AddIcon from '@material-ui/icons/Add'

import {
    Mic,
    Search,
    Notifications,
    Mail,
    Visibility,
    Sync,
    Language
} from '@material-ui/icons'

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
            })
            .catch(e => console.log(e))
        if (!Object.prototype.hasOwnProperty.call(localStorage, 'Token')) {
            this.props.history.push('/Authentification=Connexion')
        }
    }

    OnChange (e) {
        e.preventDefault()
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
        const {
            history 
        } = this.props
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
                                <div className="findForm">
                                    <div className='Search'>
                                        <Search style={{ color: '#ffffff' }}/>
                                    </div>
                                    <input
                                        value={search}
                                        type="text"
                                        placeholder="Rechercher..."
                                        name='search'
                                        onChange={this.OnChange.bind(this)}
                                    />
                                    <div className='Mic'>
                                        <Mic style={{ color: '#056f98' }}/>
                                    </div>
                                </div>
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
                                                <input type="checkbox" defaultChecked={true} />
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
                                            <input type="checkbox" defaultChecked={true} />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="checkboxContainer">En ligne
                                            <input type="checkbox" defaultChecked={true} />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>) : null}
                                {/* fin */}
                                {/* debut */}

                                <div className="mainContent">
                                    <div className="col">
                                        <BoxProfile />
                                        <BoxProfile />
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
                                            <BoxProfile />
                                            <BoxProfile />
                                        </div>

                                        <div className="col">
                                            <BoxProfile />
                                            <BoxProfile />
                                        </div>
                                    </div>

                                    <div className="col">
                                        <BoxProfile />
                                        <BoxProfile />
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
                        <img src={photoDeProfile} alt='profil' className="openprofile" onClick={this.openProfil} />
                    </div>
                    <div className="iconbutton">
                        <div className='line'></div>
                        <div onClick={() => history.push('Chat')}>
                            <ForumRoundedIcon onClick={this.handleClick} />
                            <p>Chat</p>
                        </div>
                        <div>
                            <Mail />
                            <p>Messages</p>
                        </div>
                        <div>
                            <Visibility />
                            <p>Visites</p>
                        </div>
                        <div>
                            <Sync />
                            <p>Actualites</p>
                        </div>
                        <div>
                            <Search />
                            <p>Recherche</p>
                        </div>
                        <div>
                            <Notifications onClick={this.handleClick} />
                            <p>Notification</p>
                        </div>
                        <div>
                            <MenuIcon />
                            <p>Menu</p>
                        </div>
                        <div className='line'></div>
                        <div>
                            <Language />
                            <p className='chiffre'>578</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Profiles
