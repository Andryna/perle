import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import './App.css'


// my import
import error404 from './components/error/error404'
import Principal from './components/clients/principal/Principal'
// import List from './components/clients/details/layouts/list/List'
import Profiles from './components/clients/profiles/Profiles.jsx'
import Authentification from './components/clients/authentification/Authentification'
import Chat from './components/clients/chat/Chat'

axios.defaults.baseURL = 'https://www.perlerencontre.fr'

function App (props) {
    const theme = createMuiTheme({
        palette: {
            type: 'dark',
            primary: {
                light: '#d3ebf3',
                main: '#56ccf2',
                dark: '#0484ad',
                contrastText: '#fff'
            },
            secondary: {
                main: '#d3d3d3'
            }
        },
        typography: {
            button: {
                textTransform: 'none'
            }
        }
    })

    return (
        <BrowserRouter>
            <MuiThemeProvider theme={theme}>
                <div className="App">
                    <Switch>
                        {/* <Route exact path="/List=:categorie" component={List}/> */}
                        <Route exact path="/" component={Principal}/>
                        <Route exact path="/Authentification=:type" component={Authentification}/>
                        <Route exact path="/Profiles" component={Profiles}/>
                        <Route exact path="/Chat" component={Chat}/>
                        <Route component={error404} />
                    </Switch>
                </div>
            </MuiThemeProvider>
        </BrowserRouter>
    )
}

export default App
