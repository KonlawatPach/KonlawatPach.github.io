import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {data} from './../data.js' 

import Title from './components/title';
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
    console.log(data);
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
        <div className='body'>

        </div>
      </div>
    </>
  )
}

export default App
