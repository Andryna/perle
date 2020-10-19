import React from 'react'
import BoxActif from './layouts/boxActif/BoxActif'
import ProfilDetails from './layouts/boxActif/ProfilDetails'
import accountAvatar from './statics/images/accountAvatar.png'
import './statics/styles/aside.scss'
import {
    Modal 
} from '@material-ui/core'



class Aside extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            open: false,     
        }
    }
    handleClick = () => {
        console.log('I have been clicked')
        this.setState({
          open: false
        }, () => console.log(this.state.isClicked))
    
      }
    deconnect = () => {
        localStorage.removeItem('Token')
        this.props.history.push('/Authentification=Connexion')
    }
    handleClose = () => {
        this.setState({open:false})
        console.log(this.state.open)
    }


   
    render () {
       
        return (
            <div>
                {!this.state.open?(<div>
                    <div className="account">
                        <h1 className="simpleTitle">Mon profil</h1>
                        <div className="accountContent">
                            <p className="accountAvatar">
                                <img src={this.props.datas.imageUser? this.props.datas.imageUser:accountAvatar} alt='accountAvatar' onClick={() => this.setState({open:true})} />
                            </p>
                            <ul className="accountDescription">
                                <li className="accountName"> {this.props.datas.name? this.props.datas.name.charAt(0).toUpperCase() + this.props.datas.name.slice(1):"unknow Username"}</li>
                                {/* eslint-disable-next-line */}
                                <li
                                    style={{ cursor: 'pointer' }}
                                    onClick={() =>this.deconnect()}
                                >Deconnexion</li>
                            </ul>
                        </div>
                    </div>
    
                    <div className="profileActifs">
                        <h1 className="simpleTitle">Liste des actifs</h1>
                        <BoxActif 
                        listUser={this.props.datalist}
                        />
                     
                        <div className="btnMoreActifs">
                            <p>Voir plus</p>
                        </div>
                    </div>
                </div>):<div className="profileActifs">
                    <ProfilDetails
                     details={{ name: this.props.datas.name, 
                                imageUser:this.props.datas.profil_image,
                                age:this.props.datas.age,
                                user_id:this.props.datas.user_id,
                                ville:this.props.datas.ville,
                                perle:this.props.datas.perle,
                                bourse:this.props.datas.bourse,
                                audio:this.props.datas.audio,
                                video:this.props.datas.video,
                                couleur_cheveux:this.props.datas.couleur_cheveux,
                                couleur_yeux:this.props.datas.couleur_yeux,
                                created_at:this.props.datas.created_at,
                                degaine:this.props.datas.degaine,
                                departement:this.props.datas.departement,
                                etudes:this.props.datas.etudes,
                                faiblesse:this.props.datas.faiblesse,
                                hobbies:this.props.datas.hobbies,
                                id:this.props.datas.id,
                                longeur_cheveux:this.props.datas.longeur_cheveux,
                                music:this.props.datas.music,
                                nombres_enfant:this.props.datas.nombres_enfant,
                                origine:this.props.datas.origine,
                                pays:this.props.datas.pays,
                                personnalite:this.props.datas.personnalite,
                                poids:this.props.datas.poids,
                                profession:this.props.datas.profession,
                                region:this.props.datas.region,
                                religion:this.props.datas.religion,
                                sexualite:this.props.datas.sexualite,
                                signe_aestrologique:this.props.datas.signe_aestrologique,
                                silouchette:this.props.datas.silouchette,
                                sport:this.props.datas.sport,
                                style_cheveux:this.props.datas.style_cheveux,
                                style_de_vie:this.props.datas.style_de_vie,
                                taille:this.props.datas.taille,
                                updated_at:this.props.datas.updated_at,
                                
                            }}
                     history={this.props.history}
                     clickMe={this.handleClick}
                    />
               </div>}

            </div>
        )

    }

}


export default Aside
