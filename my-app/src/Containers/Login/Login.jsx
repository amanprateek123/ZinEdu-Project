import React, { Component } from 'react'
import './Login.scss'
import img from '../../images/logo.png'
import {NavLink} from 'react-router-dom'
import { Button } from '@material-ui/core';

export default class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="log_head">
                    <div className="login_zinedu">
                         <div className="log_img">
                             <img src={img} alt="pic"/>
                         </div>
                         <div className='heading_log'>
                              <h1>ZINEDU LIVE</h1>
                              <p to="/components/" className="mle">MAKING LEARNING EXCITING</p>
                         </div>  
                    </div>
                </div>
                <div className="login_input">
                    <div className="login_form">
                        <div className="input5">
                             <h6>Your Email:</h6>
                             <input type="email" placeholder="mymail@gmail.com"/>
                        </div>
                        <div className="input5">
                             <h6>Your Password:</h6>
                             <input type="password" placeholder="Aman123@"/>
                        </div>
                        <div>
                            <NavLink to="/password" onClick={this.props.modal}>Forgot Password ?</NavLink>
                        </div>
                        <Button variant="contained" style={{width:'100%',marginTop:'2%',backgroundColor:'rgb(255,81,81'}}>Log In</Button>
                        <div className="registerd">
                            <p>
                                Not Registerd yet ?
                            </p>
                            <Button color="primary" variant="contained" style={{width:'100%',marginTop:'2%'}}>Register</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
