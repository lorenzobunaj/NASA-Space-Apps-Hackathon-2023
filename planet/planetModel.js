const planetObjects = require('../objects/planetObjects');
const planetProperties = require('../properties/planetProperties');

const planetModel = (planetData) => {
    const name = planetData.name
    const athmosphere = planetObjects.athmosphereObject(planetData);
    const surface = planetObjects.surfaceObject(planetData);
    const vegetation = planetObjects.vegetationObject(planetData);
    const lakes = planetObjects.lakesObject(planetData);
    const habitability = planetProperties.habitabilityProperty(planetData);

    const planet = {
        name,
        athmosphere,
        surface,
        vegetation,
        lakes,
        habitability
    };
    console.log(planet);

    return planet;
};

module.exports = planetModel;