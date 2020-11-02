import React from 'react'
import Badge from '@material-ui/core/Badge'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import './statics/styles/Header.scss'

import {
    ArrowBack,
    MoreVert
} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1)
        },
        transition: 'transform 1000ms cubic-bezier(0,.98,.3,.95)'
    }
}))

const datas = [
    { id: 1, notification: 0, url: 'https://www.village-justice.com/articles/local/cache-gd2/61/b91c0bc706676d96e362711536df5b.jpg?1603207633' },
    { id: 2, notification: 0, url: 'https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg' },
    { id: 3, notification: 2, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9e3tHfGvC1Z9xPpa_bU8ynCuWg_rn-C1YBQ&usqp=CAU' },
    { id: 4, notification: 0, url: 'https://images-na.ssl-images-amazon.com/images/I/81lKUxkmF5L._SY600_.jpg' },
    { id: 5, notification: 0, url: 'https://www.fourchette-et-bikini.fr/sites/default/files/styles/full_670x350/public/femme_amoureuse.jpg?itok=ovXsCBSe' },
    { id: 6, notification: 0, url: 'https://www.village-justice.com/articles/local/cache-gd2/61/b91c0bc706676d96e362711536df5b.jpg?1603207633' },
    { id: 7, notification: 0, url: 'https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg' },
    { id: 8, notification: 2, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9e3tHfGvC1Z9xPpa_bU8ynCuWg_rn-C1YBQ&usqp=CAU' },
    { id: 9, notification: 0, url: 'https://images-na.ssl-images-amazon.com/images/I/81lKUxkmF5L._SY600_.jpg' },
    { id: 10, notification: 0, url: 'https://www.fourchette-et-bikini.fr/sites/default/files/styles/full_670x350/public/femme_amoureuse.jpg?itok=ovXsCBSe' }
]

function BadgeAvatars ({ user, notification, url }) {
    const classes = useStyles()

    return (
        <div
            className={classes.root}
            style={{ transform: 'scale(' + (user ? 1.7 : 1) + ') translateY(' + (user ? 5 : 0) + 'px)' }}
        >
            <Badge
                overlap="circle"
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                badgeContent={notification !== 0 && <div className='badge'>2</div>}
            >
                <Avatar
                    // style={{ width: user ? widthUser : 40, height: user ? widthUser : 40 }}
                    style={{ width: 40, height: 40 }}
                    alt="Travis Howard"
                    src={url}
                />
            </Badge>
        </div>
    )
}

// const insert = (arr, index, newItem) => [
//     ...arr.slice(0, index),
//     newItem,
//     ...arr.slice(index)
// ]

function Header () {
    const [center, setCenter] = React.useState(3)

    // eslint-disable-next-line
    const delay = ms => new Promise(res => setTimeout(res, ms))

    const dimIndex = async (e) => {
        for (let i = 0; i < e; i++) {
            setCenter(a => a + 1)
            await delay(500)
        }
    }

    const augIndex = async (e) => {
        for (let i = 0; i < e; i++) {
            setCenter(a => a - 1)
            await delay(500)
        }
    }

    return (
        <div className='Header'>
            <div>
                <ArrowBack style={{ color: 'white' }} />
            </div>

            <h1>Veronique</h1>
            <div className='bodyBody'>
                <div
                    style={{ width: 74 * datas.length, transform: 'translateX(' + (-74 * (center - 3)) + 'px)' }}
                    className='body vitesseTranslate'
                >
                    {
                        datas && datas.map(({ notification, url, id }, i) => {
                        /* eslint-disable */
                        if (i < center) {
                            return (<div key={id} className='bl' onClick={() => augIndex(center - i)} >
                                <BadgeAvatars user={false} url={url} notification={notification} />
                            </div>)
                        }
                        if (i === center) {
                            return (<div key={id} className='bl veronique' >
                                <BadgeAvatars user={true} url={url} notification={notification} />
                            </div>)
                        }
                        if (i > center) {
                            return (
                                <div key={id} className='bl' onClick={() => dimIndex(i - center)} >
                                    <BadgeAvatars user={false} url={url} notification={notification} />
                                </div>
                            )
                        }
                        /* eslint-enable */
                        })
                    }
                </div>
            </div>

            {
                // newData && newData.map(({ notification, url }, i) => {
                //     if (i === len / 2) {
                //         return (<div className='veronique'>
                //             <h1>Veronique</h1>
                //             <BadgeAvatars user={true} url={url} notification={notification} />
                //         </div>)
                //     }
                //     return (
                //         <div>
                //             <BadgeAvatars user={false} url={url} notification={notification} />
                //         </div>
                //     )
                // })
            }
            <div>
                <MoreVert style={{ color: 'white' }} />
            </div>
        </div>
    )
}

export default Header
