import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
