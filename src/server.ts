import express from 'express'
import { router } from './routes'
import passport from 'passport'

import passportConfig from './passportConfig'

passportConfig(passport)

const app = express()

app.use(express.json())

app.use(router)

export { app }
