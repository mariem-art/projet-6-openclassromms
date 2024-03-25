
 function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price, id} = data;
    const picture = `./images/photographers/${portrait}`;
//affichage  de page d'acceuil
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        // Crée un lien <a> 
        const link = document.createElement('a');
        link.href = `/photographe.html?id=${id}`;
        //crée une image
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        //crée name
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        //crée pays
        const h3 = document.createElement( 'h3' );
        h3.textContent = city +","+ country ; 
        //crée sous titre
        const h4 = document.createElement( 'h4' );
        h4.textContent = tagline;
        //blocArticle.appendChild(link);
        link.appendChild(img);
        link.appendChild(h2);
        link.appendChild(h3);
        link.appendChild(h4);
        //crée le prix
        const priceElement = document.createElement('p');
        priceElement.innerText = ` ${price} € /jour  `;
        //blocArticle.appendChild(link);
        link.appendChild(priceElement);
        // Structure les éléments
        article.appendChild(link);
        return (article);
    }
    return { name, picture,  city, country, tagline, price,  getUserCardDOM, id,}
}