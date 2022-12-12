import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <header className="brand_header">
      <p className="logo">Logo</p>
      <nav
        className={
          isMobile ? "brand_header_links_mobile" : "brand_header_links"
        }
        onClick={() => setIsMobile(false)}
      >
        <NavLink className="brand_header_links_items" to="/">
          Home
        </NavLink>
        <NavLink className="brand_header_links_items" to="/about">
          About
        </NavLink>
        <NavLink className="brand_header_links_items" to="/contact">
          Contact
        </NavLink>
        <NavLink className="brand_header_links_items" to="/signup">
          Signup
        </NavLink>
      </nav>
      <button className="mobile-menu" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (
          <i className="fa fa-times" aria-hidden="true"></i>
        ) : (
          <i className="fa fa-bars" aria-hidden="true"></i>
        )}
      </button>
    </header>
  );
};

export default Header;
