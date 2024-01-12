import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './newEvent.css'
import './cssFiles/login.css'
import './cssFiles/newEvent.css'
import Logo from './components/Logo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Logo/>
    <App/>
  </React.StrictMode>,
)
