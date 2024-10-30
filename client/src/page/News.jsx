import React, { useEffect, useRef } from "react";


import '../style/page/News.css'
import LeftSideBar from "./components/LeftSideBar";
import LoadingComponent from "./components/LoadingComponent";



export default class News extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.id,
            title: "",
            isLoading: false,
            content: "",
            thumbnail: this.props.thumbnail,
            uploadTime: "",
        }
        this.componentRef = React.createRef(null)
    }

    async componentDidMount() {
        const request = await fetch(`http://localhost:3110/api/loadNewsById?id=${this.state.id}`)
        const json = await request.json()
        this.setState({ content: json.content, title: json.title, uploadTime: json.uploadTime })
        window.localStorage.setItem("isNeedToReload", true)
        setTimeout(() => this.setState({ isLoading: true }), 500)
    }

    render() {
        return (
            <>
                <LeftSideBar startIndex={-1} />
                {
                    this.state.isLoading ?
                        (<>
                            <NewsContent title={this.state.title}
                                content={this.state.content}
                                thumbnail={this.state.thumbnail}
                                uploadTime={this.state.uploadTime} />
                            <RecommendedNews />
                        </>) : (
                            <div style={{ position: 'absolute', left: '5%', width: '55%', padding: '5%', height: '100%' }}>
                                <LoadingComponent />
                            </div >
                        )
                }
            </>
        )
    }

}

const NewsContent = ({ title, thumbnail, content, attachment, uploadTime }) => {
    const titleRef = useRef(null)
    const contentRef = useRef(null)
    useEffect(() => {
        titleRef.current.innerText = title
        contentRef.current.innerHTML = content
    })

    return (
        <article id="main-news">
            <p id="uploadTime">{uploadTime}</p>
            <div id="title" ref={titleRef} ></div>
            <div id="thumbnail">
                <img src={thumbnail} alt="News Thumbnail" />
            </div>
            <div id="content">
                <span style={{ whiteSpace: "pre-wrap" }} ref={contentRef}></span>
            </div>
        </article>
    )
}

//Sẽ làm lại sau
const RecommendedNews = () => {
    return (
        <aside id="news-recommend">
            <h2>Tin đề xuất</h2>
            <RecommendNewsElement url={"/news/Banner-Firefly-%C4%91ua-Mihoyo-len-%C4%91inh-doanh-thu"}
                title={"Banner Firefly đưa Mihoyo lên đỉnh doanh thu"}
                thumbnail={process.env.REACT_APP_CLOUDINARY + "/v1725132601/news_thumbnail/firefly.webp"}
                uploadTime={"4 giờ trước"}
            />
            <RecommendNewsElement url={"http://localhost:3000/news/Wuthering-Waves-chuan-bi-update-phien-ban-12"}
                title={"Wuthering Waves chuẩn bị update phiên bản 1.2"}
                thumbnail={process.env.REACT_APP_CLOUDINARY + "/v1725132580/news_thumbnail/wuwa1.2.webp"}
                uploadTime={"10 giờ trước"}
            />
            <RecommendNewsElement url={"http://localhost:3000/news/Honkai-Star-Rail-ra-mat-phien-ban-24"}
                title={"Honkai: Star Rail ra mắt phiên bản 2.4"}
                thumbnail={process.env.REACT_APP_CLOUDINARY + "/v1725132588/news_thumbnail/hsr2.4.webp"}
                uploadTime={"1 ngày trước"}
            />
            <RecommendNewsElement url={"http://localhost:3000/news/HoYoFest-bung-chay-o-TPHCM"}
                title={"HoYoFest bùng cháy ở TP.HCM"}
                thumbnail={process.env.REACT_APP_CLOUDINARY + "/v1725132593/news_thumbnail/hoyofest.webp"}
                uploadTime={"2 ngày trước"}
            />
            <RecommendNewsElement url={"http://localhost:3000/news/%C4%90ung-voi-tin-review-som-cua-Black-Myth-Wukong"}
                title={"Đừng vội tin review sớm của Black Myth: Wukong"}
                thumbnail={process.env.REACT_APP_CLOUDINARY + "/v1725132606/news_thumbnail/blackmythwukong.webp"}
                uploadTime={"3 ngày trước"}
            />
        </aside>
    )
}

const RecommendNewsElement = ({ url, title, thumbnail, uploadTime }) => {
    return (
        <a href={url} className="rec-news-href">
            <div className="rec-news-element">
                <img src={thumbnail} alt="" className="rec-news-image" />
                <div>
                    <h3 className="rec-news-title">{title}</h3>
                    <h6 className="rec-news-time">{uploadTime}</h6>
                </div>
            </div>
        </a>
    )
}