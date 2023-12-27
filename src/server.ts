import express from 'express'

import { router } from './routes'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())

app.use(router)

export { app }
