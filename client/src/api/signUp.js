export default async function handleSignUp(username, nickname, email, password, confirmPasswd) {
    for (let arg of arguments) {
        if (arg === "") {
            return "Chưa nhập đủ thông tin";
        }
    }
    if (password !== confirmPasswd) {
        return "Mật khẩu và xác nhận mật khẩu không khớp!"
    }
    else return await fetch('http://127.0.0.1:3110/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, nickname, email, password })
    }).then(response => {
        if (response.ok) {
            return "Bạn đã đăng ký thành công"
        }
        else if (response.status === 500) {
            return "Không đăng ký được do trùng email hoặc tên tài khoản"
        }
        else return "Hệ thống lỗi ùi, chờ xíu nha"

    })
}