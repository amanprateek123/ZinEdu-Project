import React from 'react';
import './Card.scss'
import {
  Card,  CardText, CardBody,
  CardTitle
} from 'reactstrap';
import img from '../../../../images/enroll.PNG'

const Example = (props) => {
  return (
    <div>
      <Card className="enroll_card" style={{backgroundColor: 'rgb(255, 100, 100)',border:'1.7px solid black',borderRadius:'10px'}}>
        <CardBody>
          <CardTitle className="card_title">DAILY LIVE CLASS</CardTitle>
          <CardText className="vard_text">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</CardText>
        </CardBody>
        <img width="100%" style={{height:"180px", borderRadius:"10px",border:'1.5px solid black'}} src={img} alt="Card" />
        <button className="card_btn">Enroll Now</button>
      </Card>
    </div>
  );
};

export default Example;