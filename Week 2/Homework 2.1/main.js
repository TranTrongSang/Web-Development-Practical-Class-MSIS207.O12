
  window.addEventListener('keydown', playSoundOnKeyPress);
  document.getElementById('drum-kit').addEventListener('click', playSoundOnClick);

  function playSoundOnKeyPress(event) {
    const keyCode = event.keyCode;
    playSound(keyCode);
  }

  function playSoundOnClick(event) {
    const target = event.target;
    if (target.classList.contains('key')) {
      const keyCode = target.getAttribute('data-key');
      playSound(keyCode);
    }
  }

  function playSound(keyCode) {
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);

    if (audio) {
      audio.currentTime = 0; // rewind to the start
      audio.play();
    }

    if (key) {
      key.classList.add('playing');
      setTimeout(() => {
        key.classList.remove('playing');
      }, 100);
    }
  }
