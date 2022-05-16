import React, { Component } from 'react';
import Footer from '../../components/Footer';
import AboutUs from '../../components/Home/AboutUs';
import Hero from '../../components/Home/hero';
import ItWorks from '../../components/Home/ItWorks';
import JobCategories from '../../components/Home/JobCategories';
import PostJob from '../../components/Home/PostJob';
import Navbar from '../../components/Navbar';
export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <div className="flex flex-col min-h-screen overflow-hidden">
          <main className="flex-grow">
            <ItWorks />
            <AboutUs />
            <JobCategories />
            <PostJob />
            <Footer />
          </main>
        </div>
      </div>
    );
  }
}
