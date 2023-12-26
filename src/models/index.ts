import { Sequelize, DataTypes } from 'sequelize'

const sequelize = new Sequelize('test_db', 'root', 'ian123', {
  host: '172.16.238.10',
  dialect: 'mysql',
  port: 3306,
})

export { sequelize }
