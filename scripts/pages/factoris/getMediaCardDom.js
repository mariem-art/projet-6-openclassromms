// Création d'un objet pour stocker les images par photographe
const images = {};
function getMediaCardDom(media) {
  let isLiked = false;
  const { id, photographerId, title, image, video, likes, date } = media;
  const mediaPath = image ? `./assets/${photographerId}/${image}` : `./assets/${photographerId}/${video}`;
  // Ajout de l'image à images (si c'est une image)
  if (image || video) {
   if (!images[photographerId]) {
      images[photographerId] = [];
    }
    images[photographerId].push({
      type: image ? 'image' : 'video',
      path: image ? `./assets/${photographerId}/${image}` : `./assets/${photographerId}/${video}`,
      title: title
  });
  }
  const figure = document.createElement('figure');
  figure.classList.add('gallery-tout');
  figure.setAttribute('role', 'figure');
  figure.setAttribute('aria-label', title);

  const a = document.createElement('a');
  a.href = '#';
  a.setAttribute('aria-label', `Voir ${title}`);

  if (image) {
      const img = document.createElement('img');
      img.classList.add('imageGalery');
      img.src = mediaPath;
      img.alt = `Portrait de ${title}, photographe`;

      const h2 = document.createElement('h2');
      h2.textContent = title;

      const likesSpan = document.createElement('span');
      likesSpan.textContent = likes;

      const heartIcon = document.createElement('span');
      heartIcon.innerHTML = '<i class="fa-solid fa-heart size click"></i>';

      a.addEventListener('click', () => {
          findIndexMedia(img.src);
          if (!isLiked) {
              likesSpan.textContent = likes + 1;
              likesContainer.classList.remove('#901C1C');
              likesContainer.classList.add('#DB8876');
          } else {
              likesSpan.textContent = likes;
              likesContainer.classList.remove('#DB8876');
              likesContainer.classList.add('#901C1C');
          }
          isLiked = !isLiked;
      });

      a.appendChild(img);
      a.appendChild(h2);
      a.appendChild(likesSpan);
      a.appendChild(heartIcon);
  }

  if (video) {
      const videoElement = document.createElement('video');
      videoElement.classList.add('videoGalery');
      videoElement.controls = true;
      const sourceElement = document.createElement('source');
      sourceElement.src = mediaPath;
      sourceElement.type = 'video/mp4';
      videoElement.appendChild(sourceElement);

      const h2 = document.createElement('h2');
      h2.textContent = title;

      const likespan = document.createElement('span');
      likespan.textContent = likes;

      const heartIcon = document.createElement('span');
      heartIcon.innerHTML = '<i class="fa-solid fa-heart size click"></i>';

      a.addEventListener('click', (e) => {
          e.preventDefault();
          findIndexMedia(sourceElement.src);
          if (!isLiked) {
              likesSpan.textContent = likes + 1;
              likesContainer.classList.remove('#901C1C');
              likesContainer.classList.add('#DB8876');
          } else {
              likesSpan.textContent = likes;
              likesContainer.classList.remove('#DB8876');
              likesContainer.classList.add('#901C1C');
          }
          isLiked = !isLiked;
      });

      a.appendChild(videoElement);
      a.appendChild(h2);
      a.appendChild(likespan);
      a.appendChild(heartIcon);
  }

  figure.appendChild(a);
  return figure;
}