//File này chỉ dùng để viết function và test thử code
function formatNoteContent(input) {
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
            const peek = stack[stack.length-1]
            if (peek === key) {
                input = input.replace(key, `<${listSpecialChar.get(key)}>`).replace(key, `</${listSpecialChar.get(key)}>`)
                stack.pop()
            }
            else stack.push(key)
        }
        else if (listSpecialChar.get(key) !== undefined) stack.push(key)
    }
    return input
}
const string = "Đừng vội tin review sớm của Black Myth: Wukong"
const formatTitle = string.normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/!|@|%|\^|\*|\(|\)|\+|=|<|>|\?|\/|,|\.|:|;|'|"|&|#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, "")
            .replace(/\s+/g, "-")

const input = "Hôm nay tui code đc tính năng mới nè, **cho ký tự vào trong dấu** ** là tự viết đậm đó"
console.log(formatNoteContent(input))
console.log(formatTitle)
const path = require('path')
console.log()