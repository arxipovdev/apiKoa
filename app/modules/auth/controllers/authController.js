import _ from 'lodash'
import User from '../../users/models/user.js'
import jwtService from '../../../services/jwtService.js'

export default {
  async signUp(ctx) {
    const data = _.pick(ctx.request.body, User.createFields)
    const { _id } = await User.create(data)
    const user = await User.findOneWithPablicFields({ _id })

    ctx.body = { status: 201, data: user }
  },

  async signIn(ctx) {
    const { email, password } = ctx.request.body

    if(!email || !password) {
      ctx.status = 400
      ctx.body = { status: 400, message: 'Invalid data' }
      ctx.throw(400)
    }
    const user = await User.findOne({ email })

    if(!user) {
      ctx.status = 400
      ctx.body = { status: 400, message: 'User not found' }
      ctx.throw(400)
    }

    if(!user.comparePassword(password)) {
      ctx.status = 400
      ctx.body = { status: 400, message: 'Invalid data' }
      ctx.throw(400)
    }

    const token = jwtService.genToken({ email })

    ctx.body = { status: 200, data: token }
  }
}
