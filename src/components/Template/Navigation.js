import React from 'react';
import { Link } from 'react-router-dom';
import NavDrawer from "./NavDrawer";
import routes from 'data/routes';

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => (
  <header className="header shadow-md" id="header">
    <div className="container mx-auto px-4">
      <div className="flex justify-between header-container">
        <h1 id="logo-header" className="index-link logo logo--header">
          {routes.filter((l) => l.index).map((l) => (
            <Link key={l.label} to={l.path}>{l.label}</Link>
          ))}
        </h1>
        <nav className="navbar hidden lg:block">

          <ul className="flex main-nav">
            {routes.filter((l) => !l.index).map((l) => (
              <li className="nav__item p-3" key={l.label}>
                <Link className="nav__link" to={l.path}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <NavDrawer />
       
      </div>
    </div>
  </header>
);

export default Navigation;
