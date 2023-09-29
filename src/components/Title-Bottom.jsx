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

            {
                props.theme == 'dark' ?
                    <div style={{position: 'absolute'}}>
                        <img src="/title/star.svg" style={{width: '100vw', left: '0vw', top: '24vw', zIndex:'0', position: 'relative'}} />
                    </div> 
                :
                    ''                    
            }

            <div className='sky'>
                {
                    props.theme == 'light' ?
                    <div className="absolute">
                        <img className='hiddenl' src="/title/cloud1-d.svg" style={{width: '34vw', right: '52vw', bottom: '70vw', zIndex:'0'}} />
                        <img className='hiddenr' src="/title/cloud2-d.svg" style={{width: '41vw', right: '0vw', bottom: '30vw', zIndex:'1'}} />
                        <img className='hiddenl' src="/title/cloud3-d.svg" style={{width: '36vw', right: '59vw', bottom: '60vw', zIndex:'0'}} />
                    </div>
                    :
                    <div className="absolute">
                        <img className='hiddenl' src="/title/cloud1-n.svg" style={{width: '34vw', right: '52vw', bottom: '70vw', zIndex:'0'}} />
                        <img className='hiddenr' src="/title/cloud2-n.svg" style={{width: '41vw', right: '0vw', bottom: '30vw', zIndex:'1'}} />
                        <img className='hiddenl' src="/title/cloud3-n.svg" style={{width: '36vw', right: '59vw', bottom: '60vw', zIndex:'0'}} />
                    </div>
                }
            </div>

            <div className='mountain'>
                {
                    props.theme == 'light' ?
                    <svg width="1440" height="391" viewBox="0 0 1440 391" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M455.5 1.15643C405.1 6.75643 100.333 122.056 -44 281.723V390.723H1470L1462.5 1.15649L987.5 317.223C830 141.056 505.9 -4.44357 455.5 1.15643Z" fill="#091D00"/>
                        <path d="M455.5 1.15643C405.1 6.75643 100.333 122.056 -44 281.723V390.723H1470L1462.5 1.15649L987.5 317.223C830 141.056 505.9 -4.44357 455.5 1.15643Z" stroke="black" strokeWidth="0.5"/>
                        <path d="M455.5 1.15643C405.1 6.75643 100.333 122.056 -44 281.723V390.723H1470L1462.5 1.15649L987.5 317.223C830 141.056 505.9 -4.44357 455.5 1.15643Z" stroke="black" strokeOpacity="0.2" strokeWidth="0.5"/>
                    </svg>

                    :
                    <svg width="1440" height="391" viewBox="0 0 1440 391" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M455.5 1.15643C405.1 6.75643 100.333 122.056 -44 281.723V390.723H1470L1462.5 1.15649L987.5 317.223C830 141.056 505.9 -4.44357 455.5 1.15643Z" fill="#000000"/>
                        <path d="M455.5 1.15643C405.1 6.75643 100.333 122.056 -44 281.723V390.723H1470L1462.5 1.15649L987.5 317.223C830 141.056 505.9 -4.44357 455.5 1.15643Z" stroke="black" strokeWidth="0.5"/>
                        <path d="M455.5 1.15643C405.1 6.75643 100.333 122.056 -44 281.723V390.723H1470L1462.5 1.15649L987.5 317.223C830 141.056 505.9 -4.44357 455.5 1.15643Z" stroke="black" strokeOpacity="0.2" strokeWidth="0.5"/>
                    </svg>

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
            
            <div className='object-floor'>
                <img src="title/bush-behide.svg" className='bush-behide'/>
                <img src="title/stone-left.svg" className='stone-left'/>
                <img src="title/bush-front.svg" className='bush-front'/>
                <img src="title/stone-right.svg" className='stone-right'/>
                <img src="title/parasol.svg" className='parasol'/>
                <img src="title/chair.svg" className='chair'/>
                { props.theme=='dark' ?
                    <div className='light'></div>
                :
                    ''
                }
            </div>

            <div className='table'>
                <div className="table1"></div>
                <div className="table2"></div>
                <div className="tableleg-f"></div>
                <div className="tableleg-f" style={{bottom:'44vw' ,left:'74vw'}}></div>
                <div className="tableleg-b"></div>
                <div className="tableleg-b" style={{bottom:'64vw' ,left:'70vw'}}></div>
            </div>
            <div className='ontable'>
                <img className='plant' src="/title/plant.svg" />
                <img className='card-data' onClick={props.switchShowCard} src="/title/card-data.svg" />
                <img className='notebook' src="/title/notebook.svg" />
            </div>
            
        </div>
    )
}
    
export default Title_Bottom;