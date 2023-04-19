const mongoose = require('mongoose')

const shareFileModel = new mongoose.Schema({
    originalFileName: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    password: String
})

module.exports = mongoose.model('sharedfiles', shareFileModel)