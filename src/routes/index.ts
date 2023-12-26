import { Router } from 'express'
import { checkRouter } from './check'
import { userRouter } from './users'

const router = Router()

router.use('/check', checkRouter)
router.use('/users', userRouter)

export { router }
