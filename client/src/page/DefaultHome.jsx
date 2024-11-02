import React from "react";
import '../style/page/DefaultHome.css'
import {Card, CardContent, CardHeader, Typography} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

export default class DefaultHome extends React.Component {

    render() {
        return (
            <>
                <Background/>
                <IntroSection/>
                <FutureFunction/>
                <TechUsed/>
            </>
        )
    }
}

function Background() {
    return (
        <div id="background">
            <div className="bg-element" id="bg-element__top-left"></div>
            <div className="bg-element" id="bg-element__center-left"></div>
            <div className="bg-element" id="bg-element__center"></div>
            <div className="bg-element" id="bg-element__right"></div>
            <div className="bg-element" id="bg-element__bottom-left"></div>
            <div className="bg-element" id="bg-element__bottom"></div>
        </div>
    )
}

function IntroSection() {
    return (
        <div className="container" style={{height: '600px'}}>
            <section id="intro">
                <div className="left-content">
                    <h1 className="main-title">
                        Chào mừng đã đến với cái web
                        nho nhỏ này
                    </h1>
                    <p className="description">
                        Đây chỉ là một project được tạo ra trong lúc <s>khùng</s> nghỉ hè
                        cùng với những tính năng được nghĩ ra vô cùng ngẫu nhiên.
                    </p>
                </div>

                <img id="intro-image" src={process.env.REACT_APP_CLOUDINARY + "/landing_page/landing_intro.webp"}
                     alt=""/>

                <div id="intro-group" >
                    <button >
                        <a href="https://github.com/Riiichan04/MyRandomApplication">
                            <GitHubIcon sx={{marginRight: '5%'}}/>
                            Source Code
                        </a>
                    </button>

                    <button >
                        <a href="/login">
                            Đăng nhập
                        </a>
                    </button>
                </div>

            </section>
        </div>
    )
}

function FutureFunction() {
    return (
        <div className="container" style={{paddingTop: '3%', paddingBottom: '3%', backgroundColor: 'var(--side-background-color)'}}>
            <h2 className="sub-title">
                Tính năng dự kiến
            </h2>
            <p className="sub-description">Mặc dù còn lâu nữa mới rảnh để làm...</p>
            <div style={{paddingTop: '3%', display: 'flex', gap: '2%'}}>
                <Card sx={{ backgroundColor: 'var(--side-background-color-hover)', width: '25%', '&:hover': {backgroundColor: 'rgb(49, 83, 124)'}}}>
                    <CardHeader titleTypographyProps={{variant: 'h5'}} title="Trang chủ"
                                sx={{color: 'var(--foreground-color)'}}/>
                    <CardContent className="card-content">
                        <Typography variant="body2" sx={{color: 'var(--foreground-color)'}}>
                            Là một trang dashboard để hiển thị tổng quan các loại thông tin
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ backgroundColor: 'var(--side-background-color-hover)', width: '25%', '&:hover': {backgroundColor: 'rgb(49, 83, 124)'}}}>
                    <CardHeader titleTypographyProps={{variant: 'h5'}} title="Podcast"
                                sx={{color: 'var(--foreground-color)'}}/>
                    <CardContent className="card-content">
                        <Typography variant="body2" sx={{color: 'var(--foreground-color)'}}>
                            Hiển thị một số Podcast hot và đề xuất một số Podcast theo chủ đề
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ backgroundColor: 'var(--side-background-color-hover)', width: '25%', '&:hover': {backgroundColor: 'rgb(49, 83, 124)'}}}>
                    <CardHeader titleTypographyProps={{variant: 'h5'}} title="Thời khóa biểu"
                                sx={{color: 'var(--foreground-color)'}}/>
                    <CardContent className="card-content">
                        <Typography variant="body2" sx={{color: 'var(--foreground-color)'}}>
                            Có nhiều template thời khóa biểu ứng với nhu cầu khác nhau
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ backgroundColor: 'var(--side-background-color-hover)', width: '25%', '&:hover': {backgroundColor: 'rgb(49, 83, 124)'}}}>
                    <CardHeader titleTypographyProps={{variant: 'h5'}} title="Bạn bè"
                                sx={{color: 'var(--foreground-color)'}}/>
                    <CardContent className="card-content">
                        <Typography variant="body2" sx={{color: 'var(--foreground-color)'}}>
                            Chỉ là hệ thống bạn bè, chưa dự tính xa hơn
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <div style={{paddingTop: '3%', display: 'flex', gap: '2%'}}>
                <Card sx={{ backgroundColor: 'var(--side-background-color-hover)', width: '25%', '&:hover': {backgroundColor: 'rgb(49, 83, 124)'}}}>
                    <CardHeader titleTypographyProps={{variant: 'h5'}} title="Thông báo"
                                sx={{color: 'var(--foreground-color)'}}/>
                    <CardContent className="card-content">
                        <Typography variant="body2" sx={{color: 'var(--foreground-color)'}}>
                            Có thể nhận thông báo về todo-list hoặc về thời khóa biểu,...
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ backgroundColor: 'var(--side-background-color-hover)', width: '25%', '&:hover': {backgroundColor: 'rgb(49, 83, 124)'}}}>
                    <CardHeader titleTypographyProps={{variant: 'h5'}} title="Tùy biến"
                                sx={{color: 'var(--foreground-color)'}}/>
                    <CardContent className="card-content">
                        <Typography variant="body2" sx={{color: 'var(--foreground-color)'}}>
                            Có thay đổi light/dark mode, custom background của web
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ backgroundColor: 'var(--side-background-color-hover)', width: '25%', '&:hover': {backgroundColor: 'rgb(49, 83, 124)'}}}>
                    <CardHeader titleTypographyProps={{variant: 'h5'}} title="Cài đặt"
                                sx={{color: 'var(--foreground-color)'}}/>
                    <CardContent className="card-content">
                        <Typography variant="body2" sx={{color: 'var(--foreground-color)'}}>
                            Có thể chỉnh sửa một số cài đặt cho web
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ backgroundColor: 'var(--side-background-color-hover)', width: '25%', '&:hover': {backgroundColor: 'rgb(49, 83, 124)'}}}>
                    <CardHeader titleTypographyProps={{variant: 'h5'}} title="Trang người dung"
                                sx={{color: 'var(--foreground-color)'}}/>
                    <CardContent className="card-content">
                        <Typography variant="body2" sx={{color: 'var(--foreground-color)'}}>
                            Hiển thị thông tin người dùng, cũng như có thể thay avatar, banner, khung avatar,...
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

function TechUsed() {
    return (
        <div className="container"
             style={{paddingTop: '3%', paddingBottom: '3%', backgroundColor: 'var(--popup-default-bg-color)'}}>
            <h2 className="sub-title">
                Công nghệ sử dụng
            </h2>
            <p className="sub-description">Đây là lý do web này tồn tại  ( Xinloi vì tìm không thấy icon SQL Server 🥲 )</p>
            <div style={{display: "flex", justifyContent: 'center', marginTop: '3%'}}>
                <img id="tech-skill-list"
                     src="https://simpleskill.icons.workers.dev/svg?i=mongodb,express,react,node.js,cloudinary,mysql"
                     alt=""></img>
            </div>

        </div>
    )
}