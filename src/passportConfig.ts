import {
  Strategy,
  ExtractJwt,
  StrategyOptions,
  VerifiedCallback,
} from 'passport-jwt'
import { models } from './models'
import { PassportStatic } from 'passport'
import { Request } from 'express'
import { JwtPayload } from 'jsonwebtoken'

const options: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.AUTH_KEY,
  passReqToCallback: true,
}

export default function (passport: PassportStatic) {
  passport.use(
    new Strategy(
      options,
      async (req: Request, jwt_payload: JwtPayload, done: VerifiedCallback) => {
        try {
          const admin = await models.admin.findOne({
            where: { username: jwt_payload.sub },
          })

          if (!admin) {
            return done(false, false)
          }

          req.user = admin
          return done(false, admin)
        } catch (e) {
          return done(e, false)
        }
      }
    )
  )
}
