import React from "react";
import Navigation from "./navigation/Navigation";

const Header = ({ headerLinks }) => {
  return (
    <header>
      <a href="/#">IT-education platform</a>
      <Navigation headerLinks={headerLinks} />
    </header>
  );
};

export default Header;
