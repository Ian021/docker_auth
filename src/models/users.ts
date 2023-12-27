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
        allowNull: false,
      },

      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      updatedBy: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },

      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      deletedBy: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },

      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: 'Users',
      paranoid: true,
      timestamps: true,
    }
  )

  return User
}

export { User }
