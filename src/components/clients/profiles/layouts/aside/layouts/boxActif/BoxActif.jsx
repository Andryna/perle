import React from 'react'
import './statics/styles/profdet.scss'
import Badge from '@material-ui/core/Badge'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { ArrowRight, ArrowLeft } from '@material-ui/icons'

const StyledBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: '$ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""'
        }
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0
        }
    }
}))(Badge)

const datas = [
    { id: 0, url: 'https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg' },
    { id: 1, url: 'https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg' },
    { id: 2, url: 'https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg' },
    { id: 3, url: 'https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg' },
    { id: 4, url: 'https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg' },
    { id: 5, url: 'https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg' },
    { id: 6, url: 'https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg' },
    { id: 7, url: 'https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg' },
    { id: 8, url: 'https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg' },
    { id: 9, url: 'https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg' },
    { id: 10, url: 'https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg' },
    { id: 11, url: 'https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg' },
    { id: 12, url: 'https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg' },
    { id: 13, url: 'https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg' },
    { id: 14, url: 'https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg' },
    { id: 15, url: 'https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg' },
    { id: 16, url: 'https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg' },
    { id: 17, url: 'https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg' },
    { id: 18, url: 'https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg' },
    { id: 19, url: 'https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg' },
    { id: 20, url: 'https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg' },
    { id: 21, url: 'https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg' }
]

function BadgeAvatars ({ size, url, id }) {
    return (
        <div style={{ transform: 'scale(' + size + ')' }} >
            <StyledBadge
                overlap="circle"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                }}
                variant="dot"
            >
                <Avatar
                    src={url}
                    style={{ width: 40, height: 40, transform: 'scale(' + size + ')', opacity: size }}
                    className='vitesseScale'
                    alt="user"
                />
            </StyledBadge>
        </div>
    )
}

function BoxActif (props) {
    // const [users, setUsers] = React.useState([])
    const [first, setFirst] = React.useState(0)
    const [left, setLeft] = React.useState(0)
    const [btleft, setBtnLeft] = React.useState(false)
    const [btright, setBtnRight] = React.useState(0)

    const [clikbtleft, setClickBtnLeft] = React.useState(false)
    const [clickbtright, setClickBtnRight] = React.useState(0)

    const widthAnim = 62

    React.useEffect(() => {
        setBtnLeft(true)
        setBtnRight(true)
        if (first === 0) {
            setBtnLeft(false)
        }
        if ((first + 7) === datas.length) {
            setBtnRight(false)
        }
    }, [first])

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <ArrowLeft
                style={{
                    color: btleft ? '#e4e3df' : '#e4e3df70',
                    fontSize: 50,
                    cursor: 'pointer'
                }}
                className={clikbtleft && btleft ? '' : 'lightclick'}
                onClick={() => {
                    if (btleft) {
                        setFirst(e => e - 1)
                        setLeft(e => e + widthAnim)
                        setClickBtnLeft(true)
                        setTimeout(() => {
                            setClickBtnLeft(false)
                        }, 1000)
                    }
                }}
            />
            <div
                style={{
                    position: 'relative',
                    width: 434,
                    overflow: 'hidden',
                    height: 72
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        transform: 'translateX(' + left + 'px)',
                        height: 72,
                        border: '1px solid #ffffff00'
                    }}
                    className='vitesseTranslate'
                >
                    {
                        datas.map(({ id, url }) => {
                            let size = 0.65
                            if ((first + 1) === id || (first + 5) === id) {
                                size = 0.7
                            }

                            if ((first + 2) === id || (first + 4) === id) {
                                size = 0.85
                            }

                            if ((first + 3) === id) {
                                size = 1
                            }

                            return (<div key={id} style={{ width: 40, padding: 10, border: '1px solid #ffffff00' }}>
                                <BadgeAvatars
                                    size={size}
                                    url={url}
                                    id={id}
                                />
                            </div>)
                        })
                    }
                </div>
            </div>
            <ArrowRight
                style={{
                    color: btright ? '#e4e3df' : '#e4e3df70',
                    fontSize: 50,
                    cursor: 'pointer'
                }}
                className={clickbtright && btright ? '' : 'lightclick'}
                onClick={() => {
                    if (btright) {
                        setFirst(e => e + 1)
                        setLeft(e => e - widthAnim)
                        setClickBtnRight(true)
                        setTimeout(() => {
                            setClickBtnRight(false)
                        }, 1000)
                    }
                }}
            />
        </div>
    )
}

export default BoxActif
