const mongoose = require('mongoose')

const reminderSchema = new mongoose.Schema({
    dateTime : {type: Date, required: true},
    message  : {type: String, required: true},
    methods : {
        type: [String],
        enum: ['sms','email'],
        required: true 
    },
    createdAt: {type: Date, default: Date.Now}
})

module.exports = mongoose.model('Reminder', reminderSchema)