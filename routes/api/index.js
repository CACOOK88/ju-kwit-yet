const router = require('express').Router()
const usersRoutes = require('./users')
const habitsRoutes = require('./habits')
const userHabitsRoutes = require('./userHabits')
const habitRecordsRoutes = require('./habitRecords')


router.use('/users', usersRoutes)
router.use('/habits', habitsRoutes)
router.use('/userhabits', userHabitsRoutes)
router.use('/habitrecords', habitRecordsRoutes)

module.exports = router