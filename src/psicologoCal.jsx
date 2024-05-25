import React from 'react'
import './css/App.css'

import { Header } from './components/Header.jsx'
import { Aside } from './components/Aside.jsx'
import './css/global.css';

function App() {
    const [count, setCount] = useState(0)
  
    return (
        <div className="main">
        <div className="app">
          <Header/>
          <Aside/>   
          
        </div>
        </div>
    )
  }
  
  
  export default App