const catchAsync = require('./utils/catchAsync');

exports.getPlanet = catchAsync(async (req, res, next) => {
    // 1) get the planet name from the request
    const planetName = req.params.id;

    // 2) get the planet from the NASA database
    const url = 'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?';
    const source = `${url}query=select+*+from+pscomppars+where+pl_name=${planetName}&limit=1&format=json`;

    const response = await fetch(source, {
        method: "GET"
    });

    const responseObject = await response.json();
    const planet = responseObject[0];

    console.log(planet);

    // 3) reprocess the planet data to get results

    // 4) return the reprocessed data
    res
        .status(200)
        .json({
            status: 'success',
            data: {
                name: planet.pl_name
            }
        });
});