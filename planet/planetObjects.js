const getObjectColor = require('../utils/getObjectColor');

// athmosphere
exports.athmosphereObject = (planetData) => {
    const athmosphereColor = getObjectColor(planetData);

    const athmosphere = {
        color: athmosphereColor
    }

    return athmosphere;
};

// surface
exports.surfaceObject = (planetData) => {
    const surfaceColor = getObjectColor(planetData);

    const surface = {
        color: surfaceColor
    }

    return surface;
};

// vegetation
exports.vegetationObject = (planetData) => {
    const vegetationColor = getObjectColor(planetData);

    const vegetation = {
        color: vegetationColor
    }

    return vegetation;
};

// lakes
exports.lakesObject = (planetData) => {
    const lakesColor = getObjectColor(planetData);

    const lakes = {
        color: lakesColor
    }

    return lakes;
};