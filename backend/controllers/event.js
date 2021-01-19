const moment = require('moment')

const Event = require('../models/event');
const slots = require('../config/constant');

exports.create = (req, res) => {
    const event = new Event(req.body);
    event.save((err, data) => {
        if(err) {
            return res.status(400)
        }
        res.json({ data })
    })
}

exports.readSlots = (req, res) => {
    let { date } = req.query
    Event.find({
     date: {
     $gte: moment(date).startOf('day'),
     $lte: moment(date).endOf('day')
    }
    }, (err, data) => {
        if(err) {
            return res.status(400)
        }
        if(data === []) {
            res.json(slots)
        }
        let slot = data.map(d => d.slot)
        slot = slots.slots.filter((d) =>  slot.indexOf(d) < 0 )
        res.json({ slot })
    })
}

exports.readEvents = (req, res) => {
    let { date } = req.query
    Event.find({
     date: {
        $gte: moment(date).startOf('day'),
        $lte: moment(date).endOf('day')
    }
    }, (err, data) => {
        if(err) {
            return res.status(400)
        }
        let slot = data.map(d => d.slot)
        res.json({ slot })
    })
 }