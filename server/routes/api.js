const Router = require('koa-router')

const { apiHandler } = require('../handlers')

const router = new Router()

router.get('/', apiHandler)

module.exports = router
