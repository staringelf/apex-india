import { ReactComponent as IconPhone } from "Icons/icon-phone.svg";

const Address = () => {
  return (
    <address className="topbar__address">
          <ul className="main-topbar">
            <li className="topbar__item">
            <a className="phone" href="tel: +918427185921">
            <IconPhone />
              <span>+91 842 718 5921</span>
            </a>
            </li>
            <li className="topbar__item">
              <a className="email" href="mailto:apexindiachd@gmail.com">
                <svg width="20px" height="20px" className="icon icon--topbar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"></path></svg>
                  <span>apexindiachd@gmail.com</span>
              </a>
            </li>
            <li className="topbar__item">
              <p className="location">
                <svg width="20px" height="20px" className="icon icon--topbar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20S3 10.87 3 7a7 7 0 1 1 14 0c0 3.87-7 13-7 13zm0-11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path></svg>
            <span>Plot No. 62 Business and Industrial Park, Phase - II, CHD</span>
        </p></li></ul>
        </address>
  )
}

export default Address;