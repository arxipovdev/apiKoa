import Router from 'koa-router'
import authController from './controllers/authController.js'
import checkUser from '../../handlers/checkUser.js'

const router = new Router({ prefix: '/auth' })

router.post('/signup', authController.signUp)
router.post('/signin', authController.signIn)
router.post('/private', checkUser(), (ctx) => {
  ctx.body = ctx.user
})

export default router.routes()
