import Topbar from "./Components/Header/Topbar.js"
import Navbar from "./Components/Header/Navbar.js";

const Header = () => {
  return(
    <header className="header">
      <Topbar/>
      <Navbar/>
    </header>
  )
}

export default Header;