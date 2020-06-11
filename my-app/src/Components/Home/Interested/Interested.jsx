import React,{useState} from 'react'
import './Interested.scss'
import {Button} from '@material-ui/core'
import img from '../../../images/partnership-handshake.png'
import Detail from './Detail'
import ThankYou from './ThankYou'



export default function Interested() {
     
    const [modal,setModal] = useState(1)

    const handles1 = ()=>{
        setModal(2)
    }
    const handles2 = ()=>{
        setModal(3)
    }

    return (
        <React.Fragment>
            {modal}
        {(modal===2)?(<Detail handle={handles2}/>):(modal===3)?(<ThankYou/>):
        (
            <div className="interested">
              <div className="int_up">
                  <h1>
                      Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                  </h1>
                  <img src={img} alt="pic"/>
              </div>
              <div className="int_down">
              <Button variant="contained" onClick={handles1} style={{backgroundColor:'rgb(255,81,81)',width:'30%',marginTop:"5%",marginLeft:'35%'}}>
                  Next
              </Button>
              </div>
          </div>)}
        </React.Fragment>
    )
}
