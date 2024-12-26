import { Link } from "react-router-dom";
import Wrapper from "../assets/Wrappers/HeroNavbar";
import { HiBars3, HiMiniXMark } from "react-icons/hi2";
import { useState } from "react";

const Navbar = () => {
  const [sideNav, setSideNav] = useState(false);
  return (
    <Wrapper>
      <div className={sideNav ? "side-nav active" : "side-nav"}>
        <div className="nav-container">
          <div className="icon">
            <HiMiniXMark
              className="burger-menu"
              size={35}
              onClick={() => setSideNav(false)}
            />
          </div>
          <Link className="nav-link" to="/services">
            Services
          </Link>
          <Link className="nav-link" to="login">
            Sign up / Login
          </Link>
          <Link className="link-btn" to="become-a-tasker">
            Become a Tasker
          </Link>
        </div>
        <div className="nav-overlay"></div>
      </div>
      <nav>
        {!sideNav && (
          <div className="mobile-menu">
            <HiBars3
              className="burger-menu"
              size={30}
              onClick={() => setSideNav(!sideNav)}
            />
          </div>
        )}

        <div className="logo-container">
          <h3 className="logo">
            <Link to="/">grote markt</Link>
          </h3>
        </div>
        <div className="menu">
          <Link className="nav-link" to="/services">
            Services
          </Link>
          <Link className="nav-link" to="login">
            Sign up / Login
          </Link>
          <Link className="link-btn" to="become-a-tasker">
            Become a Tasker
          </Link>
        </div>
      </nav>
    </Wrapper>
  );
};
export default Navbar;
