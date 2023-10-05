const catchAsync = require('../utils/catchAsync');
const planetModel = require('./planetModel');

exports.getPlanetModel = catchAsync(async (req, res, next) => {
    // 1) get the planet name from the request
    const planetData = req.body;

    // 2) get the planet from the NASA database
    //const url = 'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?';
    //const source = `${url}query=select+*+from+pscomppars+where+pl_name=${planetName}&limit=1&format=json`;

    //const response = await fetch(source, {
    //    method: "GET"
    //});

    //const responseObject = await response.json();

    // 3) reprocess the planet data to get results
    const planet = planetModel(planetData);

    // 4) return the reprocessed data
    res
        .status(200)
        .json({
            status: 'success',
            data: planet
        });
});

exports.getPlanetImage = catchAsync(async (req, res, next) => {
    res
        .status(200)
        .json({
            status: 'success'
        })
});