import { Router } from 'express'
import { sequelize } from '../../models'

const checkRouter = Router()

/**
 * @swagger
 * tags:
 *   - name: Check
 *     description: Operações relacionadas a verificação de status
 */

/**
 * @swagger
 * /check:
 *   get:
 *     summary: Verificar status
 *     description: Endpoint para verificar o status da API.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Status OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *     tags:
 *       - Check
 */
checkRouter.get('/', (req, res) => {
  res.send({ status: 'OK' })
})

/**
 * @swagger
 * /check/db:
 *   get:
 *     summary: Verificar status do banco de dados
 *     description: Endpoint para verificar o status da conexão com o banco de dados.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Conexão com o banco de dados estabelecida com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Conexão estabelecida com sucesso
 *       500:
 *         description: Falha na conexão com o banco de dados
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Não foi possível se conectar com o banco de dados
 *                 error:
 *                   type: object
 *                   example: {}
 *     tags:
 *       - Check
 */
checkRouter.get('/db', async (req, res) => {
  try {
    await sequelize.authenticate()
    res.status(200).send({ message: 'Conexão estabelecida com sucesso' })
  } catch (error) {
    res.status(500).send({
      message: 'Não foi possível se conectar com o banco de dados:',
      error,
    })
  }
})

export { checkRouter }
