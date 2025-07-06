const clickSound = document.getElementById('click-sound');

document.addEventListener('click', () => {
  clickSound.currentTime = 0; 
  clickSound.play();
});