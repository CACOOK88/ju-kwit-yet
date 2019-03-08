// HABIT LIST TABLE

module.exports = function (sequelize, DataTypes) {
  const Habits = sequelize.define('Habits', {
    habitName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  return Habits
}