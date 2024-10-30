const router = require('express').Router()
const { establishMongoDbConnection } = require('../../config/configMongoDB')
router.post('/removeNote', (req, res) => {
    const { id, noteId } = req.body
    try {
        establishMongoDbConnection([{
            collectionName: 'user_note',
            callback: async (collection) => {
                await collection.updateOne({ '_id': parseInt(id) }, { $pull: { "note": { "noteID": noteId + "" } } })
                res.status(200).json(true)
            }

        }])
    }
    catch (err) {
        console.log(err)
        res.status(500).json(false)
    }
})

module.exports = router