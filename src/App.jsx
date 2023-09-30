import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {data} from './../data.js' 

import Title_Top from './components/Title-Top.jsx';
import Title_Bottom from './components/Title-Bottom.jsx';
import Card from './components/Card.jsx';
import './css/global.scss'

function App() {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('TH');
  const [showCard, setShowCard] = useState(false);

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
    document.body.style.overflowX = 'hidden';
  }, []);

  const switchTheme = () => {
    setTheme(theme=='light' ? 'dark' : 'light');
  }
  const switchLanguage = () => {
    setLanguage(language=='TH' ? 'EN' : 'TH');
  }
  const switchShowCard = () => {
    if(showCard){
      setShowCard(false);
      document.body.style.overflowY = 'unset';
    }
    else{
      setShowCard(true);
      document.body.style.overflowY = 'hidden';
    }
  }

  return (
    <>
      <div className={`${theme}`}>
        { showCard &&
          <Card 
            showCard={showCard}
            switchShowCard={switchShowCard}
            theme={theme}
            language={language}
            data={data}
          />
        }
        <Title_Top
          switchTheme={switchTheme}
          switchLanguage={switchLanguage}
          theme={theme}
          language={language}
          data={data}
        />
        <Title_Bottom 
          theme={theme}
          switchShowCard={switchShowCard}
          showCard={showCard}
        />

        <div className='body'>

        </div>
        {/* <div className="hiddenl">aaaaaaaaaaaaaaaaaaaaaaaa</div> */}
      </div>
    </>
  )
}

export default App
