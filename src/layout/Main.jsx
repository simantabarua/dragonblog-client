import React from "react";
import { Outlet } from "react-router-dom";
import RightNav from "../components/RightNav";
import LeftNav from "../components/LeftNav";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Header />
        <LatestNews />
        <Navbar />
      </header>
      <main className="flex-grow px-5 lg:px-10 grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-12 ">
        <aside className="md:col-span-2 ">
          <LeftNav />
        </aside>
        <section className="bg-gray-50 md:col-span-8 ">
          <Outlet />
        </section>
        <aside className="md:col-span-2  ">
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
