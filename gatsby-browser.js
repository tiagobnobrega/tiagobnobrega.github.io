// import './src/styles/main.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'particles.js';
import scrollReveal from 'scrollreveal';

// import { particlesSettings } from './src/components/Hero';

export const onClientEntry = () => {
  console.log("We've started!");
  window.scrollReveal = scrollReveal;
  // callAnalyticsAPI()
};
