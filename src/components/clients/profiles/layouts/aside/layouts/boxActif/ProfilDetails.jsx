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
import './statics/styles/profdet.scss'
import MenuIcon from '@material-ui/icons/Menu';
import ErrorIcon from '@material-ui/icons/Error';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';


// const ProfilDetails =(props)=> {
    class ProfilDetails extends React.Component {
    // const {details} = props
    clickMe = () => {
        this.props.clickMe()
    }

    render(){
        return (
            <div className="profilcontainer">
                <div className="head">
                <div className="topimage">
                    <div className="testclic">
                <img src={BackArrow} alt='profil' className="arrow" onClick={this.clickMe}/>
                </div>
                <div>
                <ErrorIcon className="arrow"/>
                <MenuIcon className="arrow"/>
                </div>
               
                </div>
                     
                 <p className="nameUser">{this.props.details.name.charAt(0).toUpperCase() + this.props.details.name.slice(1)}</p>
                                     <div  className="boxMondeContainer">
                                        
                                        <div className="photo">
                                             <img src={photoDeProfile} alt='profil' className="profilphoto"/>
                                         </div>
                                         <div className="profilpic">
                                             <img src={photoDeProfile} alt='accountAvatar' className="profilvideo"/>
                                         </div>
                                         
                                      
                                     </div>
             </div>
                                                 <div>
                                         
                                                          <p  className="profileTitle">Ecoute-moi...</p>
                                                 </div>
                                                 <div className="center-div">   
                                                                     <div className="audiobutt" >
                                                                     <img src={VoiceRecognition} alt='profil' className="mouth"/>
                                                                     <img src={AudioWave} alt='profil' className="audioIcon" />
                                                                     
                                                                     </div>
                                                         <p className="textprofiltitle">
                                                         {this.props.details.name.charAt(0).toUpperCase() + this.props.details.name.slice(1)} - {this.props.details.age} ans
                                                         </p>
                                                         <p className="textprofil">
                                                             De {this.props.details.ville} ( 29 km)
                                                         </p>
                                                         <p className="textprofil">
                                                         Bonnus:124
                                                         </p>
                                                         <p className="textprofil">
                                                         Identifiant: {this.props.details.user_id}
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
                                                         Femme {this.props.details.age} ans de type Italienne.
                                                          Je cherche un beau gosse de type Européen ou Latin pour moment
                                                           détente porquoi pas plus
                                                         </p>
                                                       
                                    </div>
                                    <div className="trait2">
                                    </div>
                                                 <div>
                                         
                                                     <p  className="textprofiltitle">Envie du jour</p>
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
                                                             </div>
                                                             
                                                             <div>
                                                                     <p className="name">ce week-end</p>
                                                                     <FormControlLabel
                                                                         control={<Switch color="secondary"/>}
                                                                         // label="Ce week-end"    
                                                                         labelPlacement="top"
                                                                     />
                                                             </div>
                                                      </div>
                                                      </div>
                                                    
                                                      
                                                 </div>
                                                 <div className="score">
                                                          <div>
                                                                      <p className="scoretext">{this.props.details.perle? this.props.details.perle:0}</p>
                                                                      <p className="desc">Perle(s) dejà reçu</p>
                                                          </div>
                                                          <div>
                                                                     <p className="scoretext">{this.props.details.bourse? this.props.details.bourse:0}</p>
                                                                     <p className="desc">Bourse(s) dejà reçu</p>
                                                          </div>
                                                      </div>
                                                 <div>
                                                 <div className="trait2">
                                                 </div>
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
                                                             <p className="coin">Pays: {this.props.details.pays}</p>
                                                             <p className="coin">Region: {this.props.details.region}</p>
                                                             <p className="coin">Departement: {this.props.details.departement}</p>
                                                             <p className="coin">Ville: {this.props.details.ville}</p>
                                                         </div>
                                                 </div>
     
     
                                                 <div className="options">
                                                         <div>
                                                             <div>
                                                                        <p className="other">Mon physique</p>
                                                                        <p className="coin">Tail: {this.props.details.taille}</p>
                                                                        <p className="coin">Poids: {this.props.details.poids}</p>
                                                                        <p className="coin">Couelur de cheveux: {this.props.details.couleur_cheveux}</p>
                                                                        <p className="coin">Longueur de cheveux: {this.props.details.longeur_cheveux}</p>
                                                                        <p className="coin">Style de cheveux: {this.props.details.style_cheveux}</p>
                                                                        <p className="coin">Couleur des yeux: {this.props.details.couleur_yeux}</p>
                                                             </div>
                                                             <div className="decale">
                                                                        <p className="coin">Dégaine: {this.props.details.degaine}</p>
                                                                        <p className="coin">Silouette: {this.props.details.silouchette}</p>
                                                                        <p className="coin">Origine: {this.props.details.origine}</p> 
                                                             </div>
                                                             <div className="decale">
                                                                        <p className="coin">J'ai un faiblesse pour: {this.props.details.faiblesse}</p>
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
                                                                        <p className="coin">Profession: {this.props.details.profession}</p>
                                                                        <p className="coin">Scolarité et etude: {this.props.details.etudes}</p>
                                                                        <p className="coin">Enfant(s): {this.props.details.nombres_enfant}</p>
                                                                        <p className="coin">Religion: {this.props.details.religion}</p>
                                                                        <p className="coin">Goût musicaux: {this.props.details.music}</p>
                                                             </div>
                                                             <div className="decale">
                                                                        <p className="coin">Sport:{this.props.details.sport}</p>
                                                                        <p className="coin">Hobbies: {this.props.details.hobbies}</p>
                                                             </div>
                                                             <div className="decale">
                                                                        <p className="coin">Style de vie:{this.props.details.style_de_vie}</p>
                                                             </div>
                                                             <div className="decale">
                                                                        <p className="coin">Personnalité:{this.props.details.personnalite}</p>
                                                                        <p className="coin">Sexualité: {this.props.details.sexualite}</p>
                                                             </div>
                                                         </div>
                                                        
                                                         
                                                 </div>
                              
                 
                              
                 
         </div> 
         )
    }
    
}

export default ProfilDetails