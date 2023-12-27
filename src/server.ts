import express from 'express'
import { router } from './routes'
import bodyParser from 'body-parser'
import passport from 'passport'

import passportConfig from './passportConfig'

passportConfig(passport)

const app = express()

app.use(bodyParser.json())

app.use(router)

export { app }
