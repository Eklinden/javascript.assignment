// I've seperated the modules into 3 files (api, display and ''main'') because 
// they are the 3 differences in category i can see to be used in this website.

const planetListElem = document.querySelector('.planet-section');
const sunElem = document.querySelector('.sun');
const exitButtonElem = document.querySelector('.exit');

import { getapikey } from './modules/api.js';
import { showInfo, toggleOverlay } from './modules/display.js';

async function getPlanetInfo (selectedPlanet) {
    let planets = await getapikey();
    for (let i = 0; i < planets.length; i++) {
        document.querySelector('.planet-color').classList.remove(planets[i].name);
        if (planets[i].name == selectedPlanet) {
            showInfo(planets[i]);
        };
    };
};

sunElem.addEventListener('click', (event) => {
    getPlanetInfo(event.originalTarget.dataset.planet);
    toggleOverlay();
});
planetListElem.addEventListener('click', async (event) => {
    if(event.originalTarget.className == 'planet') {
        getPlanetInfo(event.originalTarget.dataset.planet);
        toggleOverlay();
    };
});
exitButtonElem.addEventListener('click', () => {
    toggleOverlay();
});