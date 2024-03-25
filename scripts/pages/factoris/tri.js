

// Fonction pour ouvrir et fermer le menu de filtre
const openCloseFilterMenu = () => {
    const filterMenu = document.querySelector(".dropdown_content");
    const filterMenuButton = document.querySelector(".btn_drop");
    const filterButtons = document.querySelectorAll(".dropdown_content button");

    filterMenuButton.addEventListener("click", () => {
        const isExpanded = filterMenuButton.getAttribute("aria-expanded") === "true" || false;
        filterMenuButton.setAttribute("aria-expanded", !isExpanded);
        filterMenu.classList.toggle("curtain_effect");
        document.querySelector(".fa-chevron-up").classList.toggle("rotate");
        const newAriaHiddenValue = filterMenu.classList.contains("curtain_effect") ? "false" : "true";
        filterMenu.setAttribute("aria-hidden", newAriaHiddenValue);
        const newTabIndexValue = filterMenu.classList.contains("curtain_effect") ? "0" : "-1";
        filterButtons.forEach(button => button.setAttribute("tabindex", newTabIndexValue));
    });
};
// Appeler la fonction pour ouvrir et fermer le menu de filtre
openCloseFilterMenu();
    // Fonction pour afficher les médias avec filtre
const displayMediaWithFilter = (getPhotographers) => {
    const currentFilter = document.querySelector('#current_filter');
    const allFilters = Array.from(document.querySelectorAll('.dropdown_content li button'));

    allFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            currentFilter.textContent = filter.textContent;
            sortByFilter(filter.textContent, getPhotographers);
        });
    });
    const sortByFilter = (filterValue, getPhotographers) => {
        switch (filterValue) {
            case 'Titre':
                getPhotographers.media.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'Popularité':
                getPhotographers.media.sort((a, b) => b.likes - a.likes);
                break;
            case 'Date':
                getPhotographers.media.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
        }
        getPhotographers.createPhotographerMedias();

        const mediaElements = document.querySelectorAll('.filter_section');
        mediaElements.forEach((media, index) => {
            setTimeout(() => {
                media.classList.add('animeCard');
            }, 100 * index);
        });
    };
};