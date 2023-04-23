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
    <div className="font-medium py-5 grid gap-5 ">
      <div>
        <h2>Login With</h2>
        <div className="flex flex-col gap-2 mt-2">
          <button className="btn btn-sm w-full md:w-44 btn-ghost ring-2 normal-case gap-1 ">
            <FaGoogle />
            <span className="hidden md:block"> Login with </span>Google
          </button>
          <button className="btn btn-sm w-full md:w-44 btn-ghost ring-2 normal-case gap-1">
            <FaGithub />
            <span className="hidden md:block"> Login with </span>Github
          </button>
        </div>
      </div>
      <div>
        <h2>Find us on</h2>
        <div className="md:px-5 flex flex-col gap-y-6">
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
