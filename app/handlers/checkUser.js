export default () => async(ctx, next) => {
  if(!ctx.user) {
    ctx.status = 403
    ctx.body = { status: 403, message: 'Forbidden' }
    ctx.throw(403)
  }

  await next()
}
