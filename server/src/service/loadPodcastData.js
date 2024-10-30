const router = require('express').Router()
const { response } = require('express')
const fetch = require('node-fetch')
require('dotenv').config({ path: "./config/.env" })
let listAvailablePodcast = ["4kYCRYJ3yK5DQbP5tbfZby", "434ZpirtxvKZmW3yWICCsR", "3bw3W59a83518ciCd3ehZV", "6w8qWe0kjgHEHSWDSDGoLW"]
listAvailablePodcast = listAvailablePodcast.map((ele, index) => (index < listAvailablePodcast.length - 1) ? ele + "," : ele)

router.get('/service/loadListPodcast', async (req, res) => {
    const market = "VI"
    const listIds = "".concat(...listAvailablePodcast)
    try {
        const authorize = await fetch("http://localhost:3110/api/service/spotify")
        const authorizeData = await authorize.json()
        const url = `https://api.spotify.com/v1/shows/?market=${market}&ids=${listIds}`
        const podcastData = await fetch(url, {
            method: 'GET',
            headers: { 'Authorization': `${authorizeData.token_type} ${authorizeData.access_token}` }
        })
        const data = await podcastData.json()
        res.status(200).json(formatResultData(data.shows))
    }
    catch (err) {
        console.log(err)
        res.status(500).send(false)
    }
})

module.exports = router

const formatResultData = (data) => {
    return data.map(item => {
        return {
            name: item.name,
            description: item.description,
            url: `https://open.spotify.com/show/${item.id}`,
            publisher: item.publisher,
            episode: item.total_episode,
            images: item.images
        }
    })
}