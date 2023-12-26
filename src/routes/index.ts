import { Router } from 'express'
import { checkRouter } from './check'

const router = Router()

router.use('/check', checkRouter)

export { router }
