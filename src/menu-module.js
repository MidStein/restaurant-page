export default function getMenu() {
    const menuContainer = document.createElement('div');
    let menuCard, menuImage, drinkDetails;
    const imageArr = ['orange-shake', 'mango-shake', 'oreo-shake', 'lemonade'];
    const nameArr = ['Orange Shake', 'Mango Shake', 'Oreo Shake', 'Lemonade'];
    const priceArr = ['40', '50', '50', '20'];
    menuContainer.classList.add('menu-container');
    for (let i = 0; i < 4; i++) {
         menuCard = document.createElement('div');
         menuImage = document.createElement('img');
         drinkDetails = document.createElement('div');

        drinkDetails.innerHTML = `${nameArr[i]}<br>&#8377;${priceArr[i]}`;

        menuCard.classList.add('menu-card');
        menuImage.setAttribute('src', `../src/images/${imageArr[i]}.jpg`);
        drinkDetails.classList.add('drink-details');

        menuContainer.appendChild(menuCard);
        menuCard.appendChild(menuImage);
        menuCard.appendChild(drinkDetails);
    }
    return menuContainer;
}