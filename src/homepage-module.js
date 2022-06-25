export default function getHomepage() {
    const welcomeContainer = document.createElement('div');
    const welcomeImage = document.createElement('img');
    const text = document.createElement('div');
    const resName = document.createElement('div');
    const resSlogan = document.createElement('div');
    const resCopy = document.createElement('div');

    resName.textContent = "Chuck's Restaurant";
    resSlogan.textContent = 'Drink till you pass out';
    resCopy.textContent = "Welcome to Butterbun's biggest drinks, shakes and fruit juice restaurant. \
    We offer delicious drinks of all variety and flavors for everyone. In the summer season \
    we understand how hot and annoying it gets to get by your daily work. We feel your  \
    frustation when you get too tired to work but too uncomfortable and hot to stay in your     \
    home. To relieve some of that summer heat please come to our comfy place and call it your   \
    home. Bring some friends along to enjoy the summers with cool drinks and juice parties.     \
    Happy drinking and relaxing."

    welcomeContainer.classList.add('welcome-container');
    welcomeImage.setAttribute('src', '../dist/restaurant-photo.jpg');
    text.classList.add('text');
    resName.classList.add('res-name');
    resSlogan.classList.add('res-slogan');
    resCopy.classList.add('res-copy');

    welcomeContainer.appendChild(welcomeImage);
    welcomeContainer.appendChild(text);
    text.appendChild(resName);
    text.appendChild(resSlogan);
    text.appendChild(resCopy);

    return welcomeContainer;
}