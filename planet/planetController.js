const catchAsync = require('../utils/catchAsync');
const planetModel = require('./planetModel');
const planetImage = require('./planetImage');

exports.getPlanetModel = catchAsync(async (req, res, next) => {
    // 1) get the planet data from the request
    const planetData = await req.body;

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
    const planet = await planetImage(planetData);

    // 3) return the results
    res
        .status(200)
        .json({
            status: 'success',
            data: planet
        })
});