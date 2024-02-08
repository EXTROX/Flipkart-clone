import Cart_logo from "./Cart_logo";
import Flipkart from "./Flipkart";
import "./Header.css";
import Profile from "./Profile";
import Seller_logo from "./Seller_logo";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/* flipkart logo */}
          <a className="navbar-brand ps-0" href="#">
            <Flipkart />
          </a>
          {/* icon for search */}
          <form className="d-flex" role="search">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search for Products Brands and More"
              aria-label="Search"
            />
          </form>

          {/* code for toggler used for responsiveness */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle active custum-hover d-flex w-auto"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <Profile />
                  Login &nbsp;
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      New customer? &nbsp; &nbsp; &nbsp; &nbsp;
                      <span className="signup">Sign-Up</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      My Profile
                    </a>
                  </li>
                  {/* <li>
                    <hr className="dropdown-divider" />
                  </li> */}
                  <li>
                    <a className="dropdown-item" href="#">
                      Flipkart Plus Zone
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Orders
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Wishlist
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Rewards
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Giftcards
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item ps-5">
                <a
                  className="nav-link active d-flex"
                  aria-current="page"
                  href="#"
                >
                  <Cart_logo />
                  Cart
                </a>
              </li>
              <li className="nav-item ps-5">
                <a className="nav-link active d-flex w-auto" href="#">
                  <Seller_logo />
                  Become a Selller
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
