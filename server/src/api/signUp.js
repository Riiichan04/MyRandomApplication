const router = require('express').Router()
const database = require('../../config/configSQLServer')
const cloudinary = require('../../config/configCloudinary')
const { establishMongoDbConnection } = require('../../config/configMongoDB')

router.post('/signUp', (req, res) => {
    const { username, nickname, email, password } = req.body
    const query = `
            DECLARE @NewAccountId varchar(100);
            EXEC dbo.createAccount '${username}', N'${nickname}', N'${email}', '${password}', @NewUserId = @NewAccountId OUTPUT;
            SELECT @NewAccountId AS ID;
        `
    database.query(query, async (err, result) => {
        if (err) {
            console.error(err)
            res.status(500).send({ result: false })
        }
        else {
            try {
                const id = result.recordset[0].ID
                await cloudinary.uploader.upload(
                    "https://res.cloudinary.com/dh90ponfw/image/upload/v1724888273/default_avatar.webp",
                    {
                        folder: "avatar",
                        public_id: id
                    })
                //Tạo document cho note và todolist
                const defaultUserNote = {
                    "_id": parseInt(id),
                    "note": []
                }
                const defaultUserTodolist = {
                    "_id": parseInt(id),
                    "todolist": [],
                    "completedTodolist": 0
                }

                establishMongoDbConnection([
                    {
                        collectionName: 'user_note',
                        callback: (collection) => {collection.insertMany([defaultUserNote])}
                    },
                    {
                        collectionName: 'user_todolist',
                        callback: (collection) => {collection.insertMany([defaultUserTodolist])}
                    }
                ])
                res.status(200).json(true)
            }
            catch (err) {
                res.status(500).json(false)
            }
        }
    })
})

module.exports = router