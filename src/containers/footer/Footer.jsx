import "./footer.css";
import logo from "../../assets/logo.svg";
import location from "../../assets/icon-location.svg";
import email from "../../assets/icon-email.svg";
import phone from "../../assets/icon-phone.svg";
import { ImFacebook, ImTwitter, ImInstagram } from "react-icons/im";

const Footer = () => {
  return (
    <footer>
      <div className="footer__info">
        <div className="footer__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="footer__content">
          <div className="footer__contact">
            <div className="footer__contact-location footer__contact-links">
              <img src={location} alt="location" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
            <div>
              <div className="footer__contact-phone footer__contact-links">
                <img src={phone} alt="phone" />
                <p>+1-543-123-4567</p>
              </div>
              <div className="footer__contact-email footer__contact-links">
                <img src={email} alt="email" />
                <p>example@fylo.com</p>
              </div>
            </div>
          </div>
          <div className="footer__links">
            <div className="footer__links-container">
              <a href="#">About Us</a>
              <a href="#">Jobs</a>
              <a href="#">Press</a>
              <a href="#">Blog</a>
            </div>
            <div className="footer__links-container">
              <a href="#">Contact Us</a>
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
            </div>
          </div>
          <div className="footer__socials">
            <a href="#" aria-label="facebook-link">
              <ImFacebook />
            </a>
            <a href="#" aria-label="twitter-link">
              <ImTwitter />
            </a>
            <a href="#" aria-label="instagram-link">
              <ImInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
