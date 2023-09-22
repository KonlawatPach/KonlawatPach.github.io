import React, { Component } from 'react'
import '../css/title.scss'

function Title(props) {

    return (
        <div className='title'>
            <div className='bluebox' style={{width:'70vw', height: '91px'}}></div>
            <div className='absolute' style={{height: '70px'}}>  
                <div className='blueboxlight' style={{width:'260px', height: '100px'}}>
                    <img onClick={props.switchTheme} src={props.theme=='light'?"title/sun.svg":"title/moon.svg"} alt="sun"/>
                    <h3 onClick={props.switchLanguage}>{props.language}</h3>
                </div>
            </div>
            
            <div className='namebox'>
                <h1>{props.language=='TH'?props.data.fNameTH:props.data.fNameEN}</h1>
                <h1>{props.language=='TH'?props.data.lNameTH:props.data.lNameEN}</h1>
                <p>{props.language=='TH'?props.data.positionTH:props.data.positionEN}</p>
            </div>

            <div className='absolute' style={{height: '100px'}}>
                <div className='titlebluebottom1 boxbottom' style={{width:'26vw', height: '120px', top: '20px', right: '6vw'}}></div>               
            </div>
            <div className='absolute' style={{height: '0'}}>
                <div className='titlebluebottom2 boxbottom' style={{width:'60vw', height: '200px', bottom: '40px', right: '30vw'}}></div>               
            </div>
            <div className='absolute' style={{height: '0'}}>
                <div className='titlebluebottom3 boxbottom' style={{width:'20vw', height: '150px', bottom: '60px', right: '80vw'}}></div>               
            </div>
            <div className='absolute' style={{height: '0'}}>
                <div className='titlebluebottom4 boxbottom' style={{width:'50vw', height: '150px', top: '0px', right: '0vw'}}></div>               
            </div>
            <div className='absolute' style={{height: '0'}}>
                <div className='titlegreenbottom1 boxbottom' style={{width:'66vw', height: '150px', top: '50px', right: '30vw'}}></div>               
            </div>
            <div className='absolute' style={{height: '0'}}>
                <div className='titlegreenbottom2 boxbottom' style={{width:'26vw', height: '180px', top: '40px', right: '78vw'}}></div>               
            </div>
        </div>
    )
}
    
export default Title