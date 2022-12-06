import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App relative overflow-hidden text-txt-gray">

      <Navbar />
      <div className='page'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
