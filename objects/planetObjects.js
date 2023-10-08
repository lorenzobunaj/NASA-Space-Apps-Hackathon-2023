const chemicals = require('../data/chemicalsData');
const star = require('../data/starData');
const getObjectColor = require('./getObjectColor');

// athmosphere
exports.athmosphereObject = (planetData) => {
    /*let athmosphereChemicals = [
        "hydrogenCyanide", "hydrogenSulfide", "methane", "waterVapour", "ammonia", "carbonDioxide", "oxygen", "sulfuricAcid"
    ];*/

    let athmosphereChemicals = [];
    chemicals.map(chem => {
        if (chem.athmosphere !== 'NaN') {
            athmosphereChemicals.push({
                name: chem.name,
                color: chem.athmosphere.color//chemicals.find(e => e.name === chem).color
            });
        }
    });

    const athmosphereColor = getObjectColor(planetData.athmosphere.chemicals, athmosphereChemicals);

    const athmosphere = {
        color: athmosphereColor
    };

    return athmosphere;
};

// surface
exports.surfaceObject = (planetData) => {
    /*let surfaceChemicals = [
        "ironOxides", "sulfatesSulfides", "graphite", "carbonates", "calciumSulphate", "sodiumChloride", "oxygen"
    ];*/

    let surfaceChemicals = [];
    chemicals.map(chem => {
        if (chem.surface !== 'NaN') {
            surfaceChemicals.push({
                name: chem.name,
                color: chem.surface.color
            });
        }
    });

    const surfaceColor = getObjectColor(planetData.surface.chemicals, surfaceChemicals);

    const surface = {
        color: surfaceColor
    };

    return surface;
};

// vegetation
exports.vegetationObject = (planetData) => {
    let vegetationChemicals = [];
    chemicals.map(chem => {
        if (chem.vegetation !== 'NaN') {
            vegetationChemicals.push({
                name: chem.name,
                color: chem.vegetation.color
            });
        }
    });

    const planetDataVegetation = [
        ...planetData.vegetation.chemicals,
        {
            name: "star",
            type: planetData.star
        }
    ];

    const vegetationColors = [
        ...vegetationChemicals,
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
    let lakesRelevantChemicals = [
        "waterVapour", "methane", "ammonia", "hydrogenSulfide", "hydrogenCyanide", "sulfuricAcid"
    ];

    let lakesChemicals = [];
    chemicals.map(chem => {
        if (lakesRelevantChemicals.includes(chem.name)) {
            lakesChemicals.push({
                name: chem.name,
                color: chemicals.find(e => e.name === chem.name).color
            });
        }
    });


    const lakesColor = getObjectColor([...planetData.athmosphere.chemicals, ...planetData.surface.chemicals], lakesChemicals);

    const lakes = {
        color: lakesColor
    }

    return lakes;
};