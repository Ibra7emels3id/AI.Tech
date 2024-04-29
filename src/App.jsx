import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import About from './Components/About';
import Services from './Components/Services';
import WhyChoose from './Components/WhyChoose';
import OurRecent from './Components/OurRecent';
import Frequently from './Components/Frequently';
import NewSletter from './Components/NewSletter';
import Footer from './Components/Footer';
import OurTeam from './Components/OurTeam';
import Testimonial from './Components/Testimonial';

const App = () => {
  return (
    <>
      <Header/>
      <About />
      <Services/>
      <WhyChoose />
      <OurRecent/>
      <Frequently/>
      <OurTeam/>
      <Testimonial/>
      <NewSletter />
      <Footer/>
    </>
  );
}

export default App;
