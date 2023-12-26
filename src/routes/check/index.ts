import { Router } from 'express'

const checkRouter = Router()

checkRouter.get('/', (req, res) => {
  res.send({ status: 'OK' })
})

export { checkRouter }
