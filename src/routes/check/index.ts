import { Router } from 'express'
import { sequelize } from '../../models'

const checkRouter = Router()

checkRouter.get('/', (req, res) => {
  res.send({ status: 'OK' })
})

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
