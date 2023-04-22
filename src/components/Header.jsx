import React from "react";
import logo from "./../../public/assets/logo.png";
import moment from "moment";


const Header = () => {
  return (
    <div>
      <div className="text-center p-5">
        <img className="inline" src={logo} alt="" />
        <p>Journalism Without Fear or Favour</p>
        <p>{moment().format("dddd, MMMM D, YYYY ")}</p>
      </div>
    </div>
  );
};

export default Header;
