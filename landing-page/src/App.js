import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App relative">
        <div className='hero-bg-shape'></div>
      <Navbar />
      <div className='page'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>

    </div>
  );
}

export default App;
