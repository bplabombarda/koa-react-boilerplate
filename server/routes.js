const Router = require('koa-router')

const router = new Router()

router.get('/api', ctx => {
  ctx.body = 'This is the api.'
})

router.get('/app', ctx => {
  ctx.body = 'This is the app.'
})

module.exports = router
