import React from "react";

export default function ForgotPassword({ stateChange }) {
    return (
        <form id="signup__form" className="form">
            <h2 style={{ textAlign: "center", fontSize: '30px', fontWeight: 'normal' }}>Quên mật khẩu</h2>
            <p style={{ fontSize: '14px' }}>Quên mật khẩu sao? Vậy thì lấy lại mật khẩu thôiiii</p>
            <div style={{ marginTop: '20%' }} >
                <input type="email" name="" id="su__email" placeholder="Email của bạn" required />
            </div>
            <div style={{ display: "flex", justifyContent: 'end', width: '100%' }}>
                <p style={{ cursor: 'pointer', fontSize: '14px' }} onClick={() => stateChange("signIn")} id="backsi__btn" className="subcta__btn">Quay về đăng nhập</p>
            </div>
            <div style={{ display: "flex", justifyContent: 'center', width: '100%', marginTop: '10%' }}>
                <button id="signup__btn" className="maincta__btn">Xác nhận</button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1%', margin: '10% 0 5% 0' }}>
                <p>Sau khi click "Xác nhận" nhớ kiểm tra mail của bạn nhaaaaa!!!</p>
            </div>
        </form>
    )
}
