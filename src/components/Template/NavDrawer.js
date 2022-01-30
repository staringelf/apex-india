import { Link } from 'react-router-dom';
import routes from 'data/routes';

const NavDrawer = () => {
  
  return (

    <details className="menu-drawer-container">
      <summary className="header__icon header__icon--menu header__icon--summary link link--text focus-inset" aria-label="Menu" role="button" aria-expanded="false" aria-controls="menu-drawer">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" ariaHidden="true" focusable="false" role="presentation" className="icon icon-hamburger" fill="none" viewBox="0 0 18 16">
            <path d="M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1a.5.5 0 01-.5-.5z" fill="currentColor">
            </path>
          </svg>
        </span>
      </summary>
      <div id="nav-drawer">
        <nav className="nav-drawer__nav">
          <ul className="nav-list">
            {routes.filter((l) => !l.index).map((l) => (
              <li className="nav__item p-3" key={l.label}>
                <Link className="nav__link" to={l.path}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

    </details>
  )
}

export default NavDrawer;