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
            <a
              href="https://www.linkedin.com/in/qjcoder"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={14} />
            </a>
          </div>
          <div className="icon">
            <a
              href="https://github.com/qjcoder"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={14} />
            </a>
          </div>
          <div className="icon">
            <a
              href="https://twitter.com/qjcoder"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
