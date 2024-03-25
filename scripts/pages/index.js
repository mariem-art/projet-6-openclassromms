
//récupérer les données de fihier joson
async function getPhotographers() {
  try {
      const response = await fetch('/photographers.json');
       if (response.ok) {
         const data = await response.json();
         return { photographers: data.photographers };
        }
      } catch (error) {
         console.error(error);
        }
}
    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");
        photographers.forEach((photographer) => {
            const photographerModel = photographerTemplate(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            //console.log(photographerModel);
            photographersSection.appendChild(userCardDOM);
        });
    }
    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    }
    init();   