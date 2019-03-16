// USERS ASSOCIATED HABITS TABLE

module.exports = function (sequelize, DataTypes) {
  const UserHabits = sequelize.define('UserHabits', {
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    habitName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  return UserHabits
}