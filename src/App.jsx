import { Outlet } from 'react-router-dom';
import './App.css'
import { useState } from 'react';

function App() {
  const [loginData, setLoginData] = useState(null)
  const [regData, setRegData] = useState(null)

  return (
    <>
      <Outlet context={{loginData: loginData, setLoginData: setLoginData, regData: regData, setRegData:setRegData}} />
    </>
  )
}

export default App
