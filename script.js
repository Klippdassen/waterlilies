const lilyCount = 3; // Match the number of images or go higher
const container = document.querySelector('.lilies-container');

const lilyImages = [
  'https://cdn.pixabay.com/photo/2017/08/14/15/04/water-lily-2640783_1280.jpg',
  'https://cdn.pixabay.com/photo/2018/03/02/09/04/lotus-3192656_1280.png',
  'https://cdn.pixabay.com/photo/2014/11/25/19/02/lotus-545512_1280.png',
  // Add more URLs up to 30
];

for (let i = 0; i < lilyCount; i++) {
  const lily = document.createElement('div');
  lily.classList.add('lily');

  // Random image
  const imageIndex = Math.floor(Math.random() * lilyImages.length);
  lily.style.backgroundImage = `url('${lilyImages[imageIndex]}')`;

  // Random start position
  lily.style.top = Math.random() * window.innerHeight + 'px';
  lily.style.left = Math.random() * window.innerWidth + 'px';

  // Optional: Different animation delay and size
  lily.style.animationDelay = `${Math.random() * 5}s`;
  const size = 150 + Math.random() * 150; // Between 150–300px
  lily.style.width = `${size}px`;
  lily.style.height = `${size}px`;

  container.appendChild(lily);
}
