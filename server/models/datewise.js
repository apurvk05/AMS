const mongoose = require('mongoose')
const { Schema } = mongoose

const datewiseSchema = new Schema({
    student: {
        type: Schema.Types.ObjectId,
        ref: 'student'
    },
    subject: {
        type: Schema.Types.ObjectId,
        ref: 'subject'
    },
    date: {
        type: String,
        required: true
    },
    status: {
        type: String,
    }

})

module.exports = mongoose.model('datewise', datewiseSchema)
