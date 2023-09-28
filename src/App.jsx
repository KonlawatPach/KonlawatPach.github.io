import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {data} from './../data.js' 

import Title_Top from './components/Title-Top.jsx';
import Title_Bottom from './components/Title-Bottom.jsx';
import './css/global.scss'

function App() {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('TH');
  useEffect(() => {
    // document.addEventListener('keydown', (event) => {
    //   if (event.key === 'Tab') {
    //     console.log('User pressed the Tab key');
    //   }
    // });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
        // else {
        //   entry.target.classList.remove('show');
        // }
      });
    });

    const hiddenElementLeft = Array.from(document.querySelectorAll('.hiddenl'));
    const hiddenElementRight = Array.from(document.querySelectorAll('.hiddenr'));
    const hiddenElement = hiddenElementLeft.concat(hiddenElementRight);
    hiddenElement.forEach((el) => observer.observe(el));

    // return () => {
    //   hiddenElement.forEach((el) => observer.unobserve(el));
    // };
  }, []);

  const switchTheme = () => {
    setTheme(theme=='light'?'dark':'light');
  }
  const switchLanguage = () => {
    setLanguage(language=='TH'?'EN':'TH');
  }

  return (
    <>
      <div className={`${theme}`}>
        <Title_Top switchTheme={switchTheme} switchLanguage={switchLanguage} theme={theme} language={language} data={data}/>
        <Title_Bottom theme={theme} />
        <div className='body'>

        </div>
        {/* <div className="hiddenl">aaaaaaaaaaaaaaaaaaaaaaaa</div> */}
      </div>
    </>
  )
}

export default App
