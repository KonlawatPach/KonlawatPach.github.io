import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import '../css/card.scss'

function Card(props){
    return (
        <div className='card-component' style={{display: `${props.showCard?'block':'none'}`}}>
            <div className="modal-background">
                <div className="modal-box container text-center">
                    <h3>ข้อมูลส่วนตัว</h3>
                    <div className="row">
                        <div className="col-md-6">
                            aaa
                        </div>
                        <div className="col-md-6">
                            aaa
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;