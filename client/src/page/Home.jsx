import React from "react";
import { useLocation } from "react-router-dom";
import UserHome from "./UserHome";
import DefaultHome from "./DefaultHome";
export default class Home extends React.Component {
    render() {
        return (<MainComponent></MainComponent>)
    }
}

function MainComponent() {
    const location = useLocation()
    //Nếu không có thông tin trong state thì kiểm tra trong cookie
    const state = location.state?.isLoggedIn || localStorage.getItem("username") !== null
    if (state) {
        return (
            <UserHome />
        )
    }
    else {
        return (
            <DefaultHome />
        )
    }
}
