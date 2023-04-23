import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

import Main from "./layout/Main";
import News from "./layout/News";
import CategoryNews from "./components/CategoryNews";
import NewDetailsCard from "./components/NewDetailsCard";
import AuthProvider from "./context/AuthProvider";
import Login from "./components/Login";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category/:id",
        element: <CategoryNews />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/categories/${params.id}`),
      },
    ],
  },
  {
    path: "news",
    element: <News />,
    children: [
      {
        path: ":id",
        element: <NewDetailsCard />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/news/${params.id}`),
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: '*',
    element: <ErrorPage/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
