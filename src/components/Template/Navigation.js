import React from 'react';
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';
import routes from 'data/routes';

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => (
  <header className="header" id="header">
    <div className="across-width">
      <div className="flex justify-between header-container">
        <h1 id="logo-header" className="index-link logo logo--header">
          {routes.filter((l) => l.index).map((l) => (
            <Link key={l.label} to={l.path}>{l.label}</Link>
          ))}
        </h1>
        <nav className="navbar">

          <ul className="main-nav">
            {routes.filter((l) => !l.index).map((l) => (
              <li className="nav__item" key={l.label}>
                <Link className="nav__link" to={l.path}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
    <Hamburger />
  </header>
);

export default Navigation;
