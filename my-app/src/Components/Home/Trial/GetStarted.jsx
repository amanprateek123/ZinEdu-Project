import React, { Component } from 'react'
import './Get.scss';
import {Button} from '@material-ui/core'
import Detail from './Detail'
import ThankYou from './ThankYou';

export default class GetStarted extends Component {
    state={
        display:1
    }

    detailHandler = ()=>{
        this.setState({display:2})
    }
    thankYou = ()=>{
        this.setState({display:3})
    }


    render() {    
 

        return (
         <React.Fragment>
               {(this.state.display===1)?(
                       <div className="getStarted">
                       <h1>Lets get started</h1>
                       <div className="select_get">
                           <div className="grade">
                               <h3>Grade</h3>
                               <select>
                                   <option>9th Grade</option>
                                   <option>10th Grade</option>
                                   <option>11th Grade</option>
                                   <option>12th Grade</option>
                               </select>
                           </div>
                           <div className="goal">
                               <h3>Goal</h3>
                               <select>
                                   <option>IIT/JEE</option>
                                   <option>NEET/AIMS</option>
                               </select>
                           </div>
                       </div>
                       <div className="btn_next">
                         <Button color="primary" variant="contained" onClick={this.detailHandler} >Next</Button>
                       </div>
                   </div>
               ):(this.state.display===2)?(<Detail handle={this.thankYou} display={this.state.display}/>):
               (this.state.display===3)?(<ThankYou/>):null
    }
          </React.Fragment>

        )
    }
}
