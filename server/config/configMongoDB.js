const mongoDB = require('mongodb')
const url = 'mongodb://localhost:27017/my_random_application'

const client = new mongoDB.MongoClient(url)
const dbName = 'my_random_application'

/**
 * @typedef {Object} MongoDBCollectionOperator
 * @property {String} collectionName
 * @property {any} callback
 */

async function connectToMongoDb(dbName) {
    await client.connect()
    console.log("Đã kết nối thành công đến MongoDB ở port 27017")
    return client.db(dbName)
}

/**
 * Create a connection to MongoDB and do the action
 * @param {[MongoDBCollectionOperator]} listCollectionOperator - List of collection name and callback to use
 */
function establishMongoDbConnection(listCollectionOperator) {
    connectToMongoDb(dbName)
        .then(async db => {
            const session = client.startSession()
            session.startTransaction()
            await Promise.all(listCollectionOperator.map(ele => ele.callback(db.collection(ele.collectionName))))
                .then(async () => {
                    await session.commitTransaction()
                    await session.endSession()
                })
                .catch(async err => await session.abortTransaction())
        })
        .catch(console.error)
}

/**
 * 
 * @param {[String]} listCollectionName - List collection name
 * @param {*} callback - Callback for the whole list collection
 */
function establishMongoDbConnectionWithSameAction(listCollectionName, callback) {
    connectToMongoDb(dbName)
        .then(db => {
            listCollectionName.forEach(async collectionName => {
                const collection = db.collection(collectionName)
                await callback(collection)
            })
            return db
        })
        .catch(console.error)
        .finally(() => client.close())
}

module.exports = { establishMongoDbConnection, establishMongoDbConnectionWithSameAction }
