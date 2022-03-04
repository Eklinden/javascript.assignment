// Collected all the display function for easier locating and accessing.
// They are functions that you call on because there are many areas where they might be used
// All the functions here are in some way altering the HTML code to change what can be seen by the user.

const moonList = document.querySelector('.moons-list');
const overlayElem = document.querySelector('.overlay');

function showInfo(planet) {
    document.querySelector('.planet-name').innerText = planet.name;
    document.querySelector('#describtion-data').innerText = planet.desc;
    document.querySelector('#area-data').innerText = planet.circumference;
    document.querySelector('#distant-data').innerText = planet.distance;
    document.querySelector('#max-temp-data').innerText = planet.temp.day;
    document.querySelector('#min-temp-data').innerText = planet.temp.night;
    document.querySelector('.planet-color').classList.add(planet.name);
    showMoons(planet.moons);
};
function showMoons(moons) {
    moonList.innerHTML = '';
    for(let i = 0; i < moons.length; i++) {
        let moonItem = document.createElement('p');
        moonItem.setAttribute('class', 'moon');
        moonItem.innerText = moons[i];
        moonList.appendChild(moonItem);
    };
};
function toggleOverlay () {
    overlayElem.classList.toggle('show');
};

export { showInfo, toggleOverlay };