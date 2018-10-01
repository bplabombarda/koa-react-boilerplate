'use strict';

const fs = require('fs');
const path = require('path');
const parse = require('csv-parse/lib/sync');

const db = require('../src/db');
const { Market } = require('../src/models');

const inputPath = path.resolve(__dirname, '../tmp/Export.csv');
const inputFile = fs.readFileSync(inputPath).toString();
const inputCsv = parse(inputFile, { auto_parse: true, columns: true });

function parseCsv(csv) {
    Market.remove({}, err => {
        if (err) {
            throw err;
        }
        console.info('Markets removed.');
    });

    for (let i = 0; i < csv.length; i += 1) {
        mapToDb(csv[i]);
    }
}

function mapToDb(row) {
    const market = new Market({
        fmid: row.FMID,
        name: row.MarketName,
        website: row.Website,
        street: row.street,
        city: row.city,
        county: row.County,
        state: row.State,
        zip: row.zip,
        s1Date: row.Season1Date,
        s1Time: row.Season1Time,
        s2Date: row.Season2Date,
        s2Time: row.Season2Time,
        s3Date: row.Season3Date,
        s3Time: row.Season3Time,
        s4Date: row.Season4Date,
        s4Time: row.Season4Time,
        x_coord: !row.x ? 0 : row.x,
        y_coord: !row.y ? 0 : row.y,
        location: row.Location
    });

    market.save(err => {
        if (err) {
            throw err;
        }
    });
}

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async () => {
    await parseCsv(inputCsv);
    db.close();
});