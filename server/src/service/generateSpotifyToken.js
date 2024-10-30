const router = require('express').Router()
const { response } = require('express')
const fetch = require('node-fetch')
require('dotenv').config({ path: "./config/.env" })
let authorizationCacheData = null


router.get('/service/spotify', async (req, res) => {
    try {
        if (!authorizationCacheData || Date.now() - authorizationCacheData.reqTime >= 3600 * 1000) {
            //Cách 2: Dùng POST:
            //Lý do: Tăng tính bảo mật hơn
            //Thực hiện: Đẩy token vào trong req.body
            const newTokenRequest = await fetch(`https://accounts.spotify.com/api/token?grant_type=client_credentials&client_id=${process.env.SPOTIFY_ID}&client_secret=${process.env.SPOTIFY_SECRET}`, {
                method: 'POSt',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
            if (newTokenRequest.ok) {
                let json = await newTokenRequest.json()
                json.reqTime = Date.now()
                authorizationCacheData = json
            }
        }
        res.status(200).json(authorizationCacheData)
    }
    catch (err) { res.status(500).json(false) }
})


module.exports = router