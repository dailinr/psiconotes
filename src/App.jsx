import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'

import { Header } from './components/Header.jsx'
import { Aside } from './components/Aside.jsx'
import { Main } from './components/Main.jsx'
import './css/global.css';


function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="app">
        <Header/>
        <Aside/>   
        <Main/>
        
      </div>
  )
}


export default App
