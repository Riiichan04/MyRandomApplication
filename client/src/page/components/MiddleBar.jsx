import React, {useState} from "react";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import {Tooltip} from "@mui/material";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import UserProfile from "./UserProfile";
import '../../style/component/MiddleBar.css'

export default function MiddleBar() {
    const [userProfileState, setUserProfileState] = useState("none")

    const userPopupEvent = () => {
        if (userProfileState === "flex") {
            setUserProfileState("none")
        } else setUserProfileState("flex")
    }

    const UserFeature = () => {
        return (
            <nav id="user__feature">
                <div id="user__feature-searchbar">
                    <input type="text" name="" id="" placeholder="Click để tìm kiếm"/>
                </div>

                <div className="user__feature__function">
                    <PeopleAltRoundedIcon sx={{fontSize: 26}}/>
                    <span>Bạn bè</span>
                </div>
                <div className="user__feature__function">
                    <NotificationsActiveRoundedIcon sx={{fontSize: 26}}/>
                    <span>Thông báo</span>
                </div>
                <div className="user__feature__function">
                    <TuneRoundedIcon sx={{fontSize: 26}}/>
                    <span>Tùy biến</span>
                </div>
            </nav>
        )
    }


    const UserMenu = () => {
        const avatar = localStorage.getItem('avatar')
        const nickname = localStorage.getItem('nickname')
        return (
            <div id="user__menu">
                <div id="user__menu--user" onClick={() => userPopupEvent()}>
                    <div className="user__menu--image">
                        <img className="avatar-decoration"
                             src={process.env.REACT_APP_CLOUDINARY + "/sample_avatarframe.gif"} alt=""
                             style={{height: "100%"}}/>
                        <img src={avatar} alt=""/>
                        <div className="online-dot__background">
                            <div className="online-dot__foreground"></div>
                        </div>
                    </div>
                    <div>
                        <h3 style={{fontWeight: '600'}}>{nickname}</h3>
                        <p style={{fontSize: "12px", textAlign: "start"}}>Trực tuyến</p>
                    </div>
                </div>
                <div>
                    <div className="user__menu--function">
                        <Tooltip title="Cài đặt">
                            <SettingsRoundedIcon sx={{fontSize: 26}}/>
                        </Tooltip>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div id="middle-area">
            <UserProfile displayState={userProfileState}/>
            <UserFeature/>
            <UserMenu/>
        </div>
    )
}