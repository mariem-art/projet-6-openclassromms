//Mettre le code JavaScript lié à la page photographer.html
//récupérer le lien URL de la page 
const searchParams = new URL(location.href);
// affiche id 
//console.log(searchParams.searchParams.get("id"));
const id= searchParams.searchParams.get("id");
//console.log (location.href);
// Récupération des pièces depuis le fichier JSON
// afficher le bon photograph avec son id 
fetch("photographers.json").then(reponse => reponse.json().then(photographes => {
  photographes.photographers.forEach(photographe=>{
    if(photographe.id == id){
      const photographerProfil = document.querySelector(".photograph-profil");
      const photographerImage =document.querySelector(".image-photograph");
      const photgrapherFooter=document.querySelector(".photographfooter");
      const triContainer = document.querySelector('.dropdown');
      const {divInfo, img }= getSinglePhotographer(photographe);
      const {priceElement}=getUserFooter(photographe);
      photographerProfil.appendChild(divInfo);
      photographerImage.appendChild(img);
      photgrapherFooter.appendChild(priceElement);
    }  
  })
})
);
fetch("photographers.json").then(reponse => reponse.json().then(photographes => {
  let totale=0;
  photographes.media.forEach(media=>{
    if(media.photographerId == id){
      totale=totale+media.likes;
      //console.log(media.photographerId,id);
      const photographergalerie = document.querySelector(".media-container");
      const photgrapherFooterTotale=document.querySelector(".somme");
      const {article}=getMediaCardDOM(media);
      photographergalerie.appendChild(article);
      photgrapherFooterTotale.textContent=totale;
    }
  })
})
);
displayLightbox();