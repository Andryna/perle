import React from 'react'
import logoLight from './statics/images/logoLight.png'
import menu from './statics/images/menu.png'
import iconeInfo from './statics/images/iconeInfo.png'

class TopHeader extends React.Component{
    constructor (props) {
        super(props)
       
    }
    render () {
    return (
        <div className='TopHeader'>
            <div className="topHeader">
                <div className="logo">
                    <p><img src={logoLight} alt='logoLight'/></p>
                    <h1>PERLE RENCONTRE</h1>
                </div>
                <div>
                    <h1 className="mondeName">{this.props.monde? this.props.monde:null
                    }</h1>
                </div>
                <nav className="rightNav">
                    <ul>
                        <li style={{ cursor: 'pointer' }} onClick={() => console.log('click menu')}><img src={menu} alt='menu'/></li>
                        <li style={{ cursor: 'pointer' }}><img src={iconeInfo} alt='iconInfo'/></li>
                    </ul>
                </nav>
            </div>
        </div>
        )

    }

}

export default TopHeader
