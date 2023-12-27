import bcrypt from 'bcrypt'
import { Sequelize } from 'sequelize'

/**
 * @swagger
 * components:
 *   schemas:
 *     Admin:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         username:
 *           type: string
 *         password:
 *           type: string
 */

const Admin = (
  sequelize: Sequelize,
  DataTypes: typeof import('sequelize/types/data-types')
) => {
  const Admin = sequelize.define(
    'Admin',
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      //
    },
    {
      tableName: 'Admins',
      hooks: {
        beforeCreate: (user: any) => {
          const salt = bcrypt.genSaltSync()
          user.password = bcrypt.hashSync(user.password, salt)
        },
      },
      timestamps: false,
    }
  )

  return Admin
}

export { Admin }
