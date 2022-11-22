import React, { useState } from "react";
import logo from "../../imgs/logo.png";
import SearchBox from "../SearchBox";

const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggle = () => setShowSearch(!showSearch);

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div className="row align-items-center justify-content-center">
          <span className="h3 p-1">A Place to </span>
          <span id="get-part" className="h3 pr-1" onClick={toggle}>
            get
          </span>
          {showSearch && <SearchBox />}
          <span className="h3 pl-1">the cool stuff</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
