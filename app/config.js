import config from 'config'
import dotenv from 'dotenv'
import envs from './constants/env.js'
import { ENV } from './utils/env.js'

dotenv.config()

if(!envs[ENV]) {
  throw Error(`Unknown env ${ENV}`)
}

const PORT = process.env.PORT || config.get('port')
const MONGO_URI = process.env.MONGO_URI || config.get('mongo.uri')
const JWT_SECRET = process.env.JWT_SECRET || config.get('jwt.secret')

export { PORT, MONGO_URI, JWT_SECRET }
