import React from 'react'

class Header extends React.Component{
    constructor (props) {
        super(props)
       
    }
   
   
    render () {
       
        return (
            <div className='Header'>
            <header>
                <div className="banner">
    <h1 className="mondeName"> {this.props.monde.charAt(0).toUpperCase() + this.props.monde.slice(1)}</h1>
                </div>
            </header>
        </div>
        )

    }

}


export default Header