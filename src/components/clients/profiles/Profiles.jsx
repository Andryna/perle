import React, { Component } from 'react'
import './statics/styles/Profiles.scss'
import TopHeader from './layouts/topHeader/TopHeader'
import Header from './layouts/header/Header'
import BoxProfile from './layouts/boxProfile/BoxProfile'

class Profiles extends Component {
    render () {
        return (
            <div className='Profiles'>
                <div className="header-profiles">
                    <TopHeader/>
                    <Header/>
                </div>

                <div className="center">
                    <app-aside></app-aside>

                    <div className="main">
                        <div className="findBox">
                            <form className="findForm">
                                <input type="text" placeholder="Rechercher..." />
                            </form>
                        </div>

                        <div className="mainBoxSort">
                            <div className="boxSort">
                                <div className="sortMap">
                                    <label className="checkboxContainer">France
                                        <input type="checkbox" checked="checked"/>
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <div className="sortMap">
                                    <select>
                                        <option>Departement</option>
                                        <option>Lorem</option>
                                        <option>Ipsum</option>
                                        <option>Ipsum</option>
                                    </select>
                                </div>
                                <div className="sortMap">
                                    <select>
                                        <option>Ville de</option>
                                        <option>Lorem</option>
                                        <option>Ipsum</option>
                                        <option>Ipsum</option>
                                    </select>
                                </div>
                            </div>
                            <div className="boxSort">
                                <select placeholder="Age">
                                    <option>Age inconnu</option>
                                    <option>18ans - 25ans</option>
                                    <option>25ans - 35ans </option>
                                    <option>35ans - 45ans</option>
                                </select>
                                <label className="checkboxContainer">Nouvelle
                                    <input type="checkbox" checked="checked"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="checkboxContainer">En ligne
                                    <input type="checkbox" checked="checked"/>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>

                        <div className="mainContent">
                            <div className="col">
                                <BoxProfile/>
                                <BoxProfile/>
                            </div>

                            <div className="col colsMiddle">
                                <div className="event">
                                    <h1>A ne pas raté!</h1>
                                    <div className="eventContent">
                                        <p className="eventName">Easy love</p>
                                        <p className="eventDetails"> Ce 25 Septembre 2020 à 20h à 25km </p>
                                    </div>
                                    <p>Love et Humour</p>
                                </div>

                                <div className="col">
                                    <BoxProfile/>
                                    <BoxProfile/>
                                </div>

                                <div className="col">
                                    <BoxProfile/>
                                    <BoxProfile/>
                                </div>
                            </div>

                            <div className="col">
                                <BoxProfile/>
                                <BoxProfile/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Profiles
