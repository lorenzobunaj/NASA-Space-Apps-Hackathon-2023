const planetObjects = require('../objects/planetObjects');

const planetModel = (planetData) => {
    const name = planetData.name
    const athmosphere = planetObjects.athmosphereObject(planetData);
    const surface = planetObjects.surfaceObject(planetData);
    const vegetation = planetObjects.vegetationObject(planetData);
    const lakes = planetObjects.lakesObject(planetData);

    const planet = {
        name,
        athmosphere,
        surface,
        vegetation,
        lakes
    };

    return planet;
};

module.exports = planetModel;