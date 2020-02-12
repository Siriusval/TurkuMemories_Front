import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
//import logo from './logo.svg'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import { MenuBars } from './components/Menus/MenuBars'
import { MapContainer } from './components/MapPage/MapContainer'
import { Page404 } from './components/Page404'
import { AddMemory } from './components/AddMemoryPage/AddMemory'

function App() {
  return (
    <div className="App">
      <Router>
        <div className="box">
          <header>
            <MenuBars className="row header" />
          </header>

          <div className="row content">
            <Route
              exact
              path="/"
              component={MapContainer}
            />

            <Route path="/myMemories" component={Page404} />
            <Route
              path="/addMemory"
              component={AddMemory}
            />
            <Route path="/about" component={Page404} />
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
