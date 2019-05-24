const apiHandler = (ctx) => {
  ctx.body = 'This is the api.'
}

const appHandler = (ctx) => {
  ctx.body = 'This is the app.'
}

module.exports = {
  apiHandler,
  appHandler,
}
