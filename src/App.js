import React, { Component } from 'react'
import Home from './Containers/Home/Home'
import {Route,Switch} from 'react-router-dom'
import E04 from './Containers/E04'
import Navbar from './Components/Home/Navbar/Navbar'

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route component={E04}/>
        </Switch>
      </React.Fragment>
    )
  }
}
