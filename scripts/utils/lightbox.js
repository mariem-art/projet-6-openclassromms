const displayLightbox = (images) => {

    const gallery = document.querySelector('.gallery');

    const lightboxWrapper = document.querySelector('.lightbox_wrapper');
    const btnClose = document.querySelector('.btn_close_lightbox');
    const btnPrevious = document.querySelector('.btn_previous');
    const btnNext = document.querySelector('.btn_next');
    const lightboxMedia = document.querySelector('.lightbox_media');

    const lightboxTemplate = (imageUrl) => {
        lightboxMedia.innerHTML = `<img src="${imageUrl}" alt="">`;
    };

    const closeLightbox = () => {
        lightboxWrapper.style.display = 'none';
        lightboxMedia.innerHTML = '';
    };

    const nextMedia = () => {
        currentIndex = (currentIndex + 1) % images.length;
        lightboxTemplate(images[currentIndex]);
        showActiveBtn(btnNext);
    };

    const previousMedia = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxTemplate(images[currentIndex]);
        showActiveBtn(btnPrevious);
    };

    const showActiveBtn = btn => {
        btn.classList.add('active');
        setTimeout(() => btn.classList.remove('active'), 100);
    };

    document.addEventListener('keyup', e => {
        switch (e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                previousMedia();
                break;
            case 'ArrowRight':
                nextMedia();
                break;
        }
    });

    btnPrevious.addEventListener('click', () => previousMedia());
    btnNext.addEventListener('click', () => nextMedia());
    btnClose.addEventListener('click', () => closeLightbox());

    let currentIndex = 0;

    images.forEach((media, index) => {
        const img = document.createElement('img');
        img.src = media.image || media.video; // Assurez-vous que l'URL de l'image ou de la vidéo est correctement définie
        img.classList.add('gallery-image');
        img.addEventListener('click', () => {
            lightboxTemplate(img.src);
            lightboxWrapper.style.display = 'block';
            currentIndex = index;
        });
        gallery.appendChild(img);
    });
};