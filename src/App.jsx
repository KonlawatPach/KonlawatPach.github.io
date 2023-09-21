import { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.css';
import './css/global.scss'
import './App.css'

function App() {
  const [theme, setTheme] = useState('light');
  const switchTheme = () => {
    setTheme(theme=='light'?'dark':'light');
  }

  return (
    <>
      <div className={theme}>
        <div className='test'>

        </div>
      </div>
      <button onClick={switchTheme}></button>
    </>
  )
}

export default App
