// Collected all the functions that calls to the API for easier locating and access
// They are functions that you call on because you can use them in many ways
// API is its own category so also in that way it makes sense to separate them in a module

const BASE_URL = 'https://fathomless-shelf-54969.herokuapp.com/';

async function getapikey() {
    const KEY_URL = `${BASE_URL}keys`;
    const response = await fetch(KEY_URL, {method: 'POST'});
    const data = await response.json();
    const planets = await getplanetdata(data.key);
    return planets.bodies
};
async function getplanetdata(datakey) {
    const BODIES_URL = `${BASE_URL}bodies`;
    const response = await fetch(BODIES_URL, {
        method: 'GET',
        headers: {'x-zocom': datakey}
    });
    const data = await response.json();
    return data
};

export { getapikey };