// HABIT DATE TRACKING TABLE

module.exports = function (sequelize, DataTypes) {
  const HabitRecords = sequelize.define('HabitRecords', {
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    habitName: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    success: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  return HabitRecords
}