import React from 'react'
import profilMini from './statics/images/profilMini.png'
import './statics/styles/profdet.scss'

import Slider from "react-slick";

function BoxActif (props) {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
      }
const connected = props.listUser.map((listUser, index) =>
  <li key={index}>
       <div className="boxProfileActif">
      <Slider {...settings}>
                <div className="accountAvatar">
                <img src="http://www.perlerencontre.fr/myApp/storage/app/public/public/image/itdc.png" alt="profil-mini" className="profilactf"/> 
                 </div>
                
                <div className="detailProfilActif">
                    <p className="profilnameactif">
                    {listUser.nom}
                    </p>
                </div>
         </Slider>
        </div>
      
  </li>
)
    return (
        <div>
        {connected}
      </div>
    )
}

export default BoxActif
