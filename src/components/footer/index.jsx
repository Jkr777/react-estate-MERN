import { NavLink } from "react-router-dom";

function Footer() {
  return(
    <footer className="footer-container">
      <nav className="footer-container__nav">
        <NavLink className={navData => navData.isActive ? "footer-container__nav__link--active margin-right" : "footer-container__nav__link  margin-right"} to="/info/contact-us">contact us</NavLink>
        <NavLink className={navData => navData.isActive ? "footer-container__nav__link--active margin-right" : "footer-container__nav__link  margin-right"} to="/info/our-services">our services</NavLink>
        <NavLink className={navData => navData.isActive ? "footer-container__nav__link--active margin-right" : "footer-container__nav__link  margin-right"} to="/info/free-valuation">request a free valuation</NavLink>
        <NavLink className={navData => navData.isActive ? "footer-container__nav__link--active margin-right" : "footer-container__nav__link  margin-right"} to="/info/work-with-us">work with us</NavLink>
      </nav>
      <small className="footer-container__copyright">&copy; 2022 Gio-Homes</small>
    </footer>
  );
}

export default Footer;