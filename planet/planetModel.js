const getElementColor = require('./../utils/getElementColor');

const planetModel = (planetData) => {
    const athmosphere = athmosphereModel(planetData);
    const surface = surfaceModel(planetData);
    const vegetation = vegetationModel(planetData);
    const lakes = lakesModel(planetData);

    const planet = {
        athmosphere,
        surface,
        vegetation,
        lakes
    };

    return planet;
};

// athmosphere function
const athmosphereModel = (planetData) => {
    const athmosphereColor = getElementColor(planetData);

    const athmosphere = {
        color: athmosphereColor
    }

    return athmosphere;
};

// surface function
const surfaceModel = (planetData) => {
    const surfaceColor = getElementColor(planetData);

    const surface = {
        color: surfaceColor
    }

    return surface;
};

// vegetation function
const vegetationModel = (planetData) => {
    const vegetationColor = getElementColor(planetData);

    const vegetation = {
        color: vegetationColor
    }

    return vegetation;
};

// lakes function
const lakesModel = (planetData) => {
    const lakesColor = getElementColor(planetData);

    const lakes = {
        color: lakesColor
    }

    return lakes;
};

module.exports = planetModel;