import passport from 'passport'
import { UsersController } from '../../controllers/UsersController'
import { Router } from 'express'

const userRouter = Router()

userRouter.use(passport.authorize('jwt', { session: false }))

/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: Operações relacionadas a usuários
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obter todos os usuários
 *     description: Retorna os usuários que você cadastrou com o seu login
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *     tags:
 *       - Users
 */
userRouter.get('/', UsersController.get)

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Obter usuário por ID
 *     description: Retorna um usuário, cadastrado por você, buscado por ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID do usuário a ser obtido
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detalhes do usuário
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Usuário não encontrado
 *     tags:
 *       - Users
 */
userRouter.get('/:id', UsersController.getById)

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Criar usuário
 *     description: Cria um novo usuário e retorna o usuário criado.
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Objeto do usuário a ser criado
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *     tags:
 *       - Users
 */
userRouter.post('/', UsersController.post)

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Atualizar usuário por ID
 *     description: Atualiza informações de um usuário criado por você.
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID do usuário a ser atualizado
 *         required: true
 *         schema:
 *           type: integer
 *       - in: body
 *         name: body
 *         description: Objeto do usuário com as informações atualizadas
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Usuário não encontrado
 *     tags:
 *       - Users
 */
userRouter.put('/:id', UsersController.put)

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Excluir usuário por ID
 *     description: Endpoint para excluir um usuário criado por você.
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID do usuário a ser excluído
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Usuário excluído com sucesso
 *       404:
 *         description: Usuário não encontrado
 *     tags:
 *       - Users
 */
userRouter.delete('/:id', UsersController.delete)

export { userRouter }
