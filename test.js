const fs = require('fs/promises');
const path = require('path');
const db = require('./db.json');

async function readData() {
    const pt = path.resolve('db.json')
    // let data = await fs.readFile(pt, 'utf-8');
    // data = JSON.parse(data);
    // console.log(data);
    const data = await fs.writeFile(pt, JSON.stringify({
        name: 'Imran'
    }));
    console.log(data);
}

readData();