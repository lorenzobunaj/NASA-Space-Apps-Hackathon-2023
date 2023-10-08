const getObjectColor = (objectData, objectColors) => {
    const objectRgbas = objectColors;
    objectRgbas.map((e, i) => {
        console.log(e);
        const rgbColor = e.color.split(',');
        
        //e.color ? e.color.split(',') : ['128','128','128'];
        e.color = `${rgbColor[0]},${rgbColor[1]},${rgbColor[2]},${
            objectData.find(d => d.name === e.name).percentage ?  
                objectData.find(d => d.name === e.name).percentage / 100 : 'noPerc'}`;
        
    });
    let objectColor = [
        Math.round(getColorComponent(objectRgbas, 0)*100/objectRgbas.length)/100,
        Math.round(getColorComponent(objectRgbas, 1)*100/objectRgbas.length)/100,
        Math.round(getColorComponent(objectRgbas, 2)*100/objectRgbas.length)/100,
    ];

    return objectColor;
};

const getColorComponent = (rgbasArray, i) => {
    return rgbasArray.reduce((c, e) => {
        const intensity = e.color.split(',')[3] === 'noPerc'? 1 : e.color.split(',')[3];
        return c + Number(e.color.split(',')[i])*Number(intensity);
    }, 0)
};

module.exports = getObjectColor;