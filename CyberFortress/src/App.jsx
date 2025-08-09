import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import DoS_DDoS from "./pages/DoS_DDoS"
import Malware from "./pages/Malware"
import KoH from "./pages/KoH";


function App() {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route path='' element={<Home/>} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/DoS_DDoS' element={<DoS_DDoS/>} />
          <Route path='/Malware' element={<Malware/>} />
          <Route path='/KoH' element={<KoH/>} />
        </Routes>
    </>
  )
}
export default App;