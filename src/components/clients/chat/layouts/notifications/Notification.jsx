import React from 'react'
import './statics/styles/Notification.scss'
import Close from '@material-ui/icons/Close'

function Notification ({ toogleShowNotification }) {
    console.log({ toogleShowNotification })
    return (<div className='Notification'>
        <Close size='small' onClick={() => toogleShowNotification}/>
        <div>
            <div>
                <h1>Felicitation</h1>
                <p>Veronique a gagne</p>
            </div>
        </div>
    </div>)
}

export default Notification
