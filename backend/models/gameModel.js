const mongoose = require('mongoose')

const gameSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true,'Please add a text value']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Game',gameSchema)