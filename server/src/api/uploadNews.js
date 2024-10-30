const router = require('express').Router()
const database = require('../../config/configSQLServer')
router.post('/uploadNews', (req, res) => {
    const { title, content, url, isHotNews } = req.body
    const date = new Date()
    const uploadtime = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    database.query(`EXEC dbo.addNews @Title = N'${title}', @Content = N'${formatNoteContent(content)}', @ThumbnailUrl = N'${url}', @Uploadtime = '${uploadtime}', @HotNews = '${isHotNews}'`)
        .then(result => {
            res.status(200).json({ result: true })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ result: false })
        })
})

module.exports = router

const formatNoteContent = (input) => {
    const listSpecialChar = new Map()
    listSpecialChar.set("**", "b")
    listSpecialChar.set("##", "i")
    listSpecialChar.set("~~", "s")
    listSpecialChar.set("--", "ins")
    listSpecialChar.set("<<", "sub")
    listSpecialChar.set(">>", "sup")
    listSpecialChar.set("`", "code")

    const stack = []
    for (let i = 1; i < input.length; i++) {
        const previous = input.charAt(i - 1)
        const current = input.charAt(i)
        const key = previous + current

        if (listSpecialChar.get(key) !== undefined && stack.length !== 0) {
            const peek = stack[stack.length - 1]
            if (peek === key) {
                input = input.replace(key, `<${listSpecialChar.get(key)}>`).replace(key, `</${listSpecialChar.get(key)}>`)
                stack.pop()
            }
            else stack.push(key)
        }
        else {
            if (listSpecialChar.get(key) !== undefined) stack.push(key)
        }
    }
    return input
}