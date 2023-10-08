/*
const chemicals = [
        {
            name: "hydrogenCyanide",
            color: "0,141,203"
        },
        {
            name: "hydrogenSulfide",
            color: "250,238,102"
        },
        {
            name: "methane",
            color: "0,141,20"
        },
        {
            name: "waterVapour",
            color: "41,118,187"
        },
        {
            name: "ammonia",
            color: "175,238,238"
        },
        {
            name: "carbonDioxide",
            color: "0,151,93"
        },
        {
            name: "oxygen",
            color: "124,182,236"
        },
        {
            name: "sulfuricAcid",
            color: "220,220,220"
        },
        {
            name: "ironOxides",
            color: "155,47,28"
        },
        {
            name: "sulfatesSulfides",
            color: "224,183,96"
        },
        {
            name: "graphite",
            color: "0,0,0"
        },
        {
            name: "carbonates",
            color: "83,83,83"
        },
        {
            name: "calciumSulphate",
            color: "255,255,255"
        },
        {
            name: "sodiumChloride",
            color: "255,255,255"
        },
        {
            name: "oxygen",
            color: "124,182,236"
        }
];*/

/*
const chemicalsFilepath = './../assets';
const chemicalsSheetName = 'chemicals.xlsx';

const getExcelData = async (filepath, sheetName) => {
    let workbook = new Excel.Workbook();
    let data = await workbook.csv.readFile(filepath);

    let rowData = [];
    let worksheet = workbook.getWorksheet(sheetName);
    let rows = worksheet.rowCount;
    for (let i = 1; i <= rows; i++) {
        let row = worksheet.getRow(i);
        rowData[i - 1] = new Array(row.cellCount);
        for (let j = 1; j <= row.cellCount; j++) {
            rowData[i - 1][j - 1] = row.getCell(j).value;
        }
    };

    return rowData;
};

const chemicals = getExcelData(chemicalsFilepath, chemicalsSheetName);
*/

const xlsx = require('node-xlsx');

let chemicalsSheet = xlsx.parse(__dirname + '/../assets/chemicals.xlsx'); // parses a file

//var obj = xlsx.parse(fs.readFileSync(__dirname + '/myFile.xlsx')); // parses a buffer
chemicalsSheet[0].data.splice(0,1);
chemicalsSheet[0].data.splice(51,chemicalsSheet[0].data.length);

const chemicals = chemicalsSheet[0].data.map((chemical,i) => {
    const name = chemical[0];
    let athmosphere;
    let surface;
    let vegetation;

    if (chemical[1] === 'NaN') {
        athmosphere =  'NaN';
    } else {
        const propsObject = {};
        
        let athmosphereProperties = chemical[1].split(';');
        athmosphereProperties.splice(athmosphereProperties.length-1,1);

        athmosphereProperties.map(prop => {
            propsObject[prop.split(':')[0]] = prop.split(':')[1].split('[')[1].split(']')[0];
        });
        
        athmosphere = propsObject
    }
    if (chemical[2] === 'NaN') {
        surface =  'NaN';
    } else {
        const propsObject = {};

        let surfaceProperties = chemical[2].split(';');
        surfaceProperties.splice(surfaceProperties.length-1,1);

        surfaceProperties.map(prop => {
            propsObject[prop.split(':')[0]] = prop.split(':')[1].split('[')[1].split(']')[0];
        });
        
        surface = propsObject
    }
    if (chemical[3] === 'NaN') {
        vegetation =  'NaN';
    } else {
        const propsObject = {};

        let vegetationProperties = chemical[3].split(';');
        vegetationProperties.splice(vegetationProperties.length-1,1);

        vegetationProperties.map(prop => {
            propsObject[prop.split(':')[0]] = prop.split(':')[1].split('[')[1].split(']')[0];
        });
        
        vegetation = propsObject
    }

    return {
        name,
        athmosphere,
        surface,
        vegetation
    }
});

module.exports = chemicals;