// page affichage

function getSinglePhotographer(data) {
  
     const divInfo = document.createElement('div');
     divInfo.setAttribute('role', 'article');
    //création h1
     const h1= document.createElement('h1');
     h1.textContent= data.name;
   //crée pays
     const h3 = document.createElement( 'h3' );
     h3.textContent = data.city +"," + data.country ;
    //crée sous titre
     const h4 = document.createElement( 'h4' );
     h4.textContent = data.tagline;
    // Structure les éléments
     divInfo.appendChild(h1);
     divInfo.appendChild(h3);
     divInfo.appendChild(h4);
    //affichage photo
     const Picture = `./images/photographers/${data.portrait}`;
     const img = document.createElement( 'img' );
     img.setAttribute("src", Picture);
  
return {divInfo, img };
}