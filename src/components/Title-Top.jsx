import React, { Component } from 'react'
import '../css/title.scss'

function Title_Top(props) {
    const titleBlueBottomList = [
        [28, 8, 8, 60],
        [70, 8, 6, 0],
        [20, 12, 8, 0],
        [44, 10, 2, 56]
    ]
    
    const titleGreenBottomList = [
        [66, 10, 0, 0],
        [32, 13, 1, 0],
        [52, 13.6, 9, 8],
        [40, 7, 5, 30],
        [48, 9, 7, 52],
        [43, 10, 10, 46],
        [50, 10, 18, 28],
        [60, 10, 13, 40],
        [50, 10, 22, 32],
        [48, 14, 21, 44],
        [33, 10, 23, 67],
        [48, 18, 30, 52],
        [56, 7, 28, 34],
        [30, 12, 33, 45],
        [40, 13.6, 40, 60],
    ]

    return (
        <div className='title'>
            <div className='bluebox' style={{width:'70vw', height: '1px'}}></div>
            <div className='bluebox' style={{width:'70vw', height: '60px'}}></div>

            <div className='absolute' style={{height: '40px'}}>  
                <div className='blueboxlight' style={{width:'2  60px', height: '70px'}}>
                    <img onClick={props.switchTheme} src={props.theme=='light'?"title/sun.svg":"title/moon.svg"} alt="sun"/>
                    <h3 onClick={props.switchLanguage}>{props.language}</h3>
                </div>
            </div>
            
            <div className='namebox'>
                <h1 className='hiddenr'>{props.language=='TH'?props.data.fNameTH:props.data.fNameEN}</h1>
                <h1 className='hiddenr'>{props.language=='TH'?props.data.lNameTH:props.data.lNameEN}</h1>
                <h5 className='hiddenr'>{props.language=='TH'?props.data.positionTH:props.data.positionEN}</h5>
            </div>

            <div className="bottomBox">
                {titleBlueBottomList.map((indexData, index) => (
                    <div key={index} className='absolute' style={{height: '0'}}>
                        <div className={`titlebluebottom${index+1} boxbottom`} style={{width: `${indexData[0]}vw`, height: `${indexData[1]}vw`, bottom: `${indexData[2]}vw`, left: `${indexData[3]}vw`}}></div>               
                    </div>
                ))}
                {titleGreenBottomList.map((indexData, index) => (
                    <div key={index} className='absolute' style={{height: '0'}}>
                        <div className={`titlegreenbottom${index+1} boxbottom`} style={{width: `${indexData[0]}vw`, height: `${indexData[1]}vw`, top: `${indexData[2]}vw`, left: `${indexData[3]}vw`}}></div>               
                    </div>
                ))}
            </div>
        </div>
    )
}
    
export default Title_Top;