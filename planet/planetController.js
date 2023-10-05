const catchAsync = require('../utils/catchAsync');
const planetModel = require('./planetModel');
const planetImage = require('./planetImage');

exports.getPlanetModel = catchAsync(async (req, res, next) => {
    // 1) get the planet data from the request
    const planetData = await req.body;

    // 2) get the planet from the NASA database
    //const url = 'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?';
    //const source = `${url}query=select+*+from+pscomppars+where+pl_name=${planetName}&limit=1&format=json`;

    //const response = await fetch(source, {
    //    method: "GET"
    //});

    //const responseObject = await response.json();

    // 2) process the planet data to get results
    const planet = await planetModel(planetData);

    // 3) return the results
    res
        .status(200)
        .json({
            status: 'successs',
            data: planet
        });
});

exports.getPlanetImage = catchAsync(async (req, res, next) => {
    // 1) get the planet data from the request
    const planetData = req.body;

    // 2) process the planet data to get results
    const planet = planetImage(planetData);

    // 3) return the results
    res
        .status(200)
        .json({
            status: 'success',
            data: planet
        })
});