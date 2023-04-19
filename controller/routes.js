const router = require('express').Router()
const {uploadFileFunction, getRecordFunction, handleDownload} = require('../service/routesFunction')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

router.get('/', (req, res) => {
    res.render('index')
})

router.post('/upload', upload.single('file'), async (req, res) => {
    const result = await uploadFileFunction(req)
    res.render('index', {fileLink: `${req.headers.origin}/file/${result.id}`})
})

router.get('/file/:id', async (req, res) => {
    const data = await getRecordFunction(req)
    handleDownload(req, res, data)
})

router.post('/file/:id', async (req, res) => {
    const data = await getRecordFunction(req)
    handleDownload(req, res, data)
})

module.exports = router