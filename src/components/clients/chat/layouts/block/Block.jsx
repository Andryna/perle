import React from 'react'
import './statics/styles/Block.scss'
import Avatar from '@material-ui/core/Avatar'
import Moment from 'react-moment'
import 'moment/locale/fr'

function Block ({ isLeft, url, text }) {
    return (
        <div
            className='Block'
            style={{ flexDirection: isLeft ? 'row' : 'row-reverse' }}
        >
            <div className='avatar'>
                <Avatar alt="Remy Sharp" src={ url } />
            </div>
            <div>
                <div
                    className={ 'body ' + (isLeft ? 'borderRaduisLeft' : 'borderRaduisRight')}
                >
                    { text }
                </div>

                <Moment
                    locale='fr'
                    // format="dddd DD MMMM YYYY"
                    fromNow
                    style={{ float: isLeft ? 'left' : 'right' }}
                >
                    { new Date() }
                </Moment>
            </div>
        </div>
    )
}

export default Block
