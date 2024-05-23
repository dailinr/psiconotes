
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header.jsx'
import { Aside } from './components/Aside.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App">
        <Header/>
        <Aside/>  
        
      </div>
  )
}

export default App
