
//affichager footer
    function getUserFooter(data) {
        //console.log(data);
        const priceElement = document.createElement('p');
        priceElement.innerText = ` ${data.price} € /jour  `;
        //console.log(priceElement);
        return {priceElement};
    }
