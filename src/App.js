
import React from 'react';
import Header from './components/Header';
import Division from "./components/division";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import "./styles/app.scss"
function App() {
  return (
    <>
      <Header />
      <Division />
      <Cards />
      <Footer />
    </>

  );
}

export default App;