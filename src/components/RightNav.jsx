import React from "react";
import {
  FaFacebook,
  FaGit,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaSearchengin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const RightNav = () => {
  return (
    <div className="font-medium py-5">
      <div>
        <h2>Login With</h2>
        <div>
          <button className="btn btn-sm flex gap-2 w-full btn-ghost ring-2 normal-case my-2">
            <FaGoogle />
            Login with google
          </button>
          <button className="btn btn-sm flex gap-2 w-full btn-ghost ring-2 normal-case my-2">
            <FaGithub />
            Login with google
          </button>
        </div>
      </div>
      <div>
        <h2>Find us on</h2>
        <div className="px-5 leading-10">
          <div>
            <a href="http://">
              <FaFacebook className="inline" /> facebook
            </a>
          </div>
          <div>
            <a href="http://">
              <FaTwitter className="inline" /> twitter
            </a>
          </div>
          <div>
            <a href="http://">
              <FaInstagram className="inline" /> instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
