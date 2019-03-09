const db = require('../models')

module.exports = {
  findAll: function (req, res) {
    db.habitRecords.findAll({})
      .then(function(allHabitRecords) {
        res.json(allHabitRecords)
      })
  },

  create: function (req, res) {
    db.habitRecords.create(req.body)
      .then(function(newHabitRecord) {
        res.json(newHabitRecord)
      })
  },

  findHabitRecordsByUserId: function (req, res) {
    db.habitRecords.findAll({
      where: {
        userId: req.params.userid
      }
    })
      .then(function(userHabitRecords) {
        res.json(userHabitRecords)
      })
  }
}