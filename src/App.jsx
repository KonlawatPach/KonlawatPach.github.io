import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {data} from './../data.js' 

import Title from './components/title';
import './css/global.scss'
import Title_Bottom from './components/Title-Bottom.jsx';

function App() {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('TH');
  useEffect(() => {
    // Create and configure the IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      // document.addEventListener('keydown', (event) => {
      //   if (event.key === 'Tab') {
      //     console.log('User pressed the Tab key');
      //   }
      // });
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
        // else {
        //   entry.target.classList.remove('show');
        // }
      });
    });

    // Select and observe hidden elements
    const hiddenElementLeft = Array.from(document.querySelectorAll('.hiddenl'));
    const hiddenElementRight = Array.from(document.querySelectorAll('.hiddenr'));
    const hiddenElement = hiddenElementLeft.concat(hiddenElementRight);
    hiddenElement.forEach((el) => observer.observe(el));

    // Clean up the observer when the component unmounts
    return () => {
      hiddenElement.forEach((el) => observer.unobserve(el));
    };
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
        <Title switchTheme={switchTheme} switchLanguage={switchLanguage}  theme={theme} language={language} data={data}/>
        <Title_Bottom />
        <div className='body'>

        </div>
        {/* <div className="hiddenl">aaaaaaaaaaaaaaaaaaaaaaaa</div> */}
      </div>
    </>
  )
}

export default App
