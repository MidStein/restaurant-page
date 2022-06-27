export default function getContact() {
    const contactsContainer = document.createElement('div');
    contactsContainer.classList.add('contacts-container');
    let contactCard, contactImage, contactInfo, name, email, mobile, location;
    let photoArr = ['unimall', 'bh1', 'ground'];
    let nameArr = ['Ajay Banga', 'Aroon Purie', 'Avatar Saini'];
    let emailArr = ['ajaybanga51@gmail.com', 'aroonpurie82@gmail.com', 'avatarsaini65@gmail.com'];
    let mobileArr = ['9072365822', '8832377719', '9997249302'];
    let locationArr = ['opposite unimall', 'behind apartments', 'opposite ball ground'];
    for (let i = 0; i < 3; i++) {
        contactCard = document.createElement('div');
        contactImage = document.createElement('img');
        contactInfo = document.createElement('div');
        name = document.createElement('div');
        email = document.createElement('div');
        mobile = document.createElement('div');
        location = document.createElement('div');

        name.innerHTML = `<span>Name:</span> ${nameArr[i]}`;
        email.innerHTML = `<span>E-mail:</span> ${emailArr[i]}`;
        mobile.innerHTML = `<span>Mobile:</span> ${mobileArr[i]}`;
        location.innerHTML = `<span>Location:</span> ${locationArr[i]}`;

        contactCard.classList.add('contact-card');
        contactImage.setAttribute('src', `../src/images/${photoArr[i]}_contact.jpg`);
        contactInfo.classList.add('contact-info');
        name.classList.add('name');
        email.classList.add('email');
        mobile.classList.add('mobile');
        location.classList.add('location');

        contactsContainer.appendChild(contactCard);
        contactCard.appendChild(contactImage);
        contactCard.appendChild(contactInfo);
        contactInfo.appendChild(name);
        contactInfo.appendChild(email);
        contactInfo.appendChild(mobile);
        contactInfo.appendChild(location);
    }
    return contactsContainer;
}