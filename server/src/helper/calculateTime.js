//Chuyển từ dạng ISO
function calculateHowLongAgo(input) {
    const inputTime = new Date(input).getTime()
    const time_ago = Date.now() - inputTime
    const second = Math.floor(time_ago / 1000 % 60)
    const minute = Math.floor(time_ago / 60000 % 60)
    const hour = Math.floor(time_ago / (60000 * 60))
    const day = Math.floor(time_ago / (24 * 60 * 60000))
    const week = Math.floor(day / 7)
    const month = new Date(Date.now() - inputTime).getMonth()

    const processAction = () => {
        const byMonth = () => month + " tháng trước"
        const byWeek = () => week + " tuần trước"
        const byDay = () => day + " ngày trước"
        const byHourAndMinute = () => hour + " giờ " + minute + " phút trước"
        const byMinute = () => minute + " phút trước"
        const bySecond = () => second + " giây trước"
        const byElse = () => "Vừa mới"

        const conditionList = [
            [month > 0, byMonth()],
            [month === 0 && week > 0, byWeek()],
            [week === 0 && day > 0, byDay()],
            [day === 0 && hour > 0, byHourAndMinute()],
            [hour === 0 && minute > 0, byMinute()],
            [minute === 0 && second > 5, bySecond()],
            [second <= 5, byElse()]
        ]

        return conditionList.find(([key, value]) => key)[1]
    }
    return processAction()
}

module.exports = { calculateHowLongAgo }