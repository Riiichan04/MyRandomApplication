const router = require('express').Router()
const database = require('../../config/configSQLServer')
router.post('/signIn', (req, res) => {
    const { username, password } = req.body
    const query = `SELECT * FROM ACCOUNT WHERE Username LIKE '${username}' AND Passwd LIKE '${password}'`
    database.query(query, (err, result) => {
        if (err) {
            console.error(err)
            res.status(500).json({ error: "CSDL lỗi ời!!!" })
            return
        }
        if (result.recordset.length === 0) {
            res.status(401).json({ avatar: null, nickname: null, id: null })
        }
        else {
            res.status(200).json({ avatar: `https://res.cloudinary.com/dh90ponfw/image/upload/avatar/${result.recordset[0].ID}.jpg`, nickname: result.recordset[0].Nickname, id: result.recordset[0].ID })
        }
    })
})

module.exports = router