const container = document.querySelector('.lilies-container');

const lilyImages = [
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

const placedLilies = [];

lilyImages.forEach(image => {
  const lily = document.createElement('div');
  lily.classList.add('lily');

  lily.style.backgroundImage = `url('${image}')`;

  const size = 150 + Math.random() * 150;
  lily.style.width = `${size}px`;
  lily.style.height = `${size}px`;

  let top, left;
  let attempts = 0;
  let tooClose;

  do {
    tooClose = false;
    top = Math.random() * (window.innerHeight - size);
    left = Math.random() * (window.innerWidth - size);

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

  // Animation timing
  lily.style.animationDelay = `${Math.random() * 5}s`;
  lily.style.animationDuration = `${6 + Math.random() * 4}s`;

  placedLilies.push({ top, left, size });

  container.appendChild(lily);
});
