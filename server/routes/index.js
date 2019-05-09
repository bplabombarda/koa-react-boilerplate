const Router = require('koa-router')

const api = require('./api')

const router = new Router()

router.use('/api', api.routes())

router.get('/app', ctx => {
  ctx.body = 'This is the app.'
})

module.exports = router
