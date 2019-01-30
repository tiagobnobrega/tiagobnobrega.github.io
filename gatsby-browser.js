import './src/styles/main.scss';
import 'particles.js';
import scrollReveal from 'scrollreveal';

// import { particlesSettings } from './src/components/Hero';

export const onClientEntry = () => {
  console.log("We've started!");
  window.scrollReveal = scrollReveal;
  // callAnalyticsAPI()
};
