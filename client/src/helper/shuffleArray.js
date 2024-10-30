export default function shuffleArray(array, start, end) {
    if (end === undefined) end = array.length
    if (start === undefined) start = 0
    let subArray = array.slice(start, end)
    for (let i = subArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [subArray[i], subArray[j]] = [subArray[j], subArray[i]];
    }
    let resultArray = []
    if (start !== 0) {
        resultArray = array.slice(0, start)
    }
    resultArray.push(subArray)
    return resultArray
}
