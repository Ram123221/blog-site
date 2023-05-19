import { useState } from 'react'
import './App.scss'
import Navbar from './components/Header/Navbar/Navbar';
import Carousel from './components/Header/Carousel/Carousel';
import AllSection from './components/Body/AllSection/AllSection';
import MiddleTwoSection from './components/Body/AllSection/MiddleTwoSection';
import { culture, business } from './components/Data/data';
import Footer from "./components/Footer/Footer.tsx";
function App() {

  return (
    <>
      <Navbar />
      <Carousel />
      <AllSection />
      <MiddleTwoSection section={culture} />
      <MiddleTwoSection section={business} />
      <AllSection />
      <Footer />
    </>
  )
}

export default App
