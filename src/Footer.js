const Footer = () => {
  return (
    <footer className="footer">
      <div className="across-width">
        <div className="footer__main">
      <div className="footer__cols">
        <div className="footer__col">  
          <ul className="footer__list">
            <h3 className="footer__list__title">Explore</h3>
              <li className="footer__nav__item"><a href="food-processing.html" className="footer__nav__link">Food Processing</a></li>
              <li className="footer__nav__item"><a href="food-processing.html#kitchen-equips-items" className="footer__nav__link">Kitchen equipments</a></li>
              <li className="footer__nav__item"><a href="print.html" className="footer__nav__link">Print And Design</a></li>
              <li className="footer__nav__item"><a href="boards.html" className="footer__nav__link">Outdoor Publishing Media</a></li>
              <li className="footer__nav__item"><a href="disinfectant.html" className="footer__nav__link">Disinfectant</a></li>
            </ul>
          </div>

          <div className="footer__col">  
          <ul className="footer__list footer__list--contact">
            
            <h3 className="footer__list__title">Contact</h3>
              
                <li className="contact__address contact__address--address">
                  <p>Plot No. 62 Business and Industrial Park</p>
                  <p>Phase - II</p>
                  <p>CHANDIGARH</p>
                </li>
                
                <li className="contact__address contact__address--email"><a className="contact__address email" href="mailto:apexindiachd@gmail.com">   
                  apexindiachd@gmail.com 
                </a>
              </li>
                <li className="contact__address"><a className="phone" href="tel: +918427185921">
                  +91 842 718 5921
                  </a></li>
                <li className="contact__address"><a className="phone" href="tel: +919803172310">
                  +91 980 317 2310
                  </a>
                </li>
                <li className="contact__address contact__address--GST">
                  <p>GSTIN: 04AIWPB9892P1ZP</p>
                </li>
              
            </ul>
          </div>
          <div classNameName="footer__col">
          <p className="legal">Copyright 2020 Apex India All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
};

export default Footer;