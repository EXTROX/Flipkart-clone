import Fb_logo from "../Fb_logo";
import Gift_logo from "../Gift_logo";
import HelpCenter_logo from "../HelpCenter_logo";
import Paymnet_logo from "../Payment_logo";
import X_logo from "../X_logo";
import YoutubeLogo from "../Youtube_logo";
import Advertise_logo from "./Advertise_logo";
import "./Footer.css";
import Sell_logo from "./Sell_logo";

function Footer() {
  return (
    <div className=" container-fluid footer">
      <div className="footer-row row w-100">
        <div className="footer-column col-12 col-lg-2 col-md-4">
          <h4 className="head1">ABOUT</h4>
          <ul className="footer-links">
            <li>
              <a href="/Pages/Women/dresses.html" className="hove">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/Pages/Women/pants_women.html" className="hove">
                About Us
              </a>
            </li>
            <li>
              <a href="/Pages/Women/skirts.html" className="hove">
                Careers
              </a>
            </li>
            <li>
              <a href="/Pages/Women/skirts.html" className="hove">
                Flipkart Stories
              </a>
            </li>
            <li>
              <a href="/Pages/Women/skirts.html" className="hove">
                Press
              </a>
            </li>
            <li>
              <a href="/Pages/Women/skirts.html" className="hove">
                Corporate Information
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-column col-12 col-lg-2 col-md-4">
          <h4 className="head1">GROUP COMPANIES</h4>
          <ul className="footer-links">
            <li>
              <a href="/Pages/Men/shirts.html" className="hove">
                Myntra
              </a>
            </li>
            <li>
              <a href="/Pages/Men/pants.html" className="hove">
                Flipkart Wholesale
              </a>
            </li>
            <li>
              <a href="/Pages/Men/hoodies.html" className="hove">
                Cleartrip
              </a>
            </li>
            <li>
              <a href="/Pages/Men/hoodies.html" className="hove">
                Shopsy
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-column col-12 col-lg-2 col-md-4">
          <h4 className="head1">HELP</h4>
          <ul className="footer-links">
            <li>
              <a href="/Pages/index.html" className="hove">
                Payments
              </a>
            </li>
            <li>
              <a href="/Pages/login.html" className="hove">
                Shipping
              </a>
            </li>
            <li>
              <a href="/Pages/contact.html" className="hove">
                Cancellation & Returns
              </a>
            </li>
            <li>
              <a href="/Pages/contact.html" className="hove">
                FAQ
              </a>
            </li>
            <li>
              <a href="/Pages/contact.ht" className="hove">
                Report Infringement
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-column col-12 col-lg-2 col-md-4">
          <h4 className="head1">CONSUMER POLICY</h4>
          <ul className="footer-links">
            <li>
              <a href="/Pages/index.html" className="hove">
                Cancellation & Returns
              </a>
            </li>
            <li>
              <a href="/Pages/login.html" className="hove">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="/Pages/contact.html" className="hove">
                Security
              </a>
            </li>
            <li>
              <a href="/Pages/contact.html" className="hove">
                Privacy
              </a>
            </li>
            <li>
              <a href="/Pages/contact.html" className="hove">
                Sitemap
              </a>
            </li>
            <li>
              <a href="/Pages/contact.html" className="hove">
                Grievance Redressal
              </a>
            </li>
            <li>
              <a href="/Pages/contact.html" className="hove">
                EPR Compliance
              </a>
            </li>
            <div className="vertical-line"></div>
          </ul>
        </div>
        <div className="footer-column col-12 col-lg-2 col-md-4">
          <h4 className="head1">Mail Us:</h4>
          <ul className="footer-links custumst">
            <li>
             Flipkart Internet Private Limited, <br />
             Building Alyssa, Begonia & <br />
             Clove Embassy Tech Village, <br />
             Outer Ring Road, Devarabeesanahalli Village, <br />
             Bengaluru, 560103, <br />
             Karnataka, India
            </li>
            <br />
            <h4 className="head1 social">Social:</h4>
            <div className="d-flex ps-0">
            <Fb_logo />
            <X_logo />
            <YoutubeLogo />
            </div>

          </ul>
        </div>
        <div className="footer-column col-12 col-lg-2 col-md-4">
          <h4 className="head1">Registered Office Address:</h4>
          <ul className="footer-links custumst">
            <li>
             Flipkart Internet Private Limited, <br />
             Building Alyssa, Begonia & <br />
             Clove Embassy Tech Village, <br />
             Outer Ring Road, Devarabeesanahalli Village, <br />
             Bengaluru, 560103, <br />
             Karnataka, India <br />
             CIN: U51109KA2012PTC066107 <br />
             Telephone: <a className="acol">044-45614700</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="line"/>
          <div className="d-flex col w-100 custumminiheader">
            <p className="p-5 d-flex custumminiheader"> <Sell_logo /> Become a Seller</p>
            <p className="p-5 d-flex custumminiheader"> <Advertise_logo /> Advertise</p>
            <p className="p-5 d-flex custumminiheader"><Gift_logo /> Gift Cards</p>
            <p className="p-5 d-flex custumminiheader"><HelpCenter_logo /> Help Center</p>
            <p id="cpy" className="p-5 d-flex single-line custumminiheader">
              &copy; 2007-2024 Flipkart.com
            </p>
            {/* <p className="p-5 d-flex custumminiheader payment" >
              <Paymnet_logo />
            </p> */}
          </div>
    </div>
  );
}

export default Footer;
