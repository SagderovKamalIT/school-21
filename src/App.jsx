import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/HeroSection/Hero";
import AboutProgram from "./components/AboutProgramSection/AboutProgram";
import TrainingTasks from "./components/TrainingTasks/TrainingTasks";
import JobPrep from "./components/JobPrep/JobPrep"; 
import Employers from "./components/Employers/Employers";
import SelectionCriteria from "./components/SelectionCriteria/SelectionCriteria"; 
import AboutSchool from "./components/AboutSchool/AboutSchool"
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import Admission from "./components/AdmissionSection/AdmissinSection";

import YandexMetrica from "./components/YandexMetrica/YandexMetrica";


import "./styles/main.scss"




function App() {
  return (
    <>

     <YandexMetrica />
     <Header />
        
      <Hero />
      <AboutProgram />
      <TrainingTasks />
      <JobPrep />
      <Employers />
      <Admission />
      <SelectionCriteria />
      <AboutSchool />
      <ContactForm />
      

      <Footer />


    </>
  );
}

export default App;