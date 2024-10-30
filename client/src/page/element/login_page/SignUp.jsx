import React, {useState} from "react";
import handleSignUp from "../../../api/signUp";

export default function SignUp({ stateChange }) {
    const [username, setUsername] = useState('')
    const [nickname, setNickname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [notice, setNotice] = useState('')
    const signUp = async (username, nickname, email, password, confirmPass, event) => {
        event.preventDefault()
        setNotice(await handleSignUp(username, nickname, email, password, confirmPass))
    }
    return (
        <form id="signup__form" className="form" onSubmit={(e) => signUp(username, nickname, email, password, confirmPass, e)}>
            <h2 style={{ textAlign: "center", fontSize: '30px', fontWeight: 'normal' }}>Đăng ký</h2>
            <p style={{ fontSize: '14px' }}>Chào mừng đến với MyRandomApplication nhaaaa</p>
            <div style={{ marginTop: '15%' }} >
                <input type="text" name="" id="su__username" placeholder="Tên đăng nhập của bạn" required minLength={4} maxLength={32} onChange={(e) => setUsername(e.target.value)} />
                <input type="text" name="" id="su__nickname" placeholder="Tên người dùng của bạn" required maxLength={32} onChange={(e) => setNickname(e.target.value)} />
                <input type="email" name="" id="su__email" placeholder="Email của bạn" required onChange={(e) => setEmail(e.target.value)} />
                <input type="password" name="" id="su__pass" placeholder="Mật khẩu của bạn" required minLength={8} maxLength={32} onChange={(e) => setPassword(e.target.value)} />
                {/* Cho LTWeb:
                    <input type="password" name="" id="su__pass" placeholder="Mật khẩu của bạn" required minLength={8} pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$" /> */}
                <input type="password" name="" id="su__confirmpass" placeholder="Nhập lại mật khẩu" required minLength={8} maxLength={32} onChange={(e) => setConfirmPass(e.target.value)} />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1%', marginTop: '0% 0 5% 0' }}>
                    <input style={{ flex: '0', margin: '0' }} type="checkbox" name="" id="su__accept" required />
                    <p style={{ margin: '0' }}>Tôi đã đọc và đồng ý với <span className="subcta__btn" style={{ cursor: 'pointer' }}>Điều khoản sử dụng</span></p>
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: 'center', width: '100%', marginTop: '10%' }}>
                <button id="signup__btn" type="submit" className="maincta__btn">Đăng ký</button>
            </div>
            <p style={{ color: 'red' }} className="form__notice" id="su__notice">{notice}</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1%', margin: '10%' }}>
                <button className="subcta__btn" onClick={() => stateChange("signIn")}>
                    <p><span style={{ color: 'whitesmoke', cursor: 'context-menu' }}>Đã có tài khoản à? </span>Đăng nhập</p>
                </button>
            </div>
        </form>
    )
}