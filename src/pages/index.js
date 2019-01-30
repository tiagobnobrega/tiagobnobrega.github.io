import React from 'react';
import Preloader from '../components/Preloader';
import Hero from '../components/Hero';
import Header from '../components/Header';
import Started from '../components/Started';
import About from '../components/About';
import Skills from '../components/Skills';
import Experiences from '../components/Experiences';
import Services from '../components/Services';
import Education from '../components/Education';

import $v from '../variables';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    this.sr = window.scrollReveal();
    this.setScrollReveal();
    this.setState({ loaded: true });
  }

  componentDidUpdate() {
    this.setScrollReveal();
  }

  setScrollReveal = () => {
    if (window.innerWidth > 720) {
      this.sr.reveal('.animated', {
        delay: 200,
        distance: '50px',
        duration: 600,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        interval: 0,
        opacity: 0,
        origin: 'bottom',
        rotate: {
          x: 0,
          y: 0,
          z: 0,
        },
        scale: 0.8,
      });
    }
  };

  render() {
    const { loaded } = this.state;
    return (
      <div className="page" id="home-section">
        {/* Preloader */}
        <Preloader visible={!loaded} />

        {/* Started Background */}
        <Hero />

        {/* Header */}
        <Header
          links={[
            { href: 'home-section', label: 'Home' },
            { href: 'about-section', label: 'About' },
            { href: 'skills-section', label: 'Skills' },
            { href: 'experience-section', label: 'Experience' },
            { href: 'service-section', label: 'Services' },
            { href: 'education-section', label: 'Education' },
            { href: 'works-section', label: 'Portifolio' },
            { href: 'clients-section', label: 'Clients' },
            { href: 'blog-section', label: 'Blog' },
            { href: 'contact-section', label: 'Contact Me' },
          ]}
        />

        {/* Container */}
        <div className="container">
          {/* Started */}
          <Started {...$v} />

          {/* Wrapper */}
          <div className="wrapper">
            {/* Section About */}
            <About {...$v.about} />

            {/* Section Skills */}
            <Skills {...$v} />

            {/* Experience */}
            <Experiences {...$v} />

            {/* Service */}
            {/*<Services {...$v} />*/}

            {/* Section Education */}
            <Education {...$v} />
          </div>

          {/* Footer */}
          <footer>
            <div className="copy">
              <i className="ion-android-star" />
              <i className="ion-android-star" />
              <i className="ion-android-star" />
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
