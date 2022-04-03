import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Index from "./pages/index.js";
import About from "./pages/about";
import Contact from "./pages/contact";
import Shop from "./pages/shop";
import Blog from "./pages/blog";

const { PUBLIC_URL } = process.env;

function App() {
  return (
    
    <div>
      <Router basename={PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/phone" element={<Contact />} component={() => { 
            window.location.href = 'tel:+918427185921'; 
            return null;
          }}/>
          <Route path="/mail" element={<Index />} component={() => { 
            console.log('Mail');
            var link = document.createElement('a');
            link.href = 'mailto:apexindiachd@gmail.com';
            document.body.appendChild(link);

            link.click(); 
            return null;
          }}/>
        </Routes>
      </Router>
    </div>

  );
}

export default App;