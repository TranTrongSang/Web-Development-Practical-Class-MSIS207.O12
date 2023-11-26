
function updateCountdown() {
  const now = new Date();
  const newYear = new Date(now.getFullYear() + 1, 0, 1); // Next year's January 1st

  const timeRemaining = newYear - now;
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  const countdownString = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  document.getElementById('countdown').textContent = countdownString;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial update
updateCountdown();
