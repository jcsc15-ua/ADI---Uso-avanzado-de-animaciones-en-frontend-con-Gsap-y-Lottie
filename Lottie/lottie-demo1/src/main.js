import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

import lottie from 'lottie-web';

// Carga la animación
const animation = lottie.loadAnimation({
  container: document.getElementById('lottie'), // Contenedor
  renderer: 'svg', // Renderizador
  loop: true, // Repetir en bucle
  autoplay: false, // No iniciar automáticamente
  path: '/animation.json', // Ruta al archivo JSON
});

// Agrega controles a la animación
document.getElementById('playButton').addEventListener('click', () => {
  animation.play(); // Reproduce la animación
});

document.getElementById('pauseButton').addEventListener('click', () => {
  animation.pause(); // Pausa la animación
});

document.getElementById('stopButton').addEventListener('click', () => {
  animation.stop(); // Detiene la animación
});

document.getElementById('goToFrameButton').addEventListener('click', () => {
  animation.goToAndStop(50, true); // Ve al frame 50 y se detiene
});


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
