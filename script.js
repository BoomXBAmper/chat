// 🕒 Clock
function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  document.getElementById('time').textContent = `${hours}:${minutes}`;
}

setInterval(updateTime, 1000);
updateTime();

// 🧍 Avatar interaction (ritual tap)
const avatar = document.getElementById('avatar');

avatar.addEventListener('click', () => {
  avatar.classList.add('tap');

  setTimeout(() => {
    avatar.classList.remove('tap');
  }, 220);
});
