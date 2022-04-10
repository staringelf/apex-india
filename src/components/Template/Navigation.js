import React from 'react';
import { Link } from 'react-router-dom';
import NavDrawer from "./NavDrawer";
import Container from './Container';
import routes from 'data/routes';

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => (
  <header className="header shadow-md sticky top-0 z-20 bg-secondary" id="header">
    <Container>
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
    </Container>
  </header>
);

export default Navigation;
