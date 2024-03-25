function updateTotal(totale){
     document.querySelector(".somme").textContent =totale;
    }
// let likesSpan= media.likes; 
function likesAndDislikes(value){
     let sommeElement = document.querySelector('.somme');
     let currentTotal = parseInt(sommeElement.textContent);
     let totales =currentTotal+value;
     updateTotal(totales);
     return totales;
    }
//aficher gallery 
function getMediaCardDOM(media) {
     let isLiked = false;
     const a = document.createElement('a');
     const article = document.createElement('article');
     article.classList.add('gallery_card');
     article.setAttribute('role', 'article');
     article.setAttribute('aria-label', media.title);
     if(media.image)
        {
         const a = document.createElement('a');
         a.href = '#';
         a.setAttribute('aria-label', `Voir ${media.title}`);
         const img = document.createElement('img');
         img.classList.add('imageGalery');
         img.src = `./assets/${media.photographerId}/${media.image}`;
         img.alt = `Portrait de ${media.title}, photographe`;
         a.addEventListener('click', (e) => { 
            e.preventDefault();
            displayLightbox(img.src);
           });
         a.appendChild(img);
         const gallery_card = document.createElement('a');
         gallery_card.classList.add('gallery_card');
         const h2 = document.createElement('h2');
         h2.textContent = media.title;
         const likesContainer = document.createElement('div');
         likesContainer.classList.add('likes');
         likesContainer.classList.add('#901C1C');
         const likesSpan = document.createElement('span');
         likesSpan.textContent = media.likes;
         likesSpan.setAttribute('class', 'likeNumber');
         const heartIcon = document.createElement('div');
         heartIcon.setAttribute('tabIndex', '0');
         heartIcon.setAttribute('class', 'heart');
         heartIcon.innerHTML = '<i class="fa-solid fa-heart size"></i>';
         heartIcon.addEventListener('click', (event) => {
                     event.preventDefault(); // Prevent the default Enter key behavior
                 // Toggle the liked status and update likes accordingly
                          if (!isLiked) {
                                 console.log(likesSpan);
                                 likesSpan.textContent = media.likes + 1;
                                 likesAndDislikes(1);
                                 likesContainer.classList.remove('#901C1C');
                                 likesContainer.classList.add('#DB8876');
                                } 
                            else {
                                 console.log(likesSpan);
                                 likesSpan.textContent = media.likes;
                                 likesAndDislikes(-1);
                                 likesContainer.classList.remove('#DB8876');
                                 likesContainer.classList.add('#901C1C');
                                }
              // Toggle the liked status
             isLiked = !isLiked;
            });
         likesContainer.appendChild(likesSpan);
         likesContainer.appendChild(heartIcon);
         article.appendChild(img);
         a.appendChild(h2);
         a.appendChild(likesContainer);
         article.appendChild(a);
        }
        if(media.video)
        {
            const a = document.createElement('a');
            a.href =  `./assets/${media.photographerId}/${media.video}`;
            a.setAttribute('aria-label', `Voir ${media.title}`);
            const videoElement = document.createElement('video');
            videoElement.classList.add('videoGalery');
            videoElement.controls = true;
            const sourceElement = document.createElement('source');
            sourceElement.src = `./assets/${media.photographerId}/${media.video}`;
            sourceElement.type = 'video/mp4';
            videoElement.addEventListener('click', (e) => {
                e.preventDefault(); 
                displayLightbox(sourceElement.src);
                
                });
            a.appendChild(videoElement)
            videoElement.appendChild(sourceElement);
            const track=document.createElement('track');
            track.kind="subtitles";
            track.src="video.en.vtt"
            track.srclang="en";
            track.label=`Portrait de ${media.title}, photographe`;
            videoElement.appendChild(track);
            const gallery_card = document.createElement('div');
            gallery_card.classList.add('gallery_card');
            const h2 = document.createElement('h2');
            h2.textContent = media.title;
            const likesContainer = document.createElement('div');
            likesContainer.classList.add('likes');
            likesContainer.classList.add('#901C1C');
            const likesSpan = document.createElement('span');
            likesSpan.textContent =media.likes;
            likesSpan.setAttribute('class', 'likeNumber');
            const heartIcon = document.createElement('div');
            heartIcon.setAttribute('tabIndex', '0');
            heartIcon.setAttribute('class', 'heart');
            heartIcon.innerHTML = '<i class="fa-solid fa-heart size"></i>';
            heartIcon.addEventListener('click', (event) => {
             if (event.key === 'Enter') {
                 event.preventDefault();
                     if (!isLiked) {
                         likesSpan.textContent = media.likes + 1;
                         likesAndDislikes(1);
                         likesContainer.classList.remove('#DB8876');
                         likesContainer.classList.add('#901C1C');
                        }
                     else {
                         likesSpan.textContent = media.likes;
                         likesAndDislikes(-1);
                         likesContainer.classList.remove('#901C1C');
                         likesContainer.classList.add('#DB8876');
                        }
                 isLiked = !isLiked;
                }
            });
         heartIcon.addEventListener('click', () => {
            
            if (!isLiked) {
                likesSpan.textContent=media.likes+1;
                likesAndDislikes(1);
                likesContainer.classList.remove('#DB8876');
                likesContainer.classList.add('#901C1C');
            } else {
                likesSpan.textContent=media.likes;
                likesAndDislikes(-1);
                likesContainer.classList.remove('#901C1C');
                likesContainer.classList.add('#DB8876');
            }
            // Toggle the liked status
            isLiked = !isLiked;
            });
            likesContainer.appendChild(likesSpan);
            likesContainer.appendChild(heartIcon);
            gallery_card.appendChild(h2);
            gallery_card.appendChild(likesContainer);
            article.appendChild(a);
            article.appendChild(gallery_card);
        }
return {article};
}
