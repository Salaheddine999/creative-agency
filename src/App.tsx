import './App.css';
import Home from './pages/Home';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Features from './components/Features';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Home className="bg-stone-100">
        <Navbar/>
        <Hero/>
        <Features/>
        <Services/>
        <Projects/>
        <Contact/>
        <Footer/>
      </Home>
    </div>
  );
}

export default App;
