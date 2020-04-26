import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SideFooter from '../components/SideFooter';

import heroImage from '../assets/img/bg.jpg';
import AppScreenshotMockup from '../assets/img/screenshot_app.png';
// import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';
// import { Link } from 'gatsby';
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
            <a href="#">About Us</a>
          </h2>
        </header>
        <div className="content">
          <p>
            <strong>JU eezy</strong> is a <b>platform</b> created to{' '}
            <i>ease campus life</i>. It is created with a <i>opensource</i>{' '}
            vision where any JU member is free to contribute and take full
            credits of their work.
            <br />
            We started with an <i>Android app</i> having some basic features
            like providing Mess's Food Menu or helping you navigate across the
            campus. Since then, we never stopped. Our app has evolved. Not only
            app, we have developed a Google Action as well and iOS app is in
            development. Our team also grew. We welcome anyone who has passion
            to create something that is actually used by thousands of people
            daily.
            <br />
            <strong>Our motto</strong> : Deployment of skill or talent you have
            in Real-life is important.
          </p>
          <ul className="actions">
            <li>
              <a href="https://play.google.com/store/apps/details?id=com.lavish.jueezy" className="button primary icon fa-android">
                Go to app
              </a>
            </li>
            <li>
              <a
                href="https://assistant.google.com/services/invoke/uid/0000006b2cdce0b0?hl=en"
                className="button icon fa-google"
              >
                Go to action
              </a>
            </li>
          </ul>

          <span className="image main">
            <img src={AppScreenshotMockup} alt="" />
          </span>
        </div>
      </section>

      <section>
        <header>
          <h2>Features</h2>
        </header>
        <div className="content">
          <p>Here are the features of our Android app.</p>
          <ul className="feature-icons">
            <li className="icon fa-book">Study Meterial (Beta)</li>
            <li className="icon fa-map-marker">Campus Guide</li>
            <li className="icon fa-id-card">Contacts</li>
            <li className="icon fa-spoon">Mess Food Menu</li>
            <li className="icon fa-cubes">
              Stationery shop status, auto ERP Access, etc.
            </li>
          </ul>
          <p>
            Please note that we are not some sort of service providers. We are
            coders who believe in building something useful. We build
            experience. We provide a platform where you can come and showcase
            your talent or skills.
          </p>
          <h3>Come join us. Let's make this second home better together.</h3>
        </div>
      </section>

      <section>
        <header>
          <h2>Need for App</h2>
        </header>
        <div className="content">
          <p>
            Everything started with just a simple problem faced on the very
            first day of college. Finding the LT was a headache. That wasn't the
            only problem. We saw how mess admins struggled writing menu on white
            boards. Yeah, those were the days we came from. And we changed that!
            And that was it. We faced problems and solved them using technology
            so that you don't have to face them. But this doesn't mean you just
            keep enjoying our efforts. You are supposed to find out where you
            fit in our team. Try to find out how you can help make this campus a
            better place so that you can change the world in future.
          </p>
          <blockquote>
            <b>A skill in you without implementation, is of no use.</b>
            <br /> - Lavish Swarnkar{' '}
          </blockquote>

          <section>
            <header>
              <h3>Need for Website</h3>
            </header>
            <div className="content">
              <p>
                We don't want to stick to app only. Our motive is to develop the
                skills in you. Whether it be app development, web development,
                AR, VR, ML, AI or any future growing technology you can
                implement to solve problems faced by millions daily.
                <br />
                Using website you can write blog posts and share your experience
                with others. There is no proper communication medium in our
                university. Using blogs, share your stories to help others.
                <br />
                Also, now Food menu will also be available on website as a
                relief to iOS users.
              </p>
              <blockquote>
                <b>
                  Roses are red, Voilets are Blue, I have 🖖 Four fingers and
                  one is for you
                </b>
                <br />
                So that We can walk together.
                <br /> - Deepak Choudhary
              </blockquote>
            </div>
          </section>
        </div>
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
