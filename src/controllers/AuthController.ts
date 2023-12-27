import { Request, Response } from 'express'
import { models } from '../models'
import { sign } from 'jsonwebtoken'
import bcrypt from 'bcrypt'

function issueToken(username: string) {
  const options = {
    expiresIn: '1d',
  }

  const payload = {
    sub: username,
    iat: Date.now(),
  }

  const signedToken = sign(payload, process.env.AUTH_KEY as string, options)

  return {
    token: 'Bearer ' + signedToken,
    expiresIn: options.expiresIn,
    username,
  }
}

function verifyPassword(user: any, password: string) {
  return bcrypt.compareSync(password, user.password)
}

export const AuthController = {
  signin: async (req: Request, res: Response) => {
    console.log(req.body, typeof req.body)

    const username = req.body.username
    const password = req.body.password

    try {
      const admin = await models.admin.findOne({ where: { username } })

      if (!admin) {
        return res.status(401).send({ message: 'Usuário não cadastrado' })
      }

      const isValid = verifyPassword(admin, password)

      if (!isValid) {
        return res.status(401).send({ message: 'Senha incorreta' })
      }

      const token = issueToken(username)

      return res.status(200).send(token)
    } catch (e) {
      res.status(400).send(e)
    }
  },

  signup: async (req: Request, res: Response) => {
    const username = req.body.username
    const password = req.body.password

    try {
      const exists = await models.admin.findOne({ where: { username } })

      if (exists) {
        return res.status(409).send({ message: 'Usuário já existe' })
      }

      await models.admin.create({ username, password })

      const tokenObj = issueToken(username)

      return res.status(200).send(tokenObj)
    } catch (e) {
      res.status(400).send(e)
    }
  },
}
