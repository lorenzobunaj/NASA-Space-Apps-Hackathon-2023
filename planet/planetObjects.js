const getElementColor = require('./../utils/getElementColor');

// athmosphere
exports.athmosphereObject = (planetData) => {
    const athmosphereColor = getElementColor(planetData);

    const athmosphere = {
        color: athmosphereColor
    }

    return athmosphere;
};

// surface
exports.surfaceObject = (planetData) => {
    const surfaceColor = getElementColor(planetData);

    const surface = {
        color: surfaceColor
    }

    return surface;
};

// vegetation
exports.vegetationObject = (planetData) => {
    const vegetationColor = getElementColor(planetData);

    const vegetation = {
        color: vegetationColor
    }

    return vegetation;
};

// lakes
exports.lakesObject = (planetData) => {
    const lakesColor = getElementColor(planetData);

    const lakes = {
        color: lakesColor
    }

    return lakes;
};