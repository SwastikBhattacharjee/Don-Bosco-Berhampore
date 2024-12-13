import React from 'react';

const Navbar = React.lazy(() => import('./components/Navbar'));
const Hero = React.lazy(() => import('./components/Hero'));
const About = React.lazy(() => import('./components/About'));
const NewsMarquee = React.lazy(() => import('./components/NewsMarquee'));
const HousePoints = React.lazy(() => import('./components/HousePoints'));
const Gallery = React.lazy(() => import('./components/Gallery'));
const Holidays = React.lazy(() => import('./components/Holidays'));
const Blog = React.lazy(() => import('./components/Blog'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));

import LoadingScreen from './components/LoadingScreen';

function App() {
  return (
    <React.Suspense fallback={<LoadingScreen />}>
      <div className="min-h-screen bg-[#0C0C0C]">
        <Navbar />
        <div id="home">
          <Hero />
        </div>
        <NewsMarquee />
        <div id="about">
          <About />
        </div>
        <HousePoints />
        <div id="academics">
          <Holidays />
        </div>
        <Blog />
        <div id="gallery">
          <Gallery />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
    </React.Suspense>
  );
}

export default App;
