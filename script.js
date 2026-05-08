document.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById('background-music');
  const musicToggle = document.getElementById('music-toggle');

  if (music && musicToggle) {
    music.volume = 0.5;

    function toggleMusic() {
      if (music.paused) {
        music.play().catch(() => {});
        musicToggle.classList.add('playing');
        musicToggle.title = 'Pausar música';
      } else {
        music.pause();
        musicToggle.classList.remove('playing');
        musicToggle.title = 'Reproducir música';
      }
    }

    musicToggle.addEventListener('click', toggleMusic);
    music.play().catch(() => {});
  }

  const loginToggle = document.getElementById('login-toggle');
  const loginPanel = document.getElementById('login-panel');
  const loginClose = document.getElementById('login-close');

  if (loginToggle && loginPanel && loginClose) {
    loginToggle.addEventListener('click', () => {
      loginPanel.classList.toggle('visible');
    });

    loginClose.addEventListener('click', () => {
      loginPanel.classList.remove('visible');
    });

    loginPanel.addEventListener('click', (event) => {
      if (event.target === loginPanel) {
        loginPanel.classList.remove('visible');
      }
    });
  }
});