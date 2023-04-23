import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import RightNav from "../components/RightNav";
import LeftNav from "../components/LeftNav";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const Main = () => {
  const [isLeftNavOpen, setIsLeftNavOpen] = useState(false);

  const toggleLeftNav = () => {
    setIsLeftNavOpen(!isLeftNavOpen);
  };
  return (
    <div className="min-h-screen flex flex-col p-4">
      <header>
        <Header />
        <LatestNews />
        <Navbar toggleLeftNav={toggleLeftNav} />
      </header>
      <main className="flex-grow p-1 md:px-5 lg:px-10 grid gap-4 grid-cols-1 md:grid-cols-12 ">
        <aside
          className={`md:col-span-3 lg:col-span-2 ${
            isLeftNavOpen ? "block" : "hidden"
          } md:block`}
        >
          <LeftNav />
        </aside>
        <section className="bg-gray-50 md:col-span-9 lg:col-span-8  ">
          <Outlet />
        </section>
        <aside className="lg:col-span-2">
          <RightNav />
        </aside>
      </main>
      <footer className="bg-gray-600">
        <Footer />
      </footer>
    </div>
  );
};

export default Main;
