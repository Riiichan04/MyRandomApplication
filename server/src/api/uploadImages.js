const router = require('express').Router()
const database = require('../../config/configSQLServer')
router.post('/uploadImages', (req, res) => {
    const { title, url } = req.body
    const date = new Date()
    const uploadtime = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    const query = `EXEC dbo.addImage @Title = N'${title}', @Imageurl = N'${url}', @Uploadtime = '${uploadtime}'`
    database.query(query)
        .then(result => {
            res.status(200).json({ result: true })
        })
        .catch(err => res.status(500).json({ result: false }))
})

module.exports = router