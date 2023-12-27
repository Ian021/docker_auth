import { Sequelize, DataTypes } from 'sequelize'
import { User } from './users'
import { Admin } from './admin'

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE as string,
  process.env.MYSQL_USERNAME as string,
  process.env.MYSQL_ROOT_PASSWORD as string,
  {
    host: process.env.MYSQL_HOST as string,
    dialect: 'mysql',
    port: process.env.MYSQL_PORT as any,
  }
)

const models = {
  user: User(sequelize, DataTypes),
  admin: Admin(sequelize, DataTypes),
}

sequelize.sync({ force: true })

export { models, sequelize }
