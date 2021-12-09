import React from "react";

import Header from "./components/Header";
/* import Navbar from "./components/Navbar"; */

import Course from "./sections/Course";
import Benefits from "./sections/Benefits";
import Featuring from "./sections/Featuring";
import Feedbacks from "./sections/Feedbacks";
import Infos from "./sections/Infos";
import Questions from "./sections/Questions";
import About from "./sections/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Header />
      <Course />
      <Benefits />
      <Featuring />
      <Feedbacks />
      <Infos />
      <Questions />
      <About />
      <Footer />
    </>
  );
}

export default App;
