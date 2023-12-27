import passport from 'passport'
import { UsersController } from '../../controllers/UsersController'
import { Router } from 'express'

const userRouter = Router()

userRouter.use(passport.authorize('jwt', { session: false }))

/*
    #swagger.start
    #swagger.tags = ['Users']
    #swagger.path = '/users/'
    #swagger.method = 'get'
    #swagger.end
*/
userRouter.get('/', UsersController.get)

/*
    #swagger.start
    #swagger.tags = ['Users']
    #swagger.path = '/users/{id}'
    #swagger.method = 'get'
    #swagger.end
*/
userRouter.get('/:id', UsersController.getById)

/*
    #swagger.start
    #swagger.tags = ['Users']
    #swagger.path = '/users/'
    #swagger.method = 'post'
    #swagger.end
*/
userRouter.post('/', UsersController.post)

/*
    #swagger.start
    #swagger.tags = ['Users']
    #swagger.path = '/users/{id}'
    #swagger.method = 'put'
    #swagger.end
*/
userRouter.put('/:id', UsersController.put)

/*
    #swagger.start
    #swagger.tags = ['Users']
    #swagger.path = '/users/{id}'
    #swagger.method = 'delete'
    #swagger.end
*/
userRouter.delete('/:id', UsersController.delete)

export { userRouter }
