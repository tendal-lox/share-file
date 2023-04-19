const {insertRecord, findById} = require('./dataBase')
const bcrypt = require('bcrypt')

module.exports.uploadFileFunction = async (req) => {
    const {path, originalname} = req.file
    const {password} = req.body
    objectData = {
        path: path,
        originalFileName: originalname
    }
    if (password !== null && password !== '') {
        const hashPass = bcrypt.hashSync(password, 10);
        objectData.password = hashPass
    }
    return insertRecord(objectData)
}

module.exports.getRecordFunction = async (req) => {
    return findById(req.params.id)
}

module.exports.handleDownload = async (req, res, data) => {
    const dbPass = data.password
    const {password} = req.body
    if (dbPass) {
        if (password == null) {
            res.render('password')
            return
        }
        const comparePassStatus = bcrypt.compareSync(password, dbPass)
        if(!comparePassStatus) {
            res.render('password')
            return
        }
    }
    res.download(data.path)
}