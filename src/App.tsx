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

import ReactPixel from "react-facebook-pixel";

ReactPixel.init("350341889879476");
ReactPixel.pageView();

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
