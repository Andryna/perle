import React from 'react'
import './statics/styles/Principal.scss'
import TopHeader from './layouts/topHeader/TopHeader'
import { Link } from 'react-router-dom'

function BoxMonde ({ id, title }) {
    return (
        <div
            className="boxMonde"
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                paddingBottom: 20
            }}>
            <h1 style={{ marginBottom: 5 }}>{ title }</h1>
            <ul>
                <li><Link to={'/Authentification=Connexion?id=' + id}>Connexion</Link></li>
                <li><Link to={'/Authentification=Inscription?id=' + id}>Inscription</Link></li>
            </ul>
        </div>

    )
}

function Principal () {
    return (
        <div className='Principal'>
            <div className="root">
                <TopHeader/>

                <div className="main-home">

                    <div className="message">
                        <p>1 seul abonnement...</p>
                        <p>3 mondes différents</p>
                        <p>pour <span className="montant">1€/mois</span></p>
                    </div>

                    <div className="boxMondeContainer">
                        <BoxMonde title='Libertin' id={3}/>
                        <BoxMonde title='Sans lendemain' id={2}/>
                        <BoxMonde title='Love' id={1}/>
                    </div>

                    <div className="topStatistic">
                        <span className="emphase-big">124 000</span> abonnées
                    </div>
                    <ul className="statistics">
                        <li className="statistic"><span className="emphase-big">55%</span> de femmes</li>
                        <li className="statistic"><span className="emphase-big">45%</span> d'hommes</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Principal
