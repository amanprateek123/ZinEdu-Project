import React, { Component } from 'react'
import './Thumbnail.scss'

export default class Thumbnail extends Component {
    render() {
        return (
            <div>
            <div className="thumb">
                <div className="thumb_bg">
                    <div className="frame">
                        <div className="frame_bg">
                        </div>
                    </div>
                        <div className="circle1">
                        </div>
                        <div className="circle2">
                        </div>
                        <div className="circle3">
                        </div>
                     <div className="frame_detail">
                         <h1>
                             Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                         </h1>
                         <p>
                             - LOREM IPSUM
                         </p>
                         </div> 
                </div>
            </div>
            </div>
        )
    }
}
