import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

import "./footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Pakistan's No.1 audio & wearables brand. Audionic holds the widest
            range of wireless earphones, earbuds, headphones, smart watches ,
            and home audio. From workouts to adventures, We have you covered!
          </div>
        </div>
        <div className="col">
          {" "}
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">Multan,Punjab,Pakistan</div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: +920000000000</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: qjcoder@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <div className="text">Headphones</div>
          <div className="text">Smart Watches</div>
          <div className="text">Bluetooth Speakers</div>
          <div className="text">Wireless Earbuds</div>
          <div className="text">Home Theatre</div>
          <div className="text">Projectors</div>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <div className="text">Home</div>
          <div className="text">About</div>
          <div className="text">Privacy Policy</div>
          <div className="text">Returns</div>
          <div className="text">Terms & Conditions</div>
          <div className="text">Contact Us</div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            QJSTORE 2023 CREATED BY QJ CODER. PREMIUM E-COMMERCE SOLUTIONS.
          </div>
          <img src={Payment} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
