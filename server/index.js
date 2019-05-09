global.__rootdir = require('path').resolve(__dirname, '../')
const app = require('./app')

app.listen(3000, () => {
  console.info(`http://localhost:3000`) // eslint-disable-line no-console
})
