const router = require('express').Router()
const database = require('../../config/configSQLServer')
router.get('/query', (req, res) => {
    if (req.body != null) {
        const { query } = req.body
        database.query(query).then(result => res.send(result.recordset)).catch(err => console.log("Query lỗi rồi!!!"))
    }
})

module.exports = router