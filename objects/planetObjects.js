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

    console.log('here 3')
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

    console.log('here 2')
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
        {
            name: "copper",
            percentage: planetData.surface.chemicals.find(e => e.name === 'copper').percentage
        },
        {
            name: "sulfate",
            percentage: planetData.surface.chemicals.find(e => e.name === 'sulfate').percentage
        },
        {
            name: "waterVapour",
            percentage: planetData.athmosphere.chemicals.find(e => e.name === "waterVapour").percentage
        },
        {
            name: "oxygen",
            percentage: planetData.athmosphere.chemicals.find(e => e.name === "oxygen").percentage
        },
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

    console.log('here 1')
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
            let chemColor = chemicals.find(e => e.name === chem.name).athmosphere !== 'NaN' ?
            chemicals.find(e => e.name === chem.name).athmosphere.color :
            chemicals.find(e => e.name === chem.name).surface !== 'NaN' ?
                chemicals.find(e => e.name === chem.name).surface.color : 
                chemicals.find(e => e.name === chem.name).vegetation.color;

            lakesChemicals.push({
                name: chem.name,
                color: chemColor
            });
        }
    });

    console.log('here 0')
    const lakesColor = getObjectColor([...planetData.athmosphere.chemicals, ...planetData.surface.chemicals], lakesChemicals);

    const lakes = {
        color: lakesColor
    }

    return lakes;
};