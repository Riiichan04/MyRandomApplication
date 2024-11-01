import React from "react";
import '../style/page/DefaultHome.css'
import ComingSoon from "./components/ComingSoon";
import {Card, CardContent, CardHeader, createTheme, Grid, Typography} from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});


export default class DefaultHome extends React.Component {
    // constructor(prop) {
    //     super(prop)
    // }

    render() {
        return (
            <>
                <Background/>
                <IntroSection/>
                <PageInfo/>
                {/*<div className="container">*/}
                {/*    <ComingSoon/>*/}
                {/*</div>*/}
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
            </section>
        </div>
    )
}

function PageInfo() {
    return (
        <div className="container" style={{paddingTop: '3%', backgroundColor: 'var(--side-background-color)'}}>
            <h2 className="sub-title">
                Tính năng dự kiến
            </h2>
            <p className="sub-description">Mặc dù còn rất lâu nữa mới rảnh để làm...</p>
            <Grid container spacing={2} sx={{marginTop: '5%'}}>
                <Grid size={4}>
                    <Card sx={{backgroundColor: 'var(--side-background-color-hover)'}}>
                        <CardHeader titleTypographyProps={{variant: 'h4'}} title="Podcast" sx={{color: 'var(--foreground-color)'}}/>
                        <CardContent className="card-content">
                            <Typography variant="body2" sx={{color: 'var(--foreground-color)'}}>
                                Hiển thị một số Podcast hot và đề xuất một số Podcast theo chủ đề
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={4}>

                </Grid>
                <Grid size={4}>

                </Grid>
            </Grid>
        </div>
    )
}