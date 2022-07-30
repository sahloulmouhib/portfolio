import React from "react";
import { ToastContainer } from "react-toastify";

import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import DarkModeButton from "./components/darkMode/DarkModeButton";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Testemonial from "./components/testemonials/Testimonial";

function App() {
  return (
    <>
      <DarkModeButton />
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testemonial />
      <Contact />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
