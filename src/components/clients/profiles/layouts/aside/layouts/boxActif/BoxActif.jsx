import React from 'react'
import profilMini from './statics/images/profilMini.png'
import './statics/styles/profdet.scss'

function BoxActif (props) {
const todoItems = props.listUser.map((listUser, index) =>
  <li key={index}>
       <div className="boxProfileActif">
                <img src="http://www.perlerencontre.fr/myApp/storage/app/public/public/image/itdc.png" alt="profil-mini" className="profilactf"/> 
                {/* <p>{}</p> */}
                <div className="detailProfilActif">
                    <p className="profilnameactif">
                    {listUser.nom}
                    </p>
                </div>
            </div>
      
  </li>
)
    return (
        <div className='BoxActif'>        
                    {todoItems}      
        </div>
    )
}

export default BoxActif
