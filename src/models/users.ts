import bcrypt from 'bcrypt'
import { Sequelize } from 'sequelize'

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         cpf:
 *           type: string
 *         nome:
 *           type: string
 *         nascimento:
 *           type: string
 *           format: date
 *         endereco:
 *           type: string
 *         ativo:
 *           type: boolean
 *         createdBy:
 *           type: integer
 *         updatedBy:
 *           type: integer
 *         removedBy:
 *           type: integer
 */

const User = (
  sequelize: Sequelize,
  DataTypes: typeof import('sequelize/types/data-types')
) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      cpf: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      //

      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nascimento: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endereco: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      //
      ativo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },

      createdBy: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },

      updatedBy: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },

      removedBy: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
    },
    {
      tableName: 'Users',
      hooks: {
        beforeCreate: (user: any) => {
          const salt = bcrypt.genSaltSync()
          user.password = bcrypt.hashSync(user.password, salt)
        },
      },
      paranoid: true,
      timestamps: true,
    }
  )

  return User
}

export { User }
