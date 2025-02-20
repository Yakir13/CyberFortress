import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import DoS_DDoS from './components/Content/DoS_DDoS - Content/DoS_DDoS'


function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Home/>} />
      <Route path='Home' element={<Home/>} />
      <Route path='DoS_DDoS' element={<DoS_DDoS/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;