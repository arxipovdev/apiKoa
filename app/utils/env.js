import envs from '../constants/env.js'

const ENV = process.env.NODE_ENV || 'development'
const IS_DEV = ENV === envs.development
const IS_PROD = ENV === envs.production

export { ENV, IS_DEV, IS_PROD }
