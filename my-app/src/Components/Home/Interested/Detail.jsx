import React from 'react'
import './Interested.scss'
import {Button} from '@material-ui/core'

export default function Detail(props) {
    return (
        <div className="int_detail">
            <div className="int_up1">
                <div className="int_value">
                    <div className="int_input">
                        <h1>Name</h1>
                        <input type="text" placeholder="Smith John" />
                    </div>
                    <div className="int_input">
                        <h1>Phone No.</h1>
                        <input type="text" placeholder="+91" />
                    </div>
                    <div className="int_input">
                        <h1>Location</h1>
                        <select>
                            <option>Delhi</option>
                            <option>Bihar</option>
                            <option>Lucknow</option>
                            <option>Varanasi</option>
                            <option>Hyderabad</option>
                            <option>Kolkata</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="int_down">
              <Button variant="contained" onClick={props.handle} style={{backgroundColor:'rgb(255,81,81)',width:'30%',marginTop:"4%",marginLeft:'35%'}}>
                  Submit
              </Button>
              </div>
        </div>
    )
}
