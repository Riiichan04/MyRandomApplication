const router = require('express').Router()
const database = require('../../config/configSQLServer')
const { establishMongoDbConnection } = require('../../config/configMongoDB')
router.get('/loadTodolist', (req, res) => {
    const id = req.query.id
    try {
        establishMongoDbConnection([{
            collectionName: 'user_todolist',
            callback: async (collection) => {
                const document = await collection.find({ _id: parseInt(id) }).toArray()
                const todolist = document[0].todolist
                const reversedTodolist = todolist.reverse()
                const formattedTodolist = reversedTodolist.map(task => {
                    return {
                        todolistId: task.id,
                        title: preventHtmlContent(task.title),
                        content: preventHtmlContent(task.content),
                        attachments: task.attachments,
                        deadline: task.deadline,
                    }
                })
                res.status(200).json({listTodolist: formattedTodolist, completedTodolist: document[0].completedTodolist})
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