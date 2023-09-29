import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import '../css/card.scss'

function Card(props){
    useEffect(() => {
        setTimeout(() => {
            document.getElementById('card-modal').style.left = '50%'
            document.getElementById('card-modal').style.top = '50%'
            document.getElementById('card-modal').style.rotate = '0deg'
            document.getElementsByClassName('modal-background')[0].style.background = 'rgba(0, 0, 0, 0.5)'
        }, 800);
    },[])

    const closing = () => {
        document.getElementById('card-modal').style.left = '-50%'
        document.getElementById('card-modal').style.top = '0%'
        document.getElementById('card-modal').style.rotate = '20deg'
        document.getElementsByClassName('modal-background')[0].style.background = 'rgba(0, 0, 0, 0)'
        setTimeout(() => {
            props.switchShowCard();
        }, 500);
    }

    return (
        <div className='card-component' style={{display: `${props.showCard?'block':'none'}`}}>
            <div className="modal-background">
                <div id="card-modal" className="modal-box container text-center">
                    <h3>ข้อมูลส่วนตัว</h3>
                    <div className="row">
                        <div className="col-md-6">
                            aaa
                        </div>
                        <div className="col-md-6">
                            aaa
                        </div>
                    </div>
                    <button onClick={closing}>ปิด</button>
                </div>
            </div>
        </div>
    )
}

export default Card;