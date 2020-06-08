import React, { Component } from 'react'
import Home from './Containers/Home/Home'
import {Route,Switch} from 'react-router-dom'
import E04 from './Containers/E04'
import Navbar from './Components/Home/Navbar/Navbar'
import Login from './Containers/Login/Login'
import Modal from './Containers/Modal/Modal'
import GetStarted from './Components/Home/Trial/GetStarted'

export default class App extends Component {
  state={
    authModalVisible: false,
    started:false
  }

   openModal = () => {
    
    this.setState({authModalVisible: true})    

    }
  closeModal = () => {
    
    this.setState({authModalVisible: false})    

    }
    openModalStart = () => {
    
      this.setState({...this.state,started: true})    
  
      }
    closeModalStart = () => {
      
      this.setState({...this.state,started: false})    
  
      }

  render() {
    return (
      <React.Fragment>
        <Navbar openModal={this.openModal} />
        <Modal visible={this.state.authModalVisible} closeModal={this.closeModal}>
          <Login modal={this.closeModal}/>
        </Modal>
        <Modal visible={this.state.started} closeModal={this.closeModalStart}>
          <GetStarted modal={this.closeModalStart} next={this.openDetail}/>
        </Modal>        
        <Switch>
        <Route path="/" exact>
         <Home modal={this.openModalStart}/> 
         </Route>
        <Route component={E04}/>
        </Switch>
      </React.Fragment>
    )
  }
}
