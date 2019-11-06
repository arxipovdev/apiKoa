import Koa from 'koa'
import connectorsInit from './connectors/index.js'
import initHandlers from './handlers/index.js'
import modules from './modules/index.js'

connectorsInit()

const app = new Koa()

initHandlers(app)
app.use(modules)

app.use(async ctx => {
  ctx.body = '<h1>Title test page</h1>'
})

export default app
