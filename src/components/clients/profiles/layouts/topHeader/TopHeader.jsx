import React from 'react'
import logoLight from './statics/images/logoLight.png'
import menu from './statics/images/menu.png'
import iconeInfo from './statics/images/iconeInfo.png'

function TopHeader () {
    return (
        <div className='TopHeader'>
            <div className="topHeader">
                <div class="logo">
                    <p><img src={logoLight} alt='logoLight'/></p>
                    <h1>PERLE RENCONTRE</h1>
                </div>
                <nav className="rightNav">
                    <ul>
                        <li style={{ cursor: 'pointer' }} onClik={() => console.log('click menu')}><img src={menu} alt='menu'/></li>
                        <li style={{ cursor: 'pointer' }}><img src={iconeInfo} alt='iconInfo'/></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default TopHeader
