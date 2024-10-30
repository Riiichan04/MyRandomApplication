const router = require('express').Router()
const database = require('../../config/configSQLServer')
const { calculateHowLongAgo } = require('../helper/calculateTime')
router.get('/loadNewsById', (req, res) => {
    const id = req.query.id
    database.query(`SELECT * FROM NEWS WHERE NewsID = '${id}' `)
        .then(result => {
            const formatResult = {
                id: result.recordset[0].NewsID,
                title: result.recordset[0].Title,
                thumbnail: result.recordset[0].ThumbnailUrl,
                content: preventHtmlContent(result.recordset[0].Content),
                uploadTime: calculateHowLongAgo(result.recordset[0].Uploadtime),
                isHotNews: result.recordset[0].HotNews
            }
            res.status(200).json(formatResult)
        })
        .catch(err => res.status(500).json(null))
})

module.exports = router

function preventHtmlContent(content) {
    //Để tìm tất cả thẻ gây vỡ web
    const regex = /(<|<\/)(html|head|body|!DOCTYPE|script|style|mark)>/g
    return content.replace(regex, "")
}