'use strict';

const fs = require('fs');
const path = require('path');
const https = require('https');
const config = require('../config');

const dLPath = path.resolve(__dirname, '../tmp/Export.csv');

const file = fs.createWriteStream(dLPath);
const request = https.get(config.get('src'), response => {
	response.pipe(file);
});