const db = require('../models')

module.exports = {
  findAll: function (req, res) {
    console.log(`inside api/habits findAll`)
    db.Habits.findAll({})
      .then(function(allHabits) {
        res.json(allHabits)
      })
  },
  create: function (req, res) {
    db.Habits.create(req.body)
      .then(function(newHabit) {
        res.json(newHabit)
      })
  },
  findById: function (req, res) {
    // IS THIS NEEDED?
  }
}