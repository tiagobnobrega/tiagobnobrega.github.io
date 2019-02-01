import React from 'react';
// import 'particles.js'; Loaded @ gatsby-browser

export const particlesSettings = {
  particles: {
    number: {
      value: 75,
      density: {
        enable: false,
        value_area: 1000,
      },
    },
    color: {
      value: '#ffffff',
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000',
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: '../images/github.svg',
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: false,
        mode: 'repulse',
      },
      onclick: {
        enable: false,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

const randId = prefix =>
  `${prefix}-${Math.random()
    .toString(36)
    .substring(7)}`;

export default class Hero extends React.Component {
  particleEl = React.createRef();

  componentDidMount() {
    const { particleNumber } = this.props;
    const settings = { ...particlesSettings };
    settings.particles.number.value = particleNumber || 75;
    window.particlesJS(this.particleEl.current.id, settings); //done @gatsby-browser
  }

  render() {
    const { id = randId('particles') } = this.props;
    return (
      <div className="started-bg">
        <div ref={this.particleEl} id="hero-particles" className="slide" />
      </div>
    );
  }
}
