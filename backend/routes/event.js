const express = require('express')
const router = express.Router()

const { create, readSlots, readEvents } = require('../controllers/event')

router.get("/event/slots", readSlots)
router.get("/events", readEvents)
router.post("/event/create", create)

module.exports = router;