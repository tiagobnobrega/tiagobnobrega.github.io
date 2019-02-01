import React from 'react';
import { Preloader, Hero, Header, Education, Experiences, Skills, About, Started, Services, Timeline } from '../components/view';
import Print from './print';
import cvConfig from '../../cv-config';
import '../styles/main.scss';
import './print.scss';
import { SECTION_TYPES as TYPES } from '../constants';

const viewComponents = {
  [TYPES.EDUCATION]: Education,
  [TYPES.EXPERIENCE]: Experiences,
  [TYPES.SKILLS]: Skills,
  [TYPES.ABOUT]: About,
  [TYPES.STARTED]: Started,
  [TYPES.SERVICES]: Services,
  [TYPES.TIMELINE]: Timeline,
};

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
      <React.Fragment>
        <div className="page screen-only" id="home-section">
          {/* Preloader */}
          <Preloader visible={!loaded} />

          <Hero />

          <Header
            links={[
              { href: 'home-section', label: 'Home' },
              ...cvConfig.map(section => ({
                href: section.id,
                label: section.menuEntry,
              })),
            ]}
          />

          <div className="container">
            <div className="wrapper">
              {cvConfig.map(section => {
                const SectionComponent = viewComponents[section.type] || null;
                return SectionComponent ? <SectionComponent {...section.props} id={section.id} /> : null;
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
        <Print printOnly={true} />
      </React.Fragment>
    );
  }
}
