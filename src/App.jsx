import { Outlet } from 'react-router-dom';
import './App.css'
import { useState } from 'react';

function App() {
  const [loginData, setLoginData] = useState(null)

  return (
    <>
      <Outlet context={{loginData: loginData, setLoginData: setLoginData}} />
    </>
  )
}

export default App
