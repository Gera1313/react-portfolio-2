import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

// import React from 'react';
// import Header from './components/Header';
// import About from './components/About';

// function App() {
//   return (
//     <div>
//       <Header />
//       <h1>Welcome to My Portfolio</h1> {/* Add a simple element */}
//     </div>
//   );
// }

// export default App;
