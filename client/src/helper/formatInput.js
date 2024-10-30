export default function formatInputContent(input) {
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