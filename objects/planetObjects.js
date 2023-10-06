const chemicals = require('../assets/chemicalsData');
const star = require('../assets/starData');
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
    const surfaceColor = getObjectColor(planetData.surface, chemicals.surface);

    const surface = {
        color: surfaceColor
    }

    return surface;
};

// vegetation
exports.vegetationObject = (planetData) => {
    const planetDataVegetation = [
        {
            name: "star",
            type: planetData.star
        }
    ];

    const vegetationColors = [
        {
            name: "star",
            color: star.find(e => e.name === planetDataVegetation.find(e => e.name === "star").type).vegetation.color
        }
    ];
    
    const vegetationColor = getObjectColor(planetDataVegetation, vegetationColors);

    const vegetation = {
        color: vegetationColor
    }

    return vegetation
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