// USERS ASSOCIATED HABITS TABLE

module.exports = function (sequelize, DataTypes) {
  const UserHabits = sequelize.define('UserHabits', {
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    habitID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })

  return UserHabits
}