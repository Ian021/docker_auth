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
      req.body.updatedBy = adminId

      console.log(req.body)

      const user = await models.user.create(req.body)

      return res.status(200).send(user)
    } catch (e) {
      console.log(e)
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

      user.update(req.body)

      return res.status(200).send(user)
    } catch (e) {
      res.status(400).send(e)
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      const id = req.params.id

      const admin = req.user as any
      const adminId = admin?.dataValues?.id

      const user = (await models.user.findOne({
        where: { id, createdBy: adminId },
      })) as any

      if (!user) {
        return res.status(404).send()
      }

      user.deletedBy = adminId
      user.deletedAt = new Date()
      user.ativo = false

      user.save()
      user.destroy()

      return res.status(204).send()
    } catch (e) {
      res.status(500).send(e)
    }
  },
}
