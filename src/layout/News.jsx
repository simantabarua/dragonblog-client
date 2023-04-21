import React from "react";
import { Outlet } from "react-router-dom";
import RightNav from "../components/RightNav";
import Footer from "../components/Footer";
import Header from "../components/Header";

const News = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Header />
      </header>
      <main className="flex-grow px-10 grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-12 grid-rows-4">
        <section className="bg-gray-400 md:col-span-10 md:row-span-4 lg:row-span-4">
          Main Content
          <Outlet />
        </section>
        <aside className="md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-4">
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
