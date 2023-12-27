import bcrypt from 'bcrypt'
import { Sequelize } from 'sequelize'

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

      criadoPor: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },

      atualizadoPor: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },

      removidoPor: {
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
