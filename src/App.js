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
        </Routes>
      </Router>
    </div>

  );
}

export default App;