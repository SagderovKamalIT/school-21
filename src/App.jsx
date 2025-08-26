// Главный компонент, моего сайта
// Подключение компонентов
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./sections/Hero/Hero";

import "./styles/main.scss"


function App() {
  return (
    <>
     <Header />
        
      <Hero />

     <Footer />
    </>
  );
}

export default App;