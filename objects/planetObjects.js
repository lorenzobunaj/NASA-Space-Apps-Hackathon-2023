const chemicals = require('../assets/chemicalsData');
const getObjectColor = require('./getObjectColor');

// athmosphere
exports.athmosphereObject = (planetData) => {

    const athmosphereColor = getObjectColor(planetData.athmosphere, chemicals.athmosphere);

    const athmosphere = {
        color: athmosphereColor
    }

    return athmosphere;
};

// surface
exports.surfaceObject = (planetData) => {
    /*const surfaceColor = getObjectColor(planetData);

    const surface = {
        color: surfaceColor
    }

    return surface;
    */
    return 1
};

// vegetation
exports.vegetationObject = (planetData) => {
    /*
    const vegetationColor = getObjectColor(planetData);

    const vegetation = {
        color: vegetationColor
    }

    return vegetation
    */

    return 1;
};

// lakes
exports.lakesObject = (planetData) => {
    /*
    const lakesColor = getObjectColor(planetData);

    const lakes = {
        color: lakesColor
    }

    return lakes;
    */

    return 1;
};