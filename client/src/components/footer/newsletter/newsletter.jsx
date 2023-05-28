import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";

import "./newsletter.scss";

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">Newletter</span>
        <span className="big-text">Sign up for latest updates and offers</span>
        <div className="form">
          <input type="text" className="email" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
        <div className="text">
          Will be used in accordance with our Privacy Policy
        </div>
        <div className="social-icons">
            <div className="icon">
                <FaLinkedinIn size={14} />
            </div>
            <div className="icon">
                <FaGithub size={14}/>
            </div>
            <div className="icon">
                <FaTwitter size={14} />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
