import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Pagservices from './Components/Pagservices';
import WhyChoose from './Components/WhyChoose';
import OurRecent from './Components/OurRecent';
import Frequently from './Components/Frequently';
import NewSletter from './Components/NewSletter';
import Footer from './Components/Footer';
import MinOurTeam from './Components/MinOurTeam';
import MinTestimonial from './Components/MinTestimonial';
import MainAbout from './Components/MainAbout';

const App = () => {
  return (
    <>
      <Header/>
      <MainAbout />
      <Pagservices/>
      <WhyChoose />
      <OurRecent/>
      <Frequently/>
      <MinOurTeam/>
      <MinTestimonial/>
      <NewSletter/>
      <Footer/>
    </>
  );
}

export default App;
