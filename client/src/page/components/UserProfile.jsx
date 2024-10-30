import { Tooltip } from "@mui/material";
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import '../../style/component/UserProfile.css'

export default function UserProfile({ displayState }) {
    const avatar = localStorage.getItem("avatar")
    const nickname = localStorage.getItem("nickname")
    const username = localStorage.getItem("username")
    return (
        <div style={{ display: displayState }} id="user-profile-popup">
            <div id="user-profile-popup--content">
                <div className="user-profile-popup--element" style={{ position: "relative", height: "10vw" }}>
                    <img id="user-profile-popup--banner" src={process.env.REACT_APP_CLOUDINARY + "/random_image/5.gif"} alt="" />
                    <div id="user-profile-popup--image" className="user-profile-popup--element">
                        <div id="user-profile-popup--overlay">
                            <div id="user-profile-popup--avatar" style={{ backgroundImage: `url(${avatar}` }}>
                                <img id="user-profile-popup--decoration" src={process.env.REACT_APP_CLOUDINARY + "/sample_avatarframe.gif"} alt="" />
                                <div id="online-dot-popup__background">
                                    <div id="online-dot-popup__foreground"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="user-profile-popup--main-content" className="user-profile-popup--element">
                    <div id="user-profile-popup--main-content__detail">
                        <h2>{nickname}</h2>
                        <p>{username}</p>
                        <div id="badge-list"></div>
                    </div>
                    <div className="user-profile-popup--main-content__element" id="user-profile-popup--main-content__description">
                        <p>Hello World!!! Chúc một ngày tốt lành :3</p>
                    </div>
                </div>
                <div id="user-profile-popup--edit-button" className="user-profile-popup--element">
                    <Tooltip title="Thông tin của bạn">
                        <button>
                            <PersonRoundedIcon fontSize="small" />
                        </button>
                    </Tooltip>
                    <Tooltip title="Xem thêm">
                        <button>
                            <MoreVertRoundedIcon fontSize="small" />
                        </button>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}