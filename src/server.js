const routes = require('./routes')

routes.listen(3000, () => {
  console.log(`Server: http://localhost:3000`)
})