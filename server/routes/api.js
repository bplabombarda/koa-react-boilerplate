const Router = require('koa-router')

const { getMarketById, getMarkets } = require('../handlers/marketsHandler')

const router = new Router()

router.get('/markets', getMarkets)
router.get('/markets/:id', getMarketById)

module.exports = router
