import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import DoS_DDoS from "./pages/DoS_DDoS"


function App() {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route path='' element={<Home/>} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/DoS_DDoS' element={<DoS_DDoS/>} />
        </Routes>
    </>
  )
}
export default App;