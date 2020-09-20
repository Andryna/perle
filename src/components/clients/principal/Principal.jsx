import React from 'react'
import './statics/styles/Principal.scss'
import TopHeader from './layouts/topHeader/TopHeader'

function BoxMonde (props) {
    return (
        <div
            className="boxMonde"
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                paddingBottom: 20
            }}>
            <h1 style={{ marginBottom: 5 }}>{ props.title }</h1>
            <ul>
                <li><a href="/profiles">Connexion</a></li>
                <li><a href="/profiles">Inscription</a></li>
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
                    <h1 className="site-name">Perle rencontre</h1>

                    <div className="message">
                        <p>1 seul abonnement...</p>
                        <p>3 mondes différents</p>
                        <p>pour <span className="montant">1€/mois</span></p>
                    </div>

                    <div className="boxMondeContainer">
                        <BoxMonde title='Libertin'/>
                        <BoxMonde title='Sans lendemain'/>
                        <BoxMonde title='Love'/>
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
