import React, { Component } from 'react'
import Exclusive from '../../Components/Home/Exclusive/Exclusive'
import Enroll from '../../Components/Home/Enroll/Enroll'
import Partner from '../../Components/Home/Partner/Partner'
import Stats from '../../Components/Home/Stats/Stats'
import Footer from '../../Components/Home/Footer/Footer'

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div style={{backgroundColor:"#f3f3f3"}}>
                <Exclusive/>
                <Enroll/>
                <Partner/>
                <Stats/>
                <Footer/>
                </div>
            </React.Fragment>
        )
    }
}
