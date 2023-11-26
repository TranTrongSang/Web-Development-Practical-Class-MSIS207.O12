const keySoundMap = {
  'w': 'kick.mp3',
  'a': 'snare.mp3',
  's': 'hihat.mp3',
  'd': 'tom1.mp3',
  'j': 'tom2.mp3',
  'k': 'tom3.mp3',
  'l': 'crash.mp3',
};

function playSound(key) {
  const audio = new Audio(getSoundFile(key));
  audio.play();
}

function getSoundFile(key) {
  return keySoundMap[key] || '';
}

function preloadAudio() {
  const preloader = document.getElementById('preloader');
  for (const key in keySoundMap) {
      const audio = new Audio(getSoundFile(key));
      preloader.appendChild(audio);
  }
}

window.onload = preloadAudio;