import React from 'react';
import { Preloader, Hero, Header, Started, About, Skills, Experiences, Education } from '../components';
import siteSchema from '../site-schema';

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

        <Hero />

        <Header
          links={[
            { href: 'home-section', label: 'Home' },
            ...siteSchema.map(section => ({
              href: section.id,
              label: section.menuEntry,
            })),
          ]}
        />

        <div className="container">
          <div className="wrapper">
            {siteSchema.map(section => {
              const SectionComponent = section.component;
              return <SectionComponent {...section.props} id={section.id} />;
            })}
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
