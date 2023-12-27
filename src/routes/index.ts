import { Router } from 'express'
import { checkRouter } from './check'
import { userRouter } from './users'
import { authRouter } from './auth'

const router = Router()

router.use('/check', checkRouter)
router.use('/auth', authRouter)
router.use('/users', userRouter)

export { router }
