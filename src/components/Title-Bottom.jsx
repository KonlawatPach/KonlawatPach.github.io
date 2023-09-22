import React, { Component } from 'react'
import '../css/title.scss'

function Title_Bottom(props) {

    const result = Array.from({ length: 21 }, (_, index) => 40 + index*3);

    return (
        <div className='title_bottom'>
            <div className='stalk'>
                <div className="absolute">
                    <img className='stalk_behide' src="/title/stalk-behide.svg" />
                </div>
                <div className="absolute">
                    <img className='stalk_front' src="/title/stalk-front.svg" />
                </div>
            </div>
            
            <div className='fruitset'>
                <div className='fruit1 fruit' style={{width: '7vw', height: '7vw', right: '34vw', bottom: '68vw'}}></div>
                <div className='fruit2 fruit' style={{width: '6vw', height: '6vw', right: '18vw', bottom: '90vw'}}></div>
                <div className='fruit3 fruit' style={{width: '4vw', height: '4vw', right: '6vw', bottom: '72vw'}}></div>
                <div className='fruit4 fruit' style={{width: '6vw', height: '6vw', right: '66vw', bottom: '104vw'}}></div>
                <div className='fruit5 fruit' style={{width: '5vw', height: '5vw', right: '52vw', bottom: '104vw'}}></div>
            </div>
            
            <div className="fence">
                {result.map((index) => (
                    <div>
                        <div className='fencehead'></div>
                        <div className='fencebar' style={{height: `${index}vw`}}></div>
                    </div>
                ))}
            </div>
            <div className='floor'></div>
            <div className='table'>
                <div className="table1"></div>
                <div className="table2"></div>
                <div className="tableleg-f"></div>
                <div className="tableleg-f" style={{bottom:'34vw' ,left:'74vw'}}></div>
                <div className="tableleg-b"></div>
                <div className="tableleg-b" style={{bottom:'47vw' ,left:'70vw'}}></div>
            </div>
            <div className='ontable'>
                <img className='card-data' src="/title/card-data.svg" />
                <img className='soup-bowl' src="/title/soup-bowl.svg" />
            </div>
            
        </div>
    )
}
    
export default Title_Bottom