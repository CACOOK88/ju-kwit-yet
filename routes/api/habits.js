const router = require('express').Router()
const habitsController = require('../../controllers/habitsController')

//MATCHES WITH /api/habits
router.route('/')
  .get(habitsController.findAll)
  .post(habitsController.create)


  // DO WE NEED THIS?
// MATCHES WITH /api/habits/:id
router.route('/:id')
  .get(habitsController.findById)

  module.exports = router
  