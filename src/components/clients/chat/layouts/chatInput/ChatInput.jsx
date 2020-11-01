import React from 'react'
import './statics/styles/ChatInput.scss'
import {
    Send,
    NavigateNext,
    AttachFile,
    PhotoSizeSelectActual,
    PhotoCamera,
    Videocam,
    KeyboardVoice,
    EmojiEmotions
} from '@material-ui/icons'

function ChatInput () {
    const [value, setValue] = React.useState('')
    const [showIcon, setShowIcon] = React.useState(false)

    const onChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className='ChatInput'>
            <div
                className='navigate-next vitessWid'
                style={{ width: showIcon ? 320 : 30 }}
            >
                <NavigateNext
                    className='vitesseAnimation'
                    style={{
                        color: 'white',
                        fontSize: 40,
                        transform: 'rotate(' + (showIcon ? 90 : 0) + 'deg)'
                    }}
                    onClick={() => setShowIcon(e => !e)}
                />
                {
                    showIcon && (<div style={{ display: 'flex', alignItems: 'center' }}>
                        <AttachFile/>
                        <PhotoSizeSelectActual/>
                        <PhotoCamera/>
                        <Videocam/>
                        <KeyboardVoice/>
                    </div>
                    )
                }
            </div>
            <div
                style={{
                    position: 'relative',
                    width: '90%',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                <input
                    onChange={onChange}
                    value={value}
                    placeholder='Ecrire un message ...'
                />
                <EmojiEmotions
                    style={{
                        color: '#202020',
                        fontSize: 30,
                        position: 'absolute',
                        top: 0,
                        right: '5%',
                        zIndex: 10
                    }}
                />
            </div>
            <div
                className='fab'
                // style={{ width: showIcon ? 52 : 32, transition: 'none' }}
            >
                <Send
                    style={{ fontSize: 15 }}
                />
            </div>
        </div>
    )
}

export default ChatInput
