import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h2>Bank Accounts</h2>
      </Link>
    </div>
  );
};

export default Header;
