import React from 'react'
import profilMini from './statics/images/profilMini.png'
import photoDeProfile from './statics/images/photoDeProfile.png'
import BackArrow from './statics/images/BackArrow.png'
import AudioWave from './statics/images/AudioWave.png'
import VoiceRecognition from './statics/images/VoiceRecognition.png'
import SMS from './statics/images/SMS.png'
import EuroMoney from './statics/images/EuroMoney.png'
import Food from './statics/images/Food.png'
import AddUserMale from './statics/images/AddUserMale.png'
import carte from './statics/images/carte.png'
import carte2 from './statics/images/carte2.png'
import Vector from './statics/images/Vector.png'
import XMLID from './statics/images/XMLID.png'
import ladyb from './statics/images/ladyb.png'
import lady2 from './statics/images/lady2.png'
import './statics/styles/userProfile.scss'
import MenuIcon from '@material-ui/icons/Menu';
import ErrorIcon from '@material-ui/icons/Error';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import VideocamIcon from '@material-ui/icons/Videocam';


class UserProfile extends React.Component {

            clickMe = () => {
                this.props.clickMe()
            }

    render(){
        return (
            <div className="profilcontainer">

                <div className="head">
                        <div className="topimage">
                            <div>
                                    <img src={BackArrow} alt='profil' className="arrow" onClick={this.clickMe}/>
                            </div>
                        <div>
                            <ErrorIcon className="arrow"/>
                            <MenuIcon className="arrow"/>
                        </div>
                    
                        </div>
                     
                         <p className="nameUser">{this.props.details.name? this.props.details.name.charAt(0).toUpperCase() + this.props.details.name.slice(1):"vide"}</p>
                         <div  className="boxMondeContainer">
                                        
                             <div className="photo">
                                    <img src={photoDeProfile} alt='profil' className="profilphoto"/>
                                   <div>
                                    <VideocamIcon
                                    style={{
                                        color:'black'
                                    }}
                                    />
                                    </div>
                             </div>
                             <div className="profilpic">
                                     <img src={photoDeProfile} alt='accountAvatar' className="profilvideo"/>
                                     <VideocamIcon/>
                             </div>
                        </div>
             </div>

    <div className="contenue">
             <div>
             <p  className="profileTitle">Ecoute-moi...</p>
              </div>
              <div className="center-div">   
              <div className="audiobutt" >
              <img src={VoiceRecognition} alt='profil' className="mouth"/>
              <img src={AudioWave} alt='profil' className="audioIcon" />
              </div>
              <p className="textprofiltitle">
        {this.props.details.name? this.props.details.name:"vide"} - {this.props.details.age? this.props.details.age:"vide"}ans
              </p>
              <p className="textprofil">
               De  ( 29 km)
               </p>
               <p className="textprofil">
                Bonnus:124
               </p>
               <p className="textprofil">
                Identifiant: {this.props.details.id? this.props.details.id:"vide"}
                </p>
                <p className="textprofil">
                Membre certifié
                 </p>
                </div>
                                        <div className="liberte">
                                                    <div>
                                                    <p  className="textprofiltitle">Ma description</p>
                                                    </div>
                                                    <div>
                                                    <p className="desc">
                                                         Femme {this.props.details.age? this.props.details.age:"vide"} ans de type Italienne.
                                                          Je cherche un beau gosse de type Européen ou Latin pour moment
                                                           détente porquoi pas plus
                                                         </p>
                                                       
                                                    </div>
                                                    <div className="trait2">
                                                    </div>
                                                    <div>
                                         
                                                                    <p className="textprofiltitle">Envie du jour</p>
                                                                    <p className="desc">Envie de boire du café</p>
                    
                                                                    <div className="trait2">  </div>            
                                                                    <p className="profileTitle" >Je suis libre</p>
                                                      
                                                         <div className="libre">
                                                            <div>
                                                                     <p className="name">ce soir</p>
                                                                     <FormControlLabel
                                                                         control={<Switch />}
                                                                         // label="ce soir"
                                                                        
                                                                         labelPlacement="top"
                                                                     />
                                                                     <p className="scoretext">{this.props.details.bourse? this.props.details.bourse:0}</p>
                                                                     <p className="desc">Bourse(s) dejà reçu</p>
                                                             </div>
                                                             
                                                             <div>
                                                                     <p className="name">ce week-end</p>
                                                                     <FormControlLabel
                                                                         control={<Switch color="secondary"/>}
                                                                         // label="Ce week-end"    
                                                                         labelPlacement="top"
                                                                     />
                                                                    <p className="scoretext">{this.props.details.perle? this.props.details.perle:0}</p>
                                                                    <p className="desc">Perle(s) dejà reçu</p>

                                                            </div>
                                                         </div>

                                                    </div>
                                                    
                                                      
                                                 </div>
                                                 


                                                 <div>
                                                 {/* <div className="trait2">
                                                 </div> */}
                                                     <p className="profileTitle">Dernière connexion:</p>
                                                     <p className="heur">Mardi 20 septembre 2020</p>
                                                     <p className="desc">à 14h30</p>
                                                 </div>
     
     
                                                 <div className="options">
                                                             <div>
                                                                     <img src={SMS} alt='sms' className="arrow" onClick={() => alert("afficher message")}/>
                                                                     <p className="notification">Message</p>
                                                             </div>
                                                             <div>
                                                                     <img src={AddUserMale} alt='add' className="arrow" onClick={() => alert("Ajouter ami")}/>
                                                                     <p className="notification">Ajouter ami</p>
                                                             </div>
                                                             <div>
                                                                     <img src={Food} alt='food' className="arrow" onClick={() => alert("Restaurant")}/>
                                                                     <p className="notification">restaurant</p>
                                                             </div>
                                                             <div>
                                                                     <img src={Vector} alt='vector' className="arrow" onClick={() => alert("Perle")}/>
                                                                     <p className="notification">Perle</p>
                                                             </div>
                                                             <div>
                                                                     <img src={EuroMoney} alt='money' className="arrow" onClick={() => alert("Bourse")}/>
                                                                     <p className="notification">Bourse</p>
                                                             </div>
                                                 </div>
     


                                                 <div className="trait">  </div>
     

     
                                                 <div className="optionscart">
                                                         <div>
                                                             <img src={carte} alt='money' className="carte"/>  
                                                         </div>
                                                         <div>
                                                             <img src={carte2} alt='money' className="carte2"/>  
                                                         </div>
                                                         <div>
                                                             <p className="other">Dans quel coin?</p>
                                                             <p className="coin">Pays: {this.props.details.pays? this.props.details.pays:"vide"}</p>
                                                             <p className="coin">Region: {this.props.details.region? this.props.details.region:"vide"}</p>
                                                             <p className="coin">Departement: {this.props.details.departement? this.props.details.departement:"vide"}</p>
                                                             <p className="coin">Ville: {this.props.details.ville? this.props.details.ville:"vide"}</p>
                                                         </div>
                                                 </div>
     

     
                                                 <div className="options">
                                                         <div>
                                                             <div>
                                                                        <p className="other">Mon physique</p>
                                                                        <p className="coin">Tail: {this.props.details.taille? this.props.details.taille:"vide"}</p>
                                                                        <p className="coin">Poids: {this.props.details.poids? this.props.details.poids:"vide"}</p>
                                                                        <p className="coin">Couelur de cheveux: {this.props.details.couleur_cheveux? this.props.details.couleur_cheveux:"vide"}</p>
                                                                        <p className="coin">Longueur de cheveux: {this.props.details.longeur_cheveux? this.props.details.longeur_cheveux:"vide"}</p>
                                                                        <p className="coin">Style de cheveux: {this.props.details.style_cheveux? this.props.details.style_cheveux:"vide"}</p>
                                                                        <p className="coin">Couleur des yeux: {this.props.details.couleur_yeux? this.props.details.couleur_yeux:"vide"}</p>
                                                             </div>
                                                             <div className="decale">
                                                                        <p className="coin">Dégaine: {this.props.details.degaine? this.props.details.degaine:"vide"}</p>
                                                                        <p className="coin">Silouette: {this.props.details.silouchette? this.props.details.silouchette:"vide"}</p>
                                                                        <p className="coin">Origine: {this.props.details.origine? this.props.details.origine:"vide"}</p> 
                                                             </div>
                                                             <div className="decale">
                                                                        <p className="coin">J'ai un faiblesse pour: {this.props.details.faiblesse? this.props.details.faiblesse:"vide"}</p>
                                                             </div>
                                                         </div>
                                                         <div>
                                                             <img src={XMLID} alt='lady' className="lady" />  
                                                         </div>
                                                         
                                                 </div>
     
                                                 <div className="options">
                                                         <div>
                                                             <img src={lady2} alt='lady2' className="lady2"/>  
                                                         </div>
                                                         <div>
                                                             <div className="decale">
                                                                        <p className="other">Mais encore</p>
                                                             </div>
                                                             <div className="decale">
                                                                        <p className="coin">Profession: {this.props.details.profession? this.props.details.profession:"vide"}</p>
                                                                        <p className="coin">Scolarité et etude: {this.props.details.etudes? this.props.details.etudes:"vide"}</p>
                                                                        <p className="coin">Enfant(s): {this.props.details.nombres_enfant? this.props.details.nombres_enfant:"vide"}</p>
                                                                        <p className="coin">Religion: {this.props.details.religion? this.props.details.religion:"vide"}</p>
                                                                        <p className="coin">Goût musicaux: {this.props.details.music? this.props.details.music:"vide"}</p>
                                                             </div>
                                                             <div className="decale">
                                                                        <p className="coin">Sport:{this.props.details.sport? this.props.details.sport:"vide"}</p>
                                                                        <p className="coin">Hobbies: {this.props.details.hobbies? this.props.details.hobbies:"vide"}</p>
                                                             </div>
                                                             <div className="decale">
                                                                        <p className="coin">Style de vie:{this.props.details.style_de_vie? this.props.details.style_de_vie:"vide"}</p>
                                                             </div>
                                                             <div className="decale">
                                                                        <p className="coin">Personnalité:{this.props.details.personnalite? this.props.details.personnalite:"vide"}</p>
                                                                        <p className="coin">Sexualité: {this.props.details.sexualite? this.props.details.sexualite:"vide"}</p>
                                                             </div>
                                                         </div>
                                                        
                                                         
                                                 </div>
                              
    </div>
                              {/*fin  */}
                 
         </div> 
         )
    }
    
}

export default UserProfile