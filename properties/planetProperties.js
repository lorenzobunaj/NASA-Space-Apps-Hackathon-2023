const habitabilityData = require('../data/habitabilityData');

// habitability
exports.habitabilityProperty = (planetData) => {
    let habitabilityValue = true;
    habitabilityData.forEach(prop => {
        console.log(prop);
        const inputProp = planetData.habitability.factors.find(e => e.name === prop.name);

        if (!(inputProp > prop.range[0]) || !(inputProp < prop.range[1])) {
            habitabilityValue = false;
        }
    });

    const habitability = {
        value: habitabilityValue
    };

    return habitability;
};