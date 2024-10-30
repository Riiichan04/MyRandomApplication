const router = require('express').Router()
const database = require('../../config/configSQLServer')
const { establishMongoDbConnection } = require('../../config/configMongoDB')
router.post('/removeTodolist', (req, res) => {
    const { id, todolistId, isCompleted } = req.body
    try {
        establishMongoDbConnection([{
            collectionName: 'user_todolist',
            callback: async (collection) => {
                await collection.updateOne(
                    { '_id': parseInt(id) },
                    {
                        $pull: { "todolist": { "id": todolistId } },
                        $inc: { completedTodolist: (isCompleted) ? 1 : 0 }
                    })
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