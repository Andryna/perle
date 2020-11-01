import React, { Component } from 'react'
import Block from './layouts/block/Block'
import Header from './layouts/header/Header'
import './statics/styles/Chat.scss'
import Moment from 'react-moment'
import ChatInput from './layouts/chatInput/ChatInput'

const datas = [
    { id: 1, notification: 0, url: 'https://www.village-justice.com/articles/local/cache-gd2/61/b91c0bc706676d96e362711536df5b.jpg?1603207633' },
    { id: 2, notification: 0, url: 'https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg' },
    { id: 3, notification: 2, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9e3tHfGvC1Z9xPpa_bU8ynCuWg_rn-C1YBQ&usqp=CAU' },
    { id: 4, notification: 0, url: 'https://images-na.ssl-images-amazon.com/images/I/81lKUxkmF5L._SY600_.jpg' },
    { id: 5, notification: 0, url: 'https://www.fourchette-et-bikini.fr/sites/default/files/styles/full_670x350/public/femme_amoureuse.jpg?itok=ovXsCBSe' }
]
function HeaderType ({ title, date }) {
    return (
        <div className='HeaderType'>
            <div className='lineH'></div>
            <div className='center'>
                <h1>{ title }</h1>
                <Moment format="dddd DD MMMM YYYY">
                    { date }
                </Moment>
            </div>
            <div className='lineH'></div>
        </div>
    )
}

class Chat extends Component {
    render () {
        return (
            <div className='Chat'>
                <div className='container'>
                    <Header/>
                    <HeaderType title='LA RENCONTRE' date={new Date()}/>
                    <div>
                        <Block
                            isLeft={false}
                            url={datas[1].url}
                            text='Bonjour en chante Veronique !'
                        />
                        <Block
                            isLeft={true}
                            url={datas[4].url}
                            text='Bonjour jeff, '
                        />
                        <Block
                            isLeft={false}
                            url={datas[1].url}
                            text='Bonjour en chante Veronique'
                        />
                        <Block
                            isLeft={true}
                            url={datas[4].url}
                            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                        <HeaderType title='LA DECOUVERTE' date={new Date()}/>
                        <Block
                            isLeft={false}
                            url={datas[1].url}
                            text='Bonjour en chante Veronique'
                        />
                        <Block
                            isLeft={true}
                            url={datas[4].url}
                            text='Bonjour jeff, '
                        />
                        <Block
                            isLeft={false}
                            url={datas[1].url}
                            text='Bonjour en chante Veronique'
                        />
                        <Block
                            isLeft={true}
                            url={datas[4].url}
                            text='Bonjour jeff, '
                        />
                        <HeaderType title='LE RENDEZ-VOUS' date={new Date()}/>
                        <Block
                            isLeft={false}
                            url={datas[1].url}
                            text='Bonjour en chante Veronique'
                        />
                        <Block
                            isLeft={true}
                            url={datas[4].url}
                            text='Bonjour jeff, '
                        />
                        <Block
                            isLeft={false}
                            url={datas[1].url}
                            text='Bonjour en chante Veronique'
                        />
                        <Block
                            isLeft={true}
                            url={datas[4].url}
                            text='Bonjour jeff, '
                        />
                    </div>
                    <ChatInput/>
                </div>
            </div>
        )
    }
}

export default Chat
