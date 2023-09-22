import React, { Component } from 'react'
import '../css/title.scss'

function Title(props) {

    return (
        <div className='title'>
            <div className='bluebox hiddenr' style={{width:'70vw', height: '70px'}}></div>
            <div className='absolute' style={{height: '40px'}}>  
                <div className='blueboxlight hiddenr' style={{width:'260px', height: '70px'}}>
                    <img onClick={props.switchTheme} src={props.theme=='light'?"title/sun.svg":"title/moon.svg"} alt="sun"/>
                    <h3 onClick={props.switchLanguage}>{props.language}</h3>
                </div>
            </div>
            
            <div className='namebox'>
                <h1 className='hiddenr'>{props.language=='TH'?props.data.fNameTH:props.data.fNameEN}</h1>
                <h1 className='hiddenr'>{props.language=='TH'?props.data.lNameTH:props.data.lNameEN}</h1>
                <p className='hiddenr'>{props.language=='TH'?props.data.positionTH:props.data.positionEN}</p>
            </div>

            <div className="bottomBox">
                <div className='absolute' style={{height: '0'}}>
                    <div className='titlebluebottom1 boxbottom' style={{width:'28vw', height: '8vw', bottom: '8vw', left: '60vw'}}></div>               
                </div>
                <div className='absolute' style={{height: '0'}}>
                    <div className='titlebluebottom2 boxbottom' style={{width:'70vw', height: '8vw', bottom: '6vw', left: '0vw'}}></div>               
                </div>
                <div className='absolute' style={{height: '0'}}>
                    <div className='titlebluebottom3 boxbottom' style={{width:'20vw', height: '12vw', bottom: '7vw', left: '0vw'}}></div>               
                </div>
                <div className='absolute' style={{height: '0'}}>
                    <div className='titlebluebottom4 boxbottom' style={{width:'44vw', height: '10vw', bottom: '2vw', left: '56vw'}}></div>               
                </div>
                <div className='absolute' style={{height: '0'}}>
                    <div className='titlegreenbottom1 boxbottom' style={{width:'66vw', height: '10vw', bottom: '0vw', left: '0vw'}}></div>               
                </div>
                <div className='absolute' style={{height: '0'}}>
                    <div className='titlegreenbottom2 boxbottom' style={{width:'32vw', height: '13vw', top: '1vw', left: '0vw'}}></div>               
                </div>
                <div className='absolute' style={{height: '0'}}>
                    <div className='titlegreenbottom3 boxbottom' style={{width: '52vw', height: '9vw', top: '9vw', left: '8vw'}}></div>               
                </div>
                <div className='absolute' style={{height: '0'}}>
                    <div className='titlegreenbottom4 boxbottom' style={{width: '40vw', height: '7vw', top: '5vw', left: '30vw'}}></div>               
                </div>
                <div className='absolute' style={{height: '0'}}>
                    <div className='titlegreenbottom5 boxbottom' style={{width: '48vw', height: '9vw', top: '7vw', left: '52vw'}}></div>               
                </div>
                <div className='absolute' style={{height: '0'}}>
                    <div className='titlegreenbottom6 boxbottom' style={{width: '53vw', height: '7vw', top: '10vw', left: '38vw'}}></div>               
                </div>
            </div>
        </div>
    )
}
    
export default Title