const router = require('express').Router()
const database = require('../../config/configSQLServer')
const { establishMongoDbConnection } = require('../../config/configMongoDB')
router.post('/uploadNote', (req, res) => {
    const { id, content, uploadtime, attachment, noteId } = req.body
    try {
        establishMongoDbConnection([{
            collectionName: 'user_note',
            callback: async (collection) => {
                //Aggerate framework
                //Lấy size của mảng:
                // const getNoteId = collection.aggregate([{
                    //     $match: {
                //         _id: parseInt(id)   //Tìm document có _id = id của user
                //     },
                //     $project: {
                    //         countNote: { $size: "$note" }   //Lấy size của trường note và đưa nó vào thuộc tính tên countNote
                //     }
                // }]).toArray()[0].countNote
                // const noteId = await getNoteId[0].countNote  //Lúc này, getNoteId có dạng: {"id": id, "countNote": countNote}
                const inputNote = {
                    "noteID": "" + noteId,
                    "content": content,
                    "uploadtime": uploadtime,
                    "attachments": []
                }
                await collection.updateOne({ '_id': parseInt(id) }, { $push: { "note": inputNote } })
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
