import React from 'react'
import logoLight from './statics/images/logoLight.png'
import menu from './statics/images/menu.png'
import iconeInfo from './statics/images/iconeInfo.png'

function TopHeader () {
    return (
        <div className='TopHeader'>
            <div className="topHeader">
                <div className="logo">
                    <p><img src={logoLight} alt='logoLight'/></p>
                    <h1>PERLE RENCONTRE</h1>
                </div>
                <h1 className="site-name">Perle rencontre</h1>
                <nav className="rightNav">
                    <ul className="display-align">
                        <li><img src={iconeInfo} alt='iconInfo'/></li> {' '}
                        <li><img src={menu} alt='menu'/></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default TopHeader
