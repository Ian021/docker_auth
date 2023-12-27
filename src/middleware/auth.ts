import passport from 'passport'
import { Strategy, ExtractJwt } from 'passport-jwt'
import { models } from '../models'

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.AUTH_KEY,
}

passport.use(
  new Strategy(options, async (jwt_payload, done) => {
    try {
      const user = await models.user.findOne({
        where: { cpf: jwt_payload.sub },
      })

      if (!user) {
        return done(null, false)
      }

      return done(null, user)
    } catch (e) {
      if (e) {
        return done(e, false)
      }
    }
  })
)
