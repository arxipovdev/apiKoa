import app from './app.js'
import { PORT } from './config.js'

const server = app.listen(PORT, error => {
  if(error) console.log(error)

  console.log(`Server running on port: ${PORT}`)
})

export default server
