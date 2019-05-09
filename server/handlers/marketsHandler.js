const { readFileSync } = require('fs')
const parse = require('csv-parse/lib/sync')

const filename = `${ __rootdir }/data/markets.csv`
const file = readFileSync(filename, 'utf8')
const markets = parse(file, {
  auto_parse: true,
  columns: true,
})

const getMarketById = async (ctx) => {
  const { FMID } = ctx.params

  try {
    ctx.response.status = 200
    ctx.body = markets.find(({ id }) => id === FMID)
  } catch (error) {
    ctx.throw(error.status, error.body)
  }
}

const getMarkets = async (ctx) => {
  const { limit, offset } = ctx.query

  const offSetInt = parseInt(offset)
  const limitInt = parseInt(limit)

  try {
    ctx.response.status = 200
    ctx.body = markets.slice(offSetInt || 0, (limitInt + offSetInt) || 50)
  } catch (error) {
    ctx.throw(error.status, error.body)
  }
}

module.exports = {
  getMarketById,
  getMarkets,
}
