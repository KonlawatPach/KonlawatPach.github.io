import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import '../css/title.scss'

function Title_Bottom(props) {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        //fruitfall scroll
        const fruitfall = document.getElementById('fruitfall');
        const fruitfallcheck = document.getElementById('fruitfallcheck');
        const fencePos = document.getElementsByClassName('fence')[0];

        const stalk_behide = document.getElementsByClassName('stalk_behide')[0];

        const updateScreenWidth = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener('resize', updateScreenWidth);
        document.addEventListener('scroll', () => {
            let value = window.scrollY;
            let fruitfallcheck_value = fruitfallcheck.getBoundingClientRect().top + window.scrollY;
            let fence_value = fencePos.getBoundingClientRect().top + window.scrollY;
            if(value > fruitfallcheck_value && value < fence_value){
                fruitfall.style.bottom = 68-((value-fruitfallcheck_value)/mapValue(screenWidth, 360, 1600, 0.3, 16)) + "vw";
                fruitfall.style.transform = `rotateZ(${value}deg)`;
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

    const shakeFruit = (fruitNo, degrees=1, step=1, rotateleft=false, rotateright=false) => {
        document.getElementsByClassName('fruit')[fruitNo - 1].style.transform = `rotateZ(${degrees}deg)`;
        if (!rotateleft) {
            if(degrees >= 30) rotateleft = true;
            setTimeout(() => { shakeFruit(fruitNo, degrees + step, step, rotateleft, rotateright) }, 0.1);
        }
        else if(!rotateright){
            if(degrees <= -30) rotateright = true;
            setTimeout(() => { shakeFruit(fruitNo, degrees - step, step, rotateleft, rotateright) }, 0.1);
        }
        else{
            if(degrees <= 0) setTimeout(() => { shakeFruit(fruitNo, degrees + step, step, rotateleft, rotateright) }, 0.1);
        }
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
                <div id='fruitfall' className='fruit1 fruit' onClick={() => shakeFruit(1)} style={{width: '7vw', height: '7vw', right: '34vw', bottom: '68vw'}}></div>
                <div id='fruitfallcheck' className='fruit2 fruit' onClick={() => shakeFruit(2)} style={{width: '6vw', height: '6vw', right: '18vw', bottom: '90vw'}}></div>
                <div className='fruit3 fruit' onClick={() => shakeFruit(3)} style={{width: '4vw', height: '4vw', right: '6vw', bottom: '72vw'}}></div>
                <div className='fruit4 fruit' onClick={() => shakeFruit(4)} style={{width: '6vw', height: '6vw', right: '66vw', bottom: '104vw'}}></div>
                <div className='fruit5 fruit' onClick={() => shakeFruit(5)} style={{width: '5vw', height: '5vw', right: '52vw', bottom: '104vw'}}></div>
            </div>

            <div className='sky'>
                {
                    props.theme == 'light' ?
                    <div className="absolute">
                        <img className='hiddenl' src="/title/cloud1.svg" style={{width: '34vw', right: '52vw', bottom: '70vw', zIndex:'0'}} />
                        <img className='hiddenr' src="/title/cloud2.svg" style={{width: '41vw', right: '0vw', bottom: '30vw', zIndex:'1'}} />
                        <img className='hiddenl' src="/title/cloud3.svg" style={{width: '44vw', right: '70vw', bottom: '60vw', zIndex:'0'}} />
                    </div>
                    :
                    <div className="absolute">
                        
                    </div>
                }
            </div>
            
            <div className="fence">
                {fenceHighList.map((indexData, index) => (
                    <div key={index}>
                        <div className='fencehead'></div>
                        <div id={`${index}`} className='fencebar' style={{ height: `${50}vw` }}></div>
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