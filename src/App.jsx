import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { indigo, pink } from '@material-ui/core/colors'
import './App.css'

// my import
import error404 from './components/error/error404'
import Principal from './components/clients/principal/Principal'
// import List from './components/clients/details/layouts/list/List'
import Profiles from './components/clients/profiles/Profiles.jsx'

function App () {
    const theme = createMuiTheme({
        palette: {
            primary: indigo,
            secondary: pink
        }
    })
    return (
        <BrowserRouter>
            <MuiThemeProvider theme={theme}>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={Principal}/>
                        <Route exact path="/Profiles" component={Profiles}/>
                        {/* <Route exact path="/List=:categorie" component={List}/> */}
                        <Route component={error404} />
                    </Switch>
                </div>
            </MuiThemeProvider>
        </BrowserRouter>
    )
}

export default App
