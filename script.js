const lilyCount = 10;
const container = document.querySelector('.lilies-container');

for (let i = 0; i < lilyCount; i++) {
  const lily = document.createElement('div');
  lily.classList.add('lily');

  // Random start position
  lily.style.top = Math.random() * window.innerHeight + 'px';
  lily.style.left = Math.random() * window.innerWidth + 'px';

  // Optional: Different animation delay
  lily.style.animationDelay = `${Math.random() * 5}s`;

  container.appendChild(lily);
}
