const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now 
    },
    timeZone: {
        type: String,
        required: true,
        maxlength: 2000  
    },
    slot: {
        type: String
    }
},
{ timestamps: true }
)

module.exports = mongoose.model('Event', eventSchema);