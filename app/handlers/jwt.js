import jwtService from '../services/jwtService.js'
import User from '../modules/users/models/user.js'

export default () => async(ctx, next) => {
  const { authorization } = ctx.headers

  if(authorization) {
    try {
      const { email } = jwtService.verify(authorization)

      ctx.user = await User.findOne({ email })
    } catch (error) {
      ctx.status = 401
      ctx.body = { status: 401, message: 'Invalid Token' }
      ctx.throw(401)
    }
  }

  await next()
}
