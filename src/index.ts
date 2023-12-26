import swaggerUi from 'swagger-ui-express'

import { app } from './server'
import swaggerDocs from './swagger.json'

const port = 4000

app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
