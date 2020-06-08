import React, { Component } from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Fab} from '@material-ui/core'
import { Add as AddIcon } from '@material-ui/icons';
import './Floating.scss'

export default class Floating extends Component {
    state={
        visible:false
    }

    toggleHidden = ()=>{
        this.setState({visible:!this.state.visible})
    }
    render() {
        let social = null;
        if(this.state.visible){
             social = (
                <div style={{display:'flex',flexDirection:'column',color:'white',position:'relative',right:'-12px',top:'10px',transition:'2s ease-in'}}>
               <FacebookIcon fontSize="large" />
                <InstagramIcon fontSize="large"/>
                <TwitterIcon fontSize="large"/>
                <YouTubeIcon fontSize="large"/>
                <LinkedInIcon fontSize="large"/>
            </div>
            )
        }
        return (
            <div className="float" onMouseEnter={this.toggleHidden} onMouseLeave={this.toggleHidden}>
                <Fab color="inherit" aria-label="add" style={{backgroundColor:'rgb(255,81,81)',color:'white'}} >
                     <AddIcon />
                </Fab>   
                {social}
            </div>
        )
    }
}
