import { MONGO_URI } from '../config.js'
import mongodbConnector from './mongodbConnector.js'
import server from '../server.js'

async function connectorsInit() {
  try {
    await mongodbConnector(MONGO_URI)
  } catch (error) {
    server.close()
    console.log(error)
  }
}

export { mongodbConnector }
export default connectorsInit
