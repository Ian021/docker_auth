import { AuthController } from '../../controllers/AuthController'
import { Router } from 'express'

const authRouter = Router()

/*
    #swagger.start
    #swagger.tags = ['Auth']
    #swagger.path = '/auth/signin'
    #swagger.method = 'post'
    #swagger.end
*/
authRouter.post('/signin', AuthController.signin)

/*
    #swagger.start
    #swagger.tags = ['Auth']
    #swagger.path = '/auth/signup'
    #swagger.method = 'post'
    #swagger.end
*/
authRouter.post('/signup', AuthController.signup)

export { authRouter }
