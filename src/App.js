import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Rform from './components/Rform';
import Footer from './components/Footer';


function App() {
  return (
    <div className='flex flex-col'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <Footer/>
          </>
        } />
        <Route path="/home" element={<Home />} />
        <Route path="/regfrom" element={<Rform/>} />
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
