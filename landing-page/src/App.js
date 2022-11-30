import './App.css';
import Navbar from './components/Navbar/Navbar';
import ImageTextSection from './components/ImageTextSection/ImageTextSection';
import Contact from './pages/Contact';
import About from './pages/About';
function App() {
  let component
  switch (window.location.pathname){
    case "/":
      component = <App/>
      break
    case "/about":
      component = <About/>
      break
    case "/contact":
      component = <Contact/>
      break
    }
  return (
    <div className="App">
      <Navbar/>
      {component}
      <ImageTextSection />
    </div>
  );
}

export default App;
