const router = require('express').Router()
const userHabitsController = require('../../controllers/userHabitsController')

// MATCHES WITH /api/userhabits/
router.route('/')
  .get(userHabitsController.findAll)

// MATCHES WITH /api/userhabits/:id
router.route('/:id')
  .get(userHabitsController.findById)
  .post(userHabitsController.create)
  .delete(userHabitsController.remove)

module.exports = router