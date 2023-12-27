import { Request, Response } from 'express'
import { models } from '../models'

export const UsersController = {
  get: async (req: Request, res: Response) => {
    try {
      const user = await models.user.findAll()

      return res.status(200).send(user)
    } catch (e) {
      res.status(500).send(e)
    }
  },

  getById: async (req: Request, res: Response) => {
    const id = req.params.id

    try {
      const user = await models.user.findOne({ where: { id } })

      if (!user) {
        return res.status(404).send()
      }

      return res.status(200).send(user)
    } catch (e) {
      res.status(500).send(e)
    }
  },

  post: async (req: Request, res: Response) => {
    try {
      const user = await models.user.create(req.body)

      return res.status(200).send(user)
    } catch (e) {
      res.status(400).send(e)
    }
  },

  put: async (req: Request, res: Response) => {
    const id = req.params.id

    try {
      const user = await models.user.findOne({ where: { id } })

      if (!user) {
        return res.status(404).send()
      }

      const updatedUser = await models.user.update(user, req.body)

      return res.status(200).send(updatedUser)
    } catch (e) {
      res.status(400).send(e)
    }
  },

  delete: async (req: Request, res: Response) => {
    const id = req.params.id

    try {
      const user = await models.user.findOne({ where: { id } })

      if (!user) {
        return res.status(404).send()
      }

      await models.user.destroy(user)

      return res.status(204).send()
    } catch (e) {
      res.status(500).send(e)
    }
  },
}
