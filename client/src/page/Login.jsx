import React, { useState } from "react"
import '../style/page/SignInPage.css'
import handleSignIn from '../api/signIn'
import handleSignUp from "../api/signUp"
import { Navigate, useNavigate } from 'react-router-dom'
import SignIn from "./element/login_page/SignIn";
import SignUp from "./element/login_page/SignUp";
import ForgotPassword from "./element/login_page/ForgotPassword";

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formState: "signIn"
        }
    }

    switchForm = (state) => {
        this.setState({ formState: state })
    }

    render() {
        //Nếu chưa đăng nhập
        if (localStorage.getItem("username") === null) {
            return (
                <>
                    <div id="form__main">
                        <div style={{ justifyContent: 'center', display: 'flex', width: '100%' }}><img src="logo192.png" alt="" width="15%" /></div>
                        {this.state.formState === 'signIn' && <SignIn stateChange={this.switchForm} />}
                        {this.state.formState === 'signUp' && <SignUp stateChange={this.switchForm} />}
                        {this.state.formState === 'forgetPasswd' && <ForgotPassword stateChange={this.switchForm} />}
                    </div>
                </>
            )
        }
        //Nếu đăng nhập thì chuyển về trang chủ
        else {
            return <Navigate to="/" replace />
        }
    }
}






