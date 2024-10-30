export default async function handleSignIn(username, password) {
    if (username !== "" && password !== "") {
        return await fetch('http://127.0.0.1:3110/api/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        }).then(response => {
            if (response.ok) {
                return response.json().then(data => {
                    if (data.avatar === null && data.nickname === null) {
                        return ""
                    }
                    else {
                        localStorage.setItem("id", data.id)
                        localStorage.setItem("username", username)
                        localStorage.setItem("avatar", data.avatar)
                        localStorage.setItem("nickname", data.nickname)
                        return null
                    }
                })
            }
            else {
                return "Bạn đã nhập sai tài khoản hoặc mật khẩu"
            }
        }).catch(err => {
            console.error(err)
            return "Hệ thống đang lỗi ùi, chờ xíu nha!"
        })
    }
    else return "Bạn chưa nhập đủ thông tin"
}
