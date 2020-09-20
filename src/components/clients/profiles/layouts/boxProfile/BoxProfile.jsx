import React from 'react'
import profil from './statics/images/profil.png'

function BoxProfile () {
    const pseudo = 'black'
    const age = '24'
    const ville = 'Fianarantsoa'
    const distance = '1000'
    return (
        <div className='BoxProfile'>
            <div className="boxProfile">
                <p><img src={profil} alt='profil' /></p>
                <div className="profileDesc">
                    <div className="indicationsContainer">
                        <div className="labelIndication">
                            <ul>
                                <li className="indication">LCS</li>
                                <li className="indication">Nouvelle</li>
                            </ul>
                        </div>
                    </div>
                    <p className="profilePseudo">{ pseudo } { age }ans</p>
                    <p className="profileLocalistaion">{ ville } à { distance }km</p>
                </div>
            </div>
        </div>
    )
}

export default BoxProfile
