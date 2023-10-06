const chemicals = require('../assets/chemicalsData');
const star = require('../assets/starData');
const getObjectColor = require('./getObjectColor');

// athmosphere
exports.athmosphereObject = (planetData) => {
    let athmosphereChemicals = [
        "hydrogenCyanide", "hydrogenSulfide", "methane", "waterVapour", "ammonia", "carbonDioxide", "oxygen", "sulfuricAcid"
    ];
    athmosphereChemicals = athmosphereChemicals.map(chem => {
        return {
            name: chem,
            color: chemicals.find(e => e.name === chem).color
        };
    });

    const athmosphereColor = getObjectColor(planetData.athmosphere.chemicals, athmosphereChemicals);

    const athmosphere = {
        color: athmosphereColor
    };

    return athmosphere;
};

// surface
exports.surfaceObject = (planetData) => {
    let surfaceChemicals = [
        "ironOxides", "sulfatesSulfides", "graphite", "carbonates", "calciumSulphate", "sodiumChloride", "oxygen"
    ];
    surfaceChemicals = surfaceChemicals.map(chem => {
        return {
            name: chem,
            color: chemicals.find(e => e.name === chem).color
        };
    });

    const surfaceColor = getObjectColor(planetData.surface.chemicals, surfaceChemicals);

    const surface = {
        color: surfaceColor
    };

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
    let lakesChemicals = [
        "waterVapour", "methane", "ammonia", "hydrogenSulfide", "hydrogenCyanide", "sulfuricAcid"
    ];

    lakesChemicals = lakesChemicals.map(chem => {
        return {
            name: chem,
            color: chemicals.find(e => e.name === chem).color
        };
    });

    
    const lakesColor = getObjectColor([...planetData.athmosphere.chemicals,...planetData.surface.chemicals], lakesChemicals);

    const lakes = {
        color: lakesColor
    }

    return lakes;
};