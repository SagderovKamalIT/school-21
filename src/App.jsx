// Главный компонент, моего сайта
// Подключение компонентов
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/HeroSection/Hero";
import AboutProgram from "./components/AboutProgramSection/AboutProgram";
import TrainingTasks from "./components/TrainingTasks/TrainingTasks";


import "./styles/main.scss"



function App() {
  return (
    <>
     <Header />
        
      <Hero />
      <AboutProgram />
      <TrainingTasks />

     <Footer />
    </>
  );
}

export default App;