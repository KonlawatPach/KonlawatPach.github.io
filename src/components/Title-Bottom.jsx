import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import '../css/title.scss'

function Title_Bottom(props) {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const fruitfall = document.getElementById('fruitfall');
        const fruitfallcheck = document.getElementById('fruitfallcheck');
        const soup_bowl = document.getElementById('soup-bowl');
        const updateScreenWidth = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener('resize', updateScreenWidth);
      
        document.addEventListener('scroll', () => {
            let value = window.scrollY;
            let fruitfallcheck_value = fruitfallcheck.getBoundingClientRect().top + window.scrollY;
            let soup_bowl_value = soup_bowl.getBoundingClientRect().top + window.scrollY - 500;
            
            console.log(screenWidth);
            if(value > fruitfallcheck_value && value < soup_bowl_value){
                fruitfall.style.bottom = 68-((value-fruitfallcheck_value)/10.5) + "vw";
                fruitfall.style.transform = `rotateZ(${value}deg)`;
                fruitfall.style.opacity = 1;
            }else if(value > soup_bowl_value){
                fruitfall.style.opacity = 0;
            }
        });
    }, []);
    const fenceHighList = Array.from({ length: 21 }, (_, index) => 40 + index*3);
    

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
                <div id='fruitfall' className='fruit1 fruit' style={{width: '7vw', height: '7vw', right: '34vw', bottom: '68vw'}}></div>
                <div id='fruitfallcheck' className='fruit2 fruit' style={{width: '6vw', height: '6vw', right: '18vw', bottom: '90vw'}}></div>
                <div className='fruit3 fruit' style={{width: '4vw', height: '4vw', right: '6vw', bottom: '72vw'}}></div>
                <div className='fruit4 fruit' style={{width: '6vw', height: '6vw', right: '66vw', bottom: '104vw'}}></div>
                <div className='fruit5 fruit' style={{width: '5vw', height: '5vw', right: '52vw', bottom: '104vw'}}></div>
            </div>
            
            <div className="fence">
                {fenceHighList.map((indexData, index) => (
                    <div key={index}>
                        <div className='fencehead'></div>
                        <div id={`${index}`} className='fencebar' style={{ height: `${indexData}vw` }}></div>
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
                <img id='soup-bowl' className='soup-bowl' src="/title/soup-bowl.svg" />
            </div>
            
        </div>
    )
}
    
export default Title_Bottom;