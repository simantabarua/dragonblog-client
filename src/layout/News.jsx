import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import RightNav from "../components/RightNav";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import EditorsInsides from "../components/EditorsInsides";
import Comment from "../components/Comment";

const News = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Header />
        <Navbar />
      </header>
      <main className="flex-grow px-10 grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-12 ">
        <section className="md:col-span-9 ">
          <Outlet />
          <Comment />
          <EditorsInsides/>
        </section>
        <aside className="md:col-span-2 lg:col-span-3 justify-self-center ">
          <RightNav />
        </aside>
      </main>
      <footer className="bg-gray-600">
        <Footer />
      </footer>
    </div>
  );
};

export default News;
