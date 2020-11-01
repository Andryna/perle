import React from 'react'
// import BoxActif from './layouts/boxActif/BoxActif'
// import ProfilDetails from './layouts/boxActif/ProfilDetails'
import accountAvatar from './statics/images/accountAvatar.png'
import './statics/styles/aside.scss'
// import {
//     Modal
// } from '@material-ui/core'

class Aside extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            open: false
        }
    }

    handleClick = () => {
        console.log('I have been clicked')
        this.setState({
            open: false
        }, () => console.log(this.state.isClicked))
    }

    deconnect = () => {
        localStorage.removeItem('Token')
        this.props.history.push('/Authentification=Connexion')
    }

    handleClose = () => {
        this.setState({ open: false })
        console.log(this.state.open)
    }

opendetails = () => {
    this.props.opendetails()
}

render () {
    return (
        <div>
            <div>
                <div className="account">
                    <h1 className="simpleTitle">Mon profil</h1>
                    <div className="accountContent">
                        <p className="accountAvatar">
                            {/* eslint-disable-next-line */}
                            <img src={this.props.datas.imageUser ? this.props.datas.imageUser : accountAvatar} alt='accountAvatar' onClick={() => this.opendetails()} />
                        </p>
                        <ul className="accountDescription">
                            <li className="accountName"> {this.props.datas.name ? this.props.datas.name.charAt(0).toUpperCase() + this.props.datas.name.slice(1) : 'unknow Username'}</li>
                            {/* eslint-disable-next-line */}
                                <li
                                style={{ cursor: 'pointer' }}
                                onClick={() => this.deconnect()}
                            >Deconnexion</li>
                        </ul>
                    </div>
                </div>

                {/* <div className="profileActifs">
                        <h1 className="simpleTitle">Liste des actifs</h1>
                        <BoxActif
                        listUser={this.props.datalist}
                        />

                        <div className="btnMoreActifs">
                            <p>Voir plus</p>
                        </div>
                    </div> */}
            </div>

        </div>
    )
}
}

export default Aside
