import React from "react";
import logo from "../../imgs/logo.png";
import SearchBox from "../SearchBox";

const Banner = () => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div className="row align-items-center">
          <span id="get-part" className="h3">A Place to get</span>
          <SearchBox />
          <span className="h3"> the cool stuff</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
