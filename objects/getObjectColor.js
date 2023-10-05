const getObjectColor = (objectData, objectColors) => {
    const objectRgbas = objectColors;
    objectRgbas.map((e, i) => {
        const rgbColor = e.color.split(',');
        e.color = `${rgbColor[0]},${rgbColor[1]},${rgbColor[2]},${objectData[i].percentage / 100}`
    });

    //const initialColor = objectRgbas[0].color.split(',')
    //initialColor.splice(3);
    console.log(objectRgbas);
    const objectColor = [
        getColorComponent(objectRgbas, 0), 
        getColorComponent(objectRgbas, 1), 
        getColorComponent(objectRgbas, 2)
    ];

    //objectColor /= objectRgbas.length;

    console.log(objectColor);

    return objectColor;
};

const getColorComponent = (rgbasArray, i) => {
    return rgbasArray.reduce((c, e) => {
        console.log(r);
        return c + Number(e.color.split(',')[c])*Number(e.color.split(',')[3]);
    }, 0)
};

module.exports = getObjectColor;