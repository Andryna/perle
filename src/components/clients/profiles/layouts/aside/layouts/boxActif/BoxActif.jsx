import React from 'react'
import profilMini from './statics/images/profilMini.png'

function BoxActif () {
    return (
        <div className='BoxActif'>
            <div className="boxProfileActif">
                <img src={profilMini} alt="profil-mini" />
                <div className="detailProfilActif">
                    <p className="pseudoProfilActif">Sarah morgan</p>
                </div>
            </div>
        </div>
    )
}

export default BoxActif
