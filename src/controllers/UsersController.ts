import { Request, Response } from 'express'
import { models } from '../models'

export const UsersController = {
  get: async (req: Request, res: Response) => {
    try {
      const user = await models.user.findAll()

      res.status(200).send(user)
    } catch (e) {
      res.status(500).send(e)
    }
  },

  getById: async (req: Request, res: Response) => {
    const id = req.params.id

    try {
      const user = await models.user.findOne({ where: { id } })

      if (!user) {
        res.status(404).send()
      }

      res.status(200).send(user)
    } catch (e) {
      res.status(500).send(e)
    }
  },

  post: async (req: Request, res: Response) => {
    try {
      const user = await models.user.create(req.body)

      res.status(200).send(user)
    } catch (e) {
      res.status(400).send(e)
    }
  },

  put: async (req: Request, res: Response) => {
    const id = req.params.id

    try {
      const user = await models.user.findOne({ where: { id } })

      if (!user) {
        res.status(404).send()
      }

      const updatedUser = await models.user.update(user, req.body)

      res.status(200).send(updatedUser)
    } catch (e) {
      res.status(400).send(e)
    }
  },

  delete: async (req: Request, res: Response) => {
    const id = req.params.id

    try {
      const user = await models.user.findOne({ where: { id } })

      if (!user) {
        res.status(404).send()
      }

      await models.user.destroy(user)

      res.status(204).send()
    } catch (e) {
      res.status(500).send(e)
    }
  },
}
