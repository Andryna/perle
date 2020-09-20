import React from 'react'
import BoxActif from './layouts/boxActif/BoxActif'
import accountAvatar from './statics/images/accountAvatar.png'

function Aside (props) {
    const deconnect = () => {
        localStorage.removeItem('token')
        props.history.push('/Authentification=Connexion')
    }
    return (
        <div className='Aside'>
            <aside>
                <div className="account">
                    <h1 className="simpleTitle">Mon profil</h1>
                    <div className="accountContent">
                        <p className="accountAvatar">
                            <img src={accountAvatar} alt='accountAvatar'/>
                        </p>
                        <ul className="accountDescription">
                            <li className="accountName">Sarah Mileva</li>
                            <li
                                style={{ cursor: 'pointer' }}
                                onClick={deconnect}
                            >Deconnexion</li>
                        </ul>
                    </div>
                </div>

                <div className="profileActifs">
                    <h1 className="simpleTitle">Liste des actifs</h1>
                    <BoxActif/>
                    <BoxActif/>
                    <BoxActif/>
                    <BoxActif/>
                    <div className="btnMoreActifs">
                        <p>Voir plus</p>
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default Aside
