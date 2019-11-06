import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import error from './error.js'
import jwt from './jwt.js'
import { IS_DEV } from '../utils/env.js'

export default app => {
  if(IS_DEV) {
    app.use(logger())
  }

  app.use(error())
  app.use(bodyParser())
  app.use(jwt())
}
