import './Footer.css';
export default function Footer(){
    return (
      <footer id='footer' className="footer">
        <div className="footer-grid">
          <div className="footer-section">
            <h4>Top Products</h4>
            <ul>
              <li>Manage Reputation</li>
              <li>Power Tools</li>
              <li>Managed Website</li>
              <li>Marketing Service</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>Jobs</li>
              <li>Brand Assets</li>
              <li>Investor Relations</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Features</h4>
            <ul>
              <li>Manage Reputation</li>
              <li>Power Tools</li>
              <li>Managed Website</li>
              <li>Marketing Service</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li>Guides</li>
              <li>Research</li>
              <li>Experts</li>
              <li>Marketing Service</li>
            </ul>
          </div>
          <div className="footer-section newsletter">
            <h4>Newsletter</h4>
            <p>You can trust us. We only send promo offers,</p>
            <form>
              <input type="email" placeholder="Your Email Address" />
             
              <button type="submit">SUBSCRIBE</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Copyright ©2021 All rights reserved | This template is made by
            Tech2etc
          </p>
        </div>
      </footer>
    );
}