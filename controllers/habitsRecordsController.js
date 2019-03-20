const db = require('../models')

module.exports = {
  findAll: function (req, res) {
    db.HabitRecords.findAll({})
      .then(function(allHabitRecords) {
        res.json(allHabitRecords)
      })
  },

  create: function (req, res) {
    console.log(`hit habit records controller function`)
    db.HabitRecords.create(req.body)
      .then(function(newHabitRecord) {
        res.json(newHabitRecord)
      })
  },

  findHabitRecordsByUserId: function (req, res) {
    db.HabitRecords.findAll({
      where: {
        userId: req.params.userid
      }
    })
      .then(function(userHabitRecords) {
        res.json(userHabitRecords)
      })
  },

  updateRecord: function(req, res) {
    db.HabitRecords.update({
      success: req.body.success
    }, {
      where: {
        userID: req.body.userId,
        habitName: req.body.habitName,
        date: req.body.date
      }
    })
      .then(function(updatedRecord) {
        res.json(updatedRecord)
      })
  },

  deleteRecords: function(req,res) {
    db.HabitRecords.destroy({
      where: {
        userID: req.query.userId,
        habitName: req.query.habitName
      }
    })
      .then(function(response) {
        res.json(response)
      })
  }
}