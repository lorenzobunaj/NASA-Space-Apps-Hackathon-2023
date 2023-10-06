const getObjectColor = (objectData, objectColors) => {
    const objectRgbas = objectColors;
    objectRgbas.map((e, i) => {
        const rgbColor = e.color.split(',');
        e.color = `${rgbColor[0]},${rgbColor[1]},${rgbColor[2]},${objectData[i].percentage ? objectData[i].percentage / 100 : 'noPerc'}`;
    });

    let objectColor = [
        getColorComponent(objectRgbas, 0), 
        getColorComponent(objectRgbas, 1), 
        getColorComponent(objectRgbas, 2)
    ];

    objectColor.map(e => e = Math.round(e*100)/objectRgbas.length);

    return objectColor;
};

const getColorComponent = (rgbasArray, i) => {
    return rgbasArray.reduce((c, e) => {
        const intensity = e.color.split(',')[3] === 'noPerc'? 1 : e.color.split(',')[3]
        return c + Number(e.color.split(',')[i])*Number(intensity);
    }, 0)
};

module.exports = getObjectColor;