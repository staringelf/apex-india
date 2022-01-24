import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home.js";
import About from "./About.js";
import Contact from "./Contact.js";
import Header from "./Header.js";
import Footer from "./Footer.js";

import 'Bootstrap/bootstrap.css';
import './App.css';

function App() {
  return (



    <div>
      
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </div>

  );
}

export default App;