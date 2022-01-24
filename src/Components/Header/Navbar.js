const Navbar = () => {
  return (
    <header className="header" role="header">
      <div className="container container--header">
      <h1 className="logo logo--header">Logo</h1>
      <nav className="navbar">
        
      <div className="container container--nav">
        <h1 className="logo logo--nav">Logo</h1>
        <div className="nav-close">
      <svg className="close-button"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"></path></svg>
        </div>
      </div>
        <ul className="main-nav">
          <li className="nav__item"><a className="nav__link nav__link--active">Home</a></li>
          <li className="nav__item dropdown-trigger">
            <a href="productes.html" className="nav__link dropdown-toggle">Products</a>
            <ul className="dropdown">
              <li className="dropdown__item"><a href="disinfectant.html" className="dropdown__link">Disinfectants</a></li>
              <li className="dropdown__item"><a href="food-processing.html" className="dropdown__link">Food Processing</a></li>
              <li className="dropdown__item"><a href="print.html" className="dropdown__link">Print &amp; Design</a></li>
              <li className="dropdown__item"><a href="boards.html" className="dropdown__link">Outdoor Boards</a></li>
            </ul>
          </li>
        
          <li className="nav__item"><a href="about.html" className="nav__link">About</a></li>
          <li className="nav__item"><a href="contact.html" className="nav__link">Contact</a></li>
        </ul>

        <ul className="nav__contact">
          <li className="nav__contact__item">
              <a className="phone" href="tel: +918427185921">
                <svg width="20px" height="20px" className="icon icon--nav icon--phone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M20 18.35V19a1 1 0 0 1-1 1h-2A17 17 0 0 1 0 3V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4c0 .56-.31 1.31-.7 1.7L3.16 8.84c1.52 3.6 4.4 6.48 8 8l2.12-2.12c.4-.4 1.15-.71 1.7-.71H19a1 1 0 0 1 .99 1v3.35z"></path></svg> 
              <span>+91 842 718 5921</span>
              </a>
          </li>
          <li className="nav__contact__item">
            <a className="phone" href="https://api.whatsapp.com/send?phone=918427185921">
              <svg width="25px" height="25px" className="icon icon--nav icon--whatsapp" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground:'new 0 0 512 512'}} xmlSpace="preserve">
  <path style={{fill: '#EDEDED'}} d="M0,512l35.31-128C12.359,344.276,0,300.138,0,254.234C0,114.759,114.759,0,255.117,0
    S512,114.759,512,254.234S395.476,512,255.117,512c-44.138,0-86.51-14.124-124.469-35.31L0,512z"></path>
  <path style={{fill: '#55CD6C'}} d="M137.71,430.786l7.945,4.414c32.662,20.303,70.621,32.662,110.345,32.662
    c115.641,0,211.862-96.221,211.862-213.628S371.641,44.138,255.117,44.138S44.138,137.71,44.138,254.234
    c0,40.607,11.476,80.331,32.662,113.876l5.297,7.945l-20.303,74.152L137.71,430.786z"></path>
  <path style={{fill: '#FEFEFE'}} d="M187.145,135.945l-16.772-0.883c-5.297,0-10.593,1.766-14.124,5.297
    c-7.945,7.062-21.186,20.303-24.717,37.959c-6.179,26.483,3.531,58.262,26.483,90.041s67.09,82.979,144.772,105.048
    c24.717,7.062,44.138,2.648,60.028-7.062c12.359-7.945,20.303-20.303,22.952-33.545l2.648-12.359
    c0.883-3.531-0.883-7.945-4.414-9.71l-55.614-25.6c-3.531-1.766-7.945-0.883-10.593,2.648l-22.069,28.248
    c-1.766,1.766-4.414,2.648-7.062,1.766c-15.007-5.297-65.324-26.483-92.69-79.448c-0.883-2.648-0.883-5.297,0.883-7.062
    l21.186-23.834c1.766-2.648,2.648-6.179,1.766-8.828l-25.6-57.379C193.324,138.593,190.676,135.945,187.145,135.945"></path>
  <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
  </svg>
          +91 842 718 5921
          </a>
      </li>

          </ul>
      </nav>
    
      <div className="nav-show">
        <button className="toggle-button"></button>
      </div>
    </div>
  </header>
  )
}

export default Navbar;