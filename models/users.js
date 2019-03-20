// USER DB TABLE
const bcrypt = require('bcryptjs')

module.exports = function (sequelize, DataTypes) {
  const Users = sequelize.define('Users', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  Users.prototype.validPassword = function(password) {
    return bcrypt.compare(password, this.password)
  }

  return Users
}