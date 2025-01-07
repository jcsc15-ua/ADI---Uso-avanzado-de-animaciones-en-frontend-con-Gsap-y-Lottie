import lottie from 'lottie-web';

// Carga la animación
const animation = lottie.loadAnimation({
  container: document.getElementById('lottie'),
  renderer: 'svg',
  loop: false, // No en bucle, para tener control total
  autoplay: false, // No iniciar automáticamente
  path: '/animation.json', // Ruta de la animación
});

// Añade un evento para controlar la animación con el mouse
window.addEventListener('mousemove', (event) => {
  const width = window.innerWidth; // Ancho de la ventana
  const mouseX = event.clientX; // Posición X del mouse
  const progress = mouseX / width; // Proporción del ancho
  const frame = animation.totalFrames * progress; // Calcula el frame actual
  animation.goToAndStop(frame, true); // Detén la animación en el frame calculado
});
