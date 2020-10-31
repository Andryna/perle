import React from 'react'

function Header ({ monde }) {
    return (
        <div className='Header'>
            <header>
                <div className="banner">
                    <h1 className="mondeName">
                        {
                            monde.charAt(0).toUpperCase() + monde.slice(1)
                        }
                    </h1>
                </div>
            </header>
        </div>
    )
}

export default Header
