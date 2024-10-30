const router = require('express').Router()
const database = require('../../config/configSQLServer')
const { establishMongoDbConnection } = require('../../config/configMongoDB')
router.post('/uploadTodolist', (req, res) => {
    const { id, title, content, attachments, deadline, todolistId } = req.body
    try {
        establishMongoDbConnection([{
            collectionName: 'user_todolist',
            callback: async (collection) => {
                const inputTodolist = {
                    "id": todolistId,
                    "title": (title) ? title : null,
                    "content": content,
                    "attachments": attachments,
                    "deadline": (deadline) ? deadline : null
                }
                await collection.updateOne({ '_id': parseInt(id) }, { $push: { "todolist": inputTodolist } })
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