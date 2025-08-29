import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/HeroSection/Hero";
import AboutProgram from "./components/AboutProgramSection/AboutProgram";
import TrainingTasks from "./components/TrainingTasks/TrainingTasks";
import JobPrep from "./components/JobPrep/JobPrep"; 
import Employers from "./components/Employers/Employers";


import "./styles/main.scss"



function App() {
  return (
    <>
     <Header />
        
      <Hero />
      <AboutProgram />
      <TrainingTasks />
      <JobPrep />
      <Employers />


     <Footer />
    </>
  );
}

export default App;