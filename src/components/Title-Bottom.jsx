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
            let fruitfall_value = fruitfall.getBoundingClientRect().top + window.scrollY - 450;
            let fruitfallcheck_value = fruitfallcheck.getBoundingClientRect().top + window.scrollY;
            let soup_bowl_value = soup_bowl.getBoundingClientRect().top + window.scrollY - 500;
            
            // console.log(screenWidth);
            if(value > fruitfallcheck_value && fruitfall_value <= soup_bowl_value){
                fruitfall.style.bottom = 68-((value-fruitfallcheck_value)/mapWidthDivided(screenWidth)) + "vw";
                fruitfall.style.transform = `rotateZ(${value}deg)`;
                fruitfall.style.opacity = 1;
            }else if(fruitfall_value > soup_bowl_value){
                fruitfall.style.opacity = 0;
            }
        });
    }, []);

    let mapValue = (value, fromRangeStart, fromRangeEnd, toRangeStart, toRangeEnd) => {
        value = Math.min(Math.max(value, fromRangeStart), fromRangeEnd);
    
        const fromRangeSize = fromRangeEnd - fromRangeStart;
        const toRangeSize = toRangeEnd - toRangeStart;
        const ratio = (value - fromRangeStart) / fromRangeSize;
        const mappedValue = ratio * toRangeSize + toRangeStart;
    
        return mappedValue;
    }

    let mapWidthDivided = (screenWidth) => {
        console.log(mapValue(screenWidth, 360, 1200, 0.3, 11));
        return mapValue(screenWidth, 360, 1200, 0.3, 11);
        // if(screenWidth>1400) return 13;
    } 
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
                        <div id={`${index}`} className='fencebar' style={{ height: `${100}vw` }}></div>
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