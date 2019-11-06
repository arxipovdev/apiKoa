import mongoose from 'mongoose'

mongoose.Promise = Promise

export default (mongoUri) => {
  if(!mongoUri) {
    throw Error('Mongo uri is undefined!')
  }

  return new Promise((resolve, reject) => {
    const config = {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    }
    mongoose.connect(mongoUri, config)
      .then(mongodb => {
        resolve(mongodb)
        console.log('Mongo db connected')
      })
  })
}
