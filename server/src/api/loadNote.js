const router = require('express').Router()
const database = require('../../config/configSQLServer')
const { establishMongoDbConnection } = require('../../config/configMongoDB')
router.get('/loadNote', (req, res) => {
    const id = req.query.id
    try {
        establishMongoDbConnection([{
            collectionName: 'user_note',
            callback: async (collection) => {
                const document = await collection.find({ _id: parseInt(id) }).toArray()
                const noteList = document[0].note
                const reversedNoteList = noteList.reverse()
                const formattedNote = reversedNoteList.map(note => {
                    const uploadTimeToString = "" + note.uploadtime
                    const formatTime = uploadTimeToString.replace(/[^0-9-:]/g, " ").replace(/\s(?=\S*\s\S*$).*/g, "")
                    return { content: preventHtmlContent(note.content), upload_time: note.uploadtime, id: note.noteID }
                })
                res.status(200).json(formattedNote)
            }
        }])
    }
    catch (err) {
        console.log(err)
        res.status(500).json(false)
    }
})

module.exports = router

function preventHtmlContent(content) {
    //Để tìm tất cả thẻ gây vỡ web
    const regex = /(<|<\/)(html|head|body|!DOCTYPE|script|style|mark)>/g
    return content.replace(regex, "")
}