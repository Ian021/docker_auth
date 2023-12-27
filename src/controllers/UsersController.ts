import { Request, Response } from 'express'
import { models } from '../models'

export const UsersController = {
  get: async (req: Request, res: Response) => {
    try {
      const admin = req.user as any
      const adminId = admin?.dataValues?.id

      const user = await models.user.findAll({ where: { createdBy: adminId } })

      return res.status(200).send(user)
    } catch (e) {
      res.status(500).send(e)
    }
  },

  getById: async (req: Request, res: Response) => {
    try {
      const id = req.params.id

      const admin = req.user as any
      const adminId = admin?.dataValues?.id

      const user = await models.user.findOne({
        where: { id, createdBy: adminId },
      })

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
      const admin = req.user as any
      const adminId = admin?.dataValues?.id

      req.body.createdBy = adminId

      const user = await models.user.create(req.body)

      return res.status(200).send(user)
    } catch (e) {
      res.status(400).send(e)
    }
  },

  put: async (req: Request, res: Response) => {
    try {
      const id = req.params.id

      const admin = req.user as any
      const adminId = admin?.dataValues?.id

      req.body.updatedBy = adminId

      const user = await models.user.findOne({
        where: { id, createdBy: adminId },
      })

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
    try {
      const id = req.params.id

      const admin = req.user as any
      const adminId = admin?.dataValues?.id

      const user = await models.user.findOne({
        where: { id, createdBy: adminId },
      })

      if (!user) {
        return res.status(404).send()
      }

      user.deletedBy = adminId
      user.deletedAt = new Date()
      user.ativo = false

      user.save()

      return res.status(204).send()
    } catch (e) {
      res.status(500).send(e)
    }
  },
}
