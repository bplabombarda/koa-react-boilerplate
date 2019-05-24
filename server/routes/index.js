const Router = require('koa-router')

const api = require('./api')
const { appHandler } = require('../handlers')

const router = new Router()

router.use('/api', api.routes())
router.get('/app', appHandler)

module.exports = router
