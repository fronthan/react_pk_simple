import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header" role="navigation">      
        <div className="header_wrap">
          <Link to="/" className="pk_logo">
            <img src="./logo_pk.svg" alt="" />
          </Link>
          <span className="icon_search">
            <img src="./icon_search.svg" alt=""/>
          </span>
        </div>
    </header>
  );
}

export default Header;
