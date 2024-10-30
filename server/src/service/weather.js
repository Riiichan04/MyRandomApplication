const router = require('express').Router()
const fetch = require('node-fetch')
require('dotenv').config({ path: "./config/.env" })
const weatherCache = require('../../data/cache/weather.json')
const fs = require('fs')
const path = require('path')

router.get('/service/weather', async (req, res) => {
    const location = req.query.location
    const lang = req.query.lang
    const date = new Date()
    const uploadTime = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    const cacheData = weatherCache.find(data =>
        data.location === location && convertTimeToMilisec(uploadTime) - convertTimeToMilisec(data.request_time) <= 60 * 60 * 1000)
    if (cacheData !== undefined) {
        res.status(200).json(cacheData)
    }
    else {
        const index = indexOfByLocation(location)
        return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.OPEN_WEATHER}&lang=${lang}&units=metric`)
            .then(response => {
                if (response.ok) return response.json()
                else throw new Error("Fetch lỗi ùiiii :<")
            })
            .then(result => {
                result.request_time = uploadTime
                result.location = location

                const formatedResult = {
                    location: result.name,
                    temp: result.main.temp,
                    temp_feel_like: result.main.feels_like,
                    humidity: result.main.humidity,
                    weather: result.weather[0].description.charAt(0).toUpperCase() + result.weather[0].description.slice(1),
                    request_time: result.request_time
                }

                return formatedResult
            })
            .then(result => {
                //Replace thông tin dựa theo location để giảm dung lượng nhớ của server. => Không hỗ trợ lịch sử lưu trữ thời tiết
                weatherCache[index] = result
                fs.writeFileSync(
                    path.join(path.dirname(path.dirname(__dirname)), "/data/cache/weather.json"), JSON.stringify(weatherCache, null, 3))
               
                res.status(200).json(result)
            })
            .catch(err => res.status(500).json(false))
    }

})

module.exports = router

function convertTimeToMilisec(input) {
    const day = input.substring(0, input.indexOf("-"))
    const month = input.substring(input.indexOf("-") + 1, input.indexOf("-", input.indexOf("-") + 1))
    const regex = new RegExp(`(?!${month}).*${month}`)
    const result = input.replace(day, month).replace(regex, "-" + day).replace(/-/g, " ")
    return Date.parse(result)
}

function indexOfByLocation(location) {
    let index = 0
    for (const data of weatherCache) {
        if (data.location === location) {
            return index
        }
        else index++
    }
    return -1
}