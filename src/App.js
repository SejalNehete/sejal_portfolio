import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Project from "./pages/Project";
import Header from "./components/Header";
import Footer from "./components/Footer";

const pages = [
  { path: "/", element: <Home /> },
  { path: "/project", element: <Project /> },
  { path: "/resume", element: <Resume /> },
  { path: "/contact", element: <Contact /> },
];

const App = () => {
  return (
    <>
      <Header /> 
      <Routes>
        {pages.map((page) => (
          <Route key={page.path} path={page.path} element={page.element} />
        ))}
      </Routes>
      <Footer />
    </>
  );
};

export default App;

//Hello world!
