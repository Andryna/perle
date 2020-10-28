import React from 'react'
import './statics/styles/profdet.scss'
import Badge from '@material-ui/core/Badge'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles, withStyles } from '@material-ui/core/styles'

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

const SmallAvatar = withStyles((theme) => ({
    root: {
        width: 22,
        height: 22,
        border: `2px solid ${theme.palette.background.paper}`
    }
}))(Avatar)

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1)
        }
    }
}))

function BadgeAvatars (props) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <StyledBadge
                overlap="circle"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                }}
                variant="dot"
            >
                <Avatar
                    alt="user"
                    src="https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg"
                />
            </StyledBadge>
        </div>
    )
}

function BoxActif (props) {
    return (
        <div style={{ display: 'flex' }}>
            {
                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((e, key) =>
                    <div key>
                        <BadgeAvatars/>
                    </div>
                )
            }
        </div>
    )
}

export default BoxActif
