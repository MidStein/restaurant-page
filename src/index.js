import getHomepage from './homepage-module';
import './style.css'

const content = document.getElementById('content');
const homepage = getHomepage();
content.appendChild(homepage);
