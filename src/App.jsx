import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import Title from './components/title';
import './css/global.scss'

function App() {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('TH');
  // useEffect=()=>{
  //   sessionStorage.get
  // }

  const switchTheme = () => {
    setTheme(theme=='light'?'dark':'light');
  }
  const switchLanguage = () => {
    setLanguage(language=='TH'?'EN':'TH');
  }

  return (
    <>
      <div className={`${theme}`}>
        <Title switchTheme={switchTheme} switchLanguage={switchLanguage}  theme={theme} language={language}/>
        <div className='body'>

        </div>
      </div>
    </>
  )
}

export default App
