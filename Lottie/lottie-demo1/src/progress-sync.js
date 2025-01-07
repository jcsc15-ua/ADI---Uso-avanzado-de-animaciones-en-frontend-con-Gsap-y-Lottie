import lottie from 'lottie-web';

let progress = 0; // Inicializa el progreso en 0%

// Carga la animación
const animation = lottie.loadAnimation({
  container: document.getElementById('lottie'),
  renderer: 'svg',
  loop: false, // Sin bucle
  autoplay: false, // No reproducir automáticamente
  path: '/animation.json', // Ruta de la animación
});

// Función para sincronizar la barra de progreso con la animación
function updateProgress() {
  progress = Math.min(progress + 10, 100); // Incrementa el progreso en un 10% (máximo 100%)
  const frame = (animation.totalFrames * progress) / 100; // Calcula el frame correspondiente
  animation.goToAndStop(frame, true); // Detén la animación en el frame correspondiente
  document.getElementById('progressBar').style.width = `${progress}%`; // Actualiza la barra de progreso
}

// Asocia la función al botón
document.getElementById('progressButton').addEventListener('click', updateProgress);
