import { AuthController } from '../../controllers/AuthController'
import { Router } from 'express'

const authRouter = Router()

/**
 * @swagger
 * tags:
 *   - name: Auth
 *     description: Operações relacionadas à autenticação
 */

/**
 * @swagger
 * /auth/signin:
 *   post:
 *     summary: Autenticar usuário
 *     description: Endpoint para autenticar um usuário.
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Admin'
 *     responses:
 *       200:
 *         description: Autenticação bem-sucedida
 *       401:
 *         description: Falha na autenticação
 *     tags:
 *       - Auth
 */
authRouter.post('/signin', AuthController.signin)

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: Cadastrar novo usuário (Admin)
 *     description: Endpoint para cadastrar um novo usuário Admin.
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Admin'
 *     responses:
 *       201:
 *         description: Usuário Admin cadastrado com sucesso
 *       400:
 *         description: Falha no cadastro do usuário Admin
 *     tags:
 *       - Auth
 */
authRouter.post('/signup', AuthController.signup)

export { authRouter }
