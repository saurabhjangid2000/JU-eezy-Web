import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SideFooter from '../components/SideFooter';
import heroImage from '../assets/img/bg.jpg';
import ContactForm from '../components/ContactForm';
// import { Link } from 'gatsby';
import MenuFetcher from '../components/MenuFetcher';

const IndexPage = () => (
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

      <section id="first">
        <header>
          <h2>
            <a href="#">Today's Menu</a>
          </h2>
        </header>
        <MenuFetcher></MenuFetcher>
      </section>

      {/* Just Ask Yashraj */}

      <section>
        <ContactForm />
        <SideFooter />
      </section>

      <Footer />
    </div>
  </Layout>
);

export default IndexPage;
