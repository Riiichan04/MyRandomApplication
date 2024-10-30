const router = require('express').Router()
const database = require('../../config/configSQLServer')
const { calculateHowLongAgo } = require('../helper/calculateTime')
router.get('/loadNews', (req, res) => {
    database.query(`SELECT * FROM NEWS `)
        .then(result => {
            const start = req.query.start
            const amount = (req.query.amount === "max") ? result.recordset.length : req.query.amount
            const output = result.recordset.slice(start, (start + amount >= result.recordset.length) ? result.recordset.length : start + amount)
            const formattedJson = output.map(data => {
                return {
                    id: data.NewsID,
                    title: data.Title,
                    thumbnail: data.ThumbnailUrl,
                    content: data.Content,
                    uploadTime: calculateHowLongAgo(data.Uploadtime),
                    isHotNews: data.HotNews
                }
            })
            res.status(200).send(formattedJson)
        })
        .catch(err => res.status(500).json(null))
})

module.exports = router