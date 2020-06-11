import React from 'react'
import './Partner.scss'

export default function Partner(props) {
    return (
        <div className="partner">
            <div className="part_head">
                <h1 className="zin_head">ZINEDU</h1>
                <h1 className="partnerhead">PARTNER PROGRAM</h1>
            </div>
            <div className="partner_text">
               <p>
                  It is a long established fact that a reader will be distracted by readable content of a page when looking at its layout.
                  It is a long established fact that a reader will be distracted by readable content of a page when looking at its layout.
               </p>
            </div>
            <div className="interest">
                <div onClick={props.open} style={{cursor:'pointer'}}>
                    I am Intrested
                </div>
            </div>
        </div>
    )
}
