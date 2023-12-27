import swaggerUi from 'swagger-ui-express'

import { app } from './server'
import swaggerSpec from './swagger'

const port = process.env.PORT

app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
