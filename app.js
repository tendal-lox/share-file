const express = require("express")
const app = express()
const router = require('./controller/routes')
require('dotenv').config()
require('./service/dataBase')()

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))
app.use(router)

async function start () {
    try {
        app.listen(process.env.PORT || 4000)
        console.log('server connected')
    } catch (err) {
        console.error(err)
    }
}
start()