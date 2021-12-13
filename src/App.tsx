import React from "react";

import Header from "./components/Header";

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
      <Header />
      <Course />
      <Benefits />
      <Infos />
      <Featuring />
      <Feedbacks />
      <Questions />
      <About />
      <Footer />
    </>
  );
}

export default App;
