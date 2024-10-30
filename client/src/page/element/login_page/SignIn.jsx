import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import handleSignIn from "../../../api/signIn";

export default function SignIn({ stateChange }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [notice, setNotice] = useState('')
    const navigate = useNavigate()
    const signInFunction = async (username, password, event) => {
        event.preventDefault()  //Ngăn Browser chuyển về trang trước
        const message = await handleSignIn(username, password)
        if (message === null) {
            navigate('/', { state: { isLoggedIn: true } })  //Truyền state vào
        }
        else {
            setNotice(message)
        }
    }
    return (
        <>
            <form id="signin__form" className="form" onSubmit={(e) => signInFunction(username, password, e)}>
                <h2 style={{ textAlign: "center", fontSize: '30px', fontWeight: 'normal' }}>Đăng nhập</h2>
                <p style={{ fontSize: '14px' }}>Đăng nhập để tham gia vào thế giới này đi nèee</p>
                <div style={{ marginTop: '20%' }} >
                    <input type="text" name="" id="si__username" placeholder="Tên đăng nhập của bạn" required value={username} minLength={4} maxLength={32} onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" name="" id="si__pass" placeholder="Mật khẩu của bạn" required value={password} minLength={8} maxLength={32} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div style={{ display: "flex", justifyContent: 'end', width: '100%' }}>
                    <p style={{ cursor: 'pointer', fontSize: '14px' }} onClick={() => stateChange('forgetPasswd')} id="forgot__btn" className="subcta__btn">Quên mật khẩu?</p>
                </div>
                <div style={{ display: "flex", justifyContent: 'center', width: '100%', marginTop: '10%' }}>
                    <button id="signin__btn" type="submit" className="maincta__btn">Đăng nhập</button>
                </div>
            </form >
            <p style={{ color: 'red' }} className="form__notice" id="si__notice">{notice}</p>
            <div style={{ display: "flex", justifyContent: 'center', width: '100%', marginTop: '10%', marginBottom: '10%' }} >
                <button className="subcta__btn" onClick={() => stateChange('signUp')}>
                    <p><span style={{ color: 'whitesmoke', cursor: 'context-menu' }}>Chưa có tài khoản sao? </span>Đăng ký</p>
                </button>
            </div>
        </>

    )
}