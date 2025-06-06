// Define two groups of lily images
const lilyImagesSetA = [
  'img/2zmINJsZNy/1XlmdaZDiE.png',
  'img/2zmINJsZNy/3poTMG1A6q.png',
  'img/2zmINJsZNy/6AwwcL4GNW.png',
  'img/2zmINJsZNy/8HezEgdn4p.png',
  'img/2zmINJsZNy/8tHBT7qWVF.png',
  'img/2zmINJsZNy/bGmg2A3siJ.png',
  'img/2zmINJsZNy/f5ZUSkJIQ4.png',
  'img/2zmINJsZNy/fF8YLJwbRb.png',
  'img/2zmINJsZNy/iwET2rmYbZ.png',
  'img/2zmINJsZNy/jinQkOzflM.png',
  'img/2zmINJsZNy/Jv0sbMoW7u.png',
  'img/2zmINJsZNy/kdZmyMGcO5.png',
  'img/2zmINJsZNy/kY4XvHdu8k.png',
  'img/2zmINJsZNy/Nsz8AU6ROO.png',
  'img/2zmINJsZNy/NtyRFDxlU5.png',
  'img/2zmINJsZNy/NZaXtbX0tj.png',
  'img/2zmINJsZNy/OCCB81lmAO.png',
  'img/2zmINJsZNy/OiAdYaBGtM.png',
  'img/2zmINJsZNy/PQgxcZHqE6.png',
  'img/2zmINJsZNy/puuUoCY89G.png',
  'img/2zmINJsZNy/QggF4cLGeE.png',
  'img/2zmINJsZNy/qzrLAcaRUT.png',
  'img/2zmINJsZNy/RWkb8QcYx5.png',
  'img/2zmINJsZNy/SiTrz9QJ8E.png',
  'img/2zmINJsZNy/sK0VjEb6x0.png',
  'img/2zmINJsZNy/Skq3nbA0zj.png',
  'img/2zmINJsZNy/sWT2Po0DEj.png',
  'img/2zmINJsZNy/tbm7HtqTbb.png',
  'img/2zmINJsZNy/tEwGZV2o7U.png',
  'img/2zmINJsZNy/tIsibnoMgu.png',
  'img/2zmINJsZNy/wRh5pj3nXK.png',
  'img/2zmINJsZNy/wTZ5JQZE8G.png',
  'img/2zmINJsZNy/x3dU4p0IOe.png',
  'img/2zmINJsZNy/xPSRWaNzR6.png',
  'img/2zmINJsZNy/XVFPdzz6hV.png'
];

const lilyImagesSetB = [
  'img/hYvuizuitU/2klQB6yT5s.png',
  'img/hYvuizuitU/4EtI5Rxcgc.png',
  'img/hYvuizuitU/4O9j4sIcz6.png',
  'img/hYvuizuitU/ABMAeXQUs1.png',
  'img/hYvuizuitU/AS6pAQSxRe.png',
  'img/hYvuizuitU/azI1keomIF.png',
  'img/hYvuizuitU/b3NOQxkOLr.png',
  'img/hYvuizuitU/C9AIlmXHzR.png',
  'img/hYvuizuitU/cKRhC2rSky.png',
  'img/hYvuizuitU/DTRepgWZaO.png',
  'img/hYvuizuitU/dYzlguUnKV.png',
  'img/hYvuizuitU/fzfgKGYfz3.png',
  'img/hYvuizuitU/k04xDvifT7.png',
  'img/hYvuizuitU/kYXQKLCV4b.png',
  'img/hYvuizuitU/l93iAdT3LM.png',
  'img/hYvuizuitU/lx1GeCt3c1.png',
  'img/hYvuizuitU/Mai2ILwjtT.png',
  'img/hYvuizuitU/mqcgK4GgVn.png',
  'img/hYvuizuitU/rKXLPlEIKF.png',
  'img/hYvuizuitU/RMWn5mx6zq.png',
  'img/hYvuizuitU/S0W2Nc5mxB.png',
  'img/hYvuizuitU/SaXrEQhixJ.png',
  'img/hYvuizuitU/UEbV5PQiba.png',
  'img/hYvuizuitU/UfryJ7DObr.png',
  'img/hYvuizuitU/V9CX7P6gHs.png',
  'img/hYvuizuitU/xHctpBLyNl.png',
  'img/hYvuizuitU/YBouF1ypaA.png',
  'img/hYvuizuitU/YX4YRvhbUG.png',
  'img/hYvuizuitU/zbmsYrQW2G.png',
  'img/hYvuizuitU/ZBNuJscthZ.png'
];

// Check URL parameters to determine which set of lily images to use
const urlParams = new URLSearchParams(window.location.search);
const selectedSet = urlParams.get('set');

// Choose the active lilyImages array based on the 'set' parameter
const lilyImages = selectedSet === 'B' ? lilyImagesSetB : lilyImagesSetA;

// Select the container element where lilies will be placed
const container = document.querySelector('.lilies-container');

// Store placed lilies to avoid overlapping during placement
const placedLilies = [];

// Create and place each lily with styling and animation
lilyImages.forEach(image => {
  const lily = document.createElement('div');
  lily.classList.add('lily');

  lily.style.backgroundImage = `url('${image}')`;

  const size = 100 + Math.random() * 100;
  lily.style.width = `${size}px`;
  lily.style.height = `${size}px`;

  let top, left;
  let attempts = 0;
  let tooClose;

  // Attempt to find a position that does not overlap with existing lilies
  do {
    tooClose = false;
    top = Math.random() * (window.innerHeight - size);
    left = Math.random() * (window.innerWidth - size);

    // Check distance from all previously placed lilies to avoid overlap
    for (const placed of placedLilies) {
      const dx = placed.left - left;
      const dy = placed.top - top;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < (placed.size + size) / 2) {
        tooClose = true;
        break;
      }
    }

    attempts++;
  } while (tooClose && attempts < 50);

  lily.style.top = `${top}px`;
  lily.style.left = `${left}px`;

  // Set random animation delay and duration for natural effect
  lily.style.animationDelay = `${Math.random() * 5}s`;
  lily.style.animationDuration = `${6 + Math.random() * 15}s`;

  placedLilies.push({ top, left, size });

  container.appendChild(lily);
});
