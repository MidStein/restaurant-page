import getHome from './home-module';
import getContact from './contact-module';
import getMenu from './menu-module';
import './style.css'

function tabPressed() {
    if (this === currSelected) return;
    currSelected.classList.remove('tab-selected');
    content.replaceChildren();
    currSelected = this;
    this.classList.add('tab-selected');
    const currName = this.textContent;
    if (currName === 'Home') {
        content.appendChild(home);
    } else if (currName === 'Contact') {
        content.appendChild(contact);
    } else {
        content.appendChild(menu);
    }
}

const tabs = document.querySelectorAll('.tab');
const content = document.getElementById('content');
const home = getHome(), contact = getContact(), menu = getMenu();

tabs.forEach(tab => tab.addEventListener('click', tabPressed));

let currSelected = document.querySelector('.tab');
content.appendChild(home);