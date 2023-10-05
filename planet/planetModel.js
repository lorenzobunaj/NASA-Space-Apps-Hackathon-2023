const planetObjects = require('../objects/planetObjects');

const planetModel = (planetData) => {
    const athmosphere = planetObjects.athmosphereObject(planetData);
    const surface = planetObjects.surfaceObject(planetData);
    const vegetation = planetObjects.vegetationObject(planetData);
    const lakes = planetObjects.lakesObject(planetData);

    const planet = {
        athmosphere,
        surface,
        vegetation,
        lakes
    };

    return planetData;
};

module.exports = planetModel;