import React from 'react'
import {Button} from '@material-ui/core'
import './Get.scss'

export default function Detail(props) {
    return (
        <div className="getStarted">
                       <h1>Enter your details:</h1>
                       <div className="select_get">
                           <div className="grade">
                               <h3>Name</h3>
                              <input type="text" placeholder="Your Name"/>
                           </div>
                           <div className="goal">
                               <h3>Phone No.</h3>
                               <input type="text" placeholder="+91"/>
                           </div>
                       </div>
                       <div className="btn_next">
                         <Button color="primary" variant="contained" onClick={props.handle} >Submit</Button>
                       </div>
                   </div>
    )
}
