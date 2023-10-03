import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import '../css/card.scss'

function Card(props){
    useEffect(() => {
        setTimeout(() => {
            document.getElementsByClassName('card-modal')[0].style.left = '50%'
            document.getElementsByClassName('card-modal')[0].style.top = '50%'
            document.getElementsByClassName('card-modal')[0].style.rotate = '0deg'
            document.getElementsByClassName('modal-background')[0].style.background = 'rgba(0, 0, 0, 0.5)'
        }, 800);
    },[])

    const nextcard = (cardIndex) => {
        // if(cardIndex == 3){
        //     setTimeout(() => {
        //         props.switchShowCard();
        //     }, 500);
        // }

        document.getElementsByClassName('card-modal')[cardIndex].style.left = '50%'
        document.getElementsByClassName('card-modal')[cardIndex].style.top = '50%'
        document.getElementsByClassName('card-modal')[cardIndex].style.rotate = '0deg'
    }

    const closing = (cardIndex) => {
        document.getElementsByClassName('card-modal')[cardIndex].style.left = '-70%'
        document.getElementsByClassName('card-modal')[cardIndex].style.top = '0%'
        document.getElementsByClassName('card-modal')[cardIndex].style.rotate = '20deg'

        if(cardIndex == 0){
            document.getElementsByClassName('modal-background')[0].style.background = 'rgba(0, 0, 0, 0)'
            setTimeout(() => {
                props.switchShowCard();
            }, 500);
        }
    }

    const nextPage = () => {

    }

    return (
        <div className='card-component' style={{display: `${props.showCard?'block':'none'}`}}>
            <div className="modal-background">

                {/* 1 */}
                <div className="card-modal container">
                    <div className='row'>
                        <div className='col-lg-8'>
                            <h1>{props.language=='TH' ? props.data.fNameTH : props.data.fNameEN} {props.language=='TH' ? props.data.lNameTH : props.data.lNameEN}</h1>
                            <p>{props.language=='TH' ? props.data.positionTH :  props.data.positionEN}</p>
                            <p className='smalltext'>{props.language=='TH' ? props.data.cardTH.description :  props.data.cardEN.description}</p>
                        </div>
                        <div className='col-lg-4 contact'>
                            <a className='sameline' href={`mailto: ${props.data.cardTH.email}`} target="_blank">
                                <img src="card/share.svg" />
                                <span className='verysmalltext'>{props.language=='TH' ? props.data.cardTH.email :  props.data.cardEN.email}</span>
                            </a>
                            <p className='sameline'>
                                <img src="card/birthday.svg" />
                                <span className='verysmalltext'>{props.language=='TH' ? props.data.cardTH.birthdate :  props.data.cardEN.birthdate}</span>
                            </p>
                            <p className='sameline'>
                                <img src="card/location.svg" />
                                <span className='verysmalltext'>{props.language=='TH' ? props.data.cardTH.location :  props.data.cardEN.location}</span>
                            </p>
                            <a className='sameline' href={`${props.language=='TH' ? props.data.cardTH.githubURL :  props.data.cardEN.githubURL}`} target="_blank">
                                <img src="card/github.svg" />
                                <span className='verysmalltext'>{props.language=='TH' ? props.data.cardTH.github :  props.data.cardEN.github}</span>
                            </a>
                        </div>
                    </div>
                    
                    <hr />
                    <div className="row postit-box">
                        <div className="col-lg-4 p-2">
                            <div className='postit postit-g'>
                                <div className='pin'></div>
                                <h6 className='mt-1 mb-4'>Programming Language</h6>
                                <div className='imglist'>
                                    {props.data.programmingLanguage.map((data, index) => (
                                        <div key={index}>
                                            <img src={`card/programming-icon/${data}.svg`}/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-2">
                            <div className='postit postit-p'>
                                <div className='pin'></div>
                                <h6 className='mt-1 mb-4'>Software Framework</h6>
                                <div className='imglist'>
                                    {props.data.softwareFramework.map((data, index) => (
                                        <div key={index}>
                                            <img src={`card/programming-icon/${data}.svg`}/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-2">
                            <div className='postit postit-b'>
                                <div className='pin'></div>
                                <h6 className='mt-1 mb-4'>Database & Other</h6>
                                <div className='imglist'>
                                    {props.data.otherSkill.map((data, index) => (
                                        <div key={index}>
                                            <img src={`card/programming-icon/${data}.svg`}/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <hr />
                    <div className="button-bar text-center">
                        <span className='arrow'>
                            <img src="card/arrow.svg" style={{rotate: "180deg"}} alt="<-" onClick={() => closing(0)}/>
                            <span className='smalltext'>วางกระดาษ</span>
                        </span>
                        <span className='smalltext mb-4'>1/3</span>
                        <span className='arrow'>
                            <img src="card/arrow.svg" alt="->" onClick={() => nextcard(1)}/>
                            <span className='smalltext'>ต่อไป</span>
                        </span>
                    </div>
                </div>

                {/* 2 */}
                <div className="card-modal container text-left">
                    <div className='col-12'>
                        <h1>{props.language=='TH' ? props.data.fNameTH : props.data.fNameEN} {props.language=='TH' ? props.data.lNameTH : props.data.lNameEN}</h1>
                        <p>{props.language=='TH' ? props.data.positionTH :  props.data.positionEN}</p>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            aaa
                        </div>
                        <div className="col-md-6">
                            aaa
                        </div>
                    </div>


                    <hr />
                    <div className="button-bar text-center">
                        <span className='arrow'>
                            <img src="card/arrow.svg" style={{rotate: "180deg"}} alt="<-" onClick={() => closing(1)}/>
                            <span className='smalltext'>ย้อนกลับ</span>
                        </span>
                        <span className='smalltext mb-4'>2/3</span>
                        <span className='arrow'>
                            <img src="card/arrow.svg" alt="->" onClick={() => nextcard(2)}/>
                            <span className='smalltext'>ต่อไป</span>
                        </span>
                    </div>
                </div>

                {/* 3 */}
                <div className="card-modal container text-left">
                    <div className='col-12'>
                        <h1>{props.language=='TH' ? 'ประสบการณ์ทำงาน' : 'Work Experience'}</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            aaa
                        </div>
                        <div className="col-md-6">
                            aaa
                        </div>
                    </div>
                    
                    
                    <div className="button-bar text-center">
                        <span className='arrow'>
                            <img src="card/arrow.svg" style={{rotate: "180deg"}} alt="<-" onClick={() => closing(2)}/>
                            <span className='smalltext'>ย้อนกลับ</span>
                        </span>
                        <span className='smalltext mb-4'>3/3</span>
                        <span className='arrow'>
                            <img src="card/arrow.svg" alt="->" onClick={() => nextcard(3)}/>
                            <span className='smalltext'>ดูผลงาน</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;