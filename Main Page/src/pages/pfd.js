import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SideFooter from '../components/SideFooter';

import heroImage from '../assets/img/bg.jpg';
import ContactForm from '../components/ContactForm';
import GpaCalculator from '../components/GpaCalculator';

const PassFailPage = () => (
  <Layout>
    <div id="wrapper">
      <section className="intro">
        <Header />
        <div className="content">
          <span className="image fill" data-position="center">
            <img src={heroImage} alt="" />
          </span>
        </div>
      </section>
      <GpaCalculator />
      {/* Just Ask Yashraj */}
      <section>
        <ContactForm />
        <SideFooter />
      </section>

      <Footer />
    </div>
  </Layout>
);

export default PassFailPage;
