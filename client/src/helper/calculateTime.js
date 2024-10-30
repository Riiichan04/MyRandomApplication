//Chuyển từ dạng ISO
export default function calculateHowLongAgo(input) {
    
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

    //Rèn lại xử lý chuỗi
    // const formatTime = input.replace(/[^0-9-:]/g, " ").replace("000", "")
    // const day = formatTime.substring(formatTime.lastIndexOf("-") + 1, formatTime.indexOf(" "))
    // const month = formatTime.substring(formatTime.indexOf("-") + 1, formatTime.indexOf("-", formatTime.indexOf("-") + 1))
    // const year = formatTime.substring(0, formatTime.indexOf("-"))
    // const hour = formatTime.substring(formatTime.indexOf(" "), formatTime.indexOf(":"))
    // const minute = formatTime.substring(formatTime.indexOf(":") + 1, formatTime.lastIndexOf(":"))
    // const sec = formatTime.substring(formatTime.lastIndexOf(":") + 1)
    // const result = `${month} ${day} ${year} ${hour}:${minute}:${sec}`

    // let result = ""
    // if (month > 0) {
    //     result = month + " tháng trước"
    // }
    // else if (week > 0) {
    //     result = week + " tuần trước"
    // }
    // else if (day > 0) {
    //     result = day + " ngày trước"
    // }
    // else if (hour > 0) {
    //     result = hour + " giờ " + minute + " phút trước"
    // }
    // else if (minute > 0) {
    //     result = minute + " phút trước"
    // }
    // else if (second > 5) {
    //     result = second + " giây trước"
    // }
    // else result = "Vừa mới đăng"
    // return result