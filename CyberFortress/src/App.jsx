import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"

function App() {

  return (
    <>
    <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Home' element={<Home/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;