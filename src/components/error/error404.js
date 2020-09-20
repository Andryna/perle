import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './error404.scss'
import { KeyboardArrowLeft } from '@material-ui/icons'

class error404 extends Component {
    render () {
        return (
            <div className='error404'>
                <div className="header">
                    <p><Link to="/"> <KeyboardArrowLeft style={{ position: 'relative', top: 6, left: 5 }}/> home pages</Link></p>
                </div>
                <div className="container">
                    <div>
                        <p className="title">404 error</p>
                        <p className="body">Sorry, page not found . . .</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default error404
