const router = require('express').Router()
const database = require('../../config/configSQLServer')
router.get('/loadImages', (req, res) => {
    //To do: Cần viết proc mới trong này
    database.query(`SELECT * FROM IMAGES `)
        .then(result => {
            const start = req.query.start
            const amount = (req.query.amount === "max") ? result.recordset.length : req.query.amount
            const outputData = result.recordset.slice(start, (start + amount >= result.recordset.length) ? result.recordset.length : start + amount)
            const formatData = outputData.map(data => {
                return {
                    id: data.ImageID,
                    title: data.Title,
                    url: data.ImageUrl
                }
            })
            res.status(200).json(formatData)
        })
        .catch(err => res.status(500).json(null))
})

module.exports = router