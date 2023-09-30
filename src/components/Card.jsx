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

    const nextPage = () => {

    }

    return (
        <div className='card-component' style={{display: `${props.showCard?'block':'none'}`}}>
            <div className="modal-background">
                <div id="card-modal" className="modal-box container text-left">
                    <div className='col-12'>
                        <h1>{props.language=='TH' ? props.data.fNameTH : props.data.fNameEN} {props.language=='TH' ? props.data.lNameTH : props.data.lNameEN}</h1>
                        <p>{props.language=='TH' ? props.data.positionTH :  props.data.positionEN}</p>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            aaa
                        </div>
                        <div className="col-md-6">
                            aaa
                        </div>
                    </div>
                    <br />
                    <button onClick={closing}>กลับ</button>
                    <button onClick={closing}>ต่อไป</button>
                </div>
            </div>
        </div>
    )
}

export default Card;