import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

import lottie from 'lottie-web';

// Carga la animación
const animation = lottie.loadAnimation({
  container: document.getElementById('lottie'), // Contenedor
  renderer: 'svg', // Renderizador
  loop: false, // No repetir
  autoplay: false, // No iniciar automáticamente
  path: '/animation.json', // Ruta al archivo JSON
});

// Vincula el desplazamiento con la animación
window.addEventListener('scroll', () => {
  // Calcula el porcentaje del scroll
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercentage = scrollTop / scrollHeight;

  // Calcula el frame correspondiente según el progreso del scroll
  const maxFrames = animation.totalFrames;
  const currentFrame = Math.floor(scrollPercentage * maxFrames);

  // Actualiza el frame de la animación
  animation.goToAndStop(currentFrame, true);
});
