import { Sequelize, DataTypes } from 'sequelize'
import { User } from './users'

const sequelize = new Sequelize('test_db', 'root', 'ian123', {
  host: '172.16.238.10',
  dialect: 'mysql',
  port: 3306,
})

const models = {
  user: User(sequelize, DataTypes),
}

sequelize.sync({ force: true })

export { models, sequelize }
