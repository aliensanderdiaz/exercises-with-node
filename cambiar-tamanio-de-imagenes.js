const testFolder = './images/';
const fs = require('fs');
const sharp = require('sharp');

const main = async function() {

    let files = fs.readdirSync(testFolder)
    let total = files.length
    
    for (const file of files) {
        console.log({file, total})
        let bufferFile = await sharp(testFolder + file)
        .resize(45, 50)
        .toFile('./images50/' + file)
    }

    console.log('FIN')
}

main()