const fs = require('fs')
const path = require('path')
const https = require('https')

const outPath = path.resolve(__dirname, '../data/')

if (!fs.existsSync(outPath)) {
  fs.mkdirSync(outPath)
}

const file = fs.createWriteStream(`${outPath}/markets.csv`)

https.get('https://apps.ams.usda.gov/FarmersMarketsExport/ExcelExport.aspx', (response) => {
	response.pipe(file)
})
