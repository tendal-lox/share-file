const mongoose = require('mongoose')
const shareFileModel = require('../mongooseModel/model')

module.exports = async function DBConnection () {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log('dataBase connected')
    } catch (err) {
        console.error(err)
    }
}

module.exports.insertRecord = async (objectData) => {
    return new shareFileModel(objectData).save()
}

module.exports.findById = async (id) => {
    return shareFileModel.findById(id)
}