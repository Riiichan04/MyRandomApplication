import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import WaterDropRoundedIcon from '@mui/icons-material/WaterDropRounded';
import '../../style/component/NewsComponents.css'
import preloadData from "../../api/preloadData";
import shuffleArray from "../../helper/shuffleArray";

const WeatherComponent = ({ data }) => {
    const WeatherContent = () => {
        return (
            <>
                <h1>{data.temp}°</h1>
                <div id="weather-component__middle">
                    <div id="weather-component__location">
                        <LocationOnRoundedIcon sx={{ fontSize: "medium" }} />
                        <h3>{data.location}</h3>
                    </div>

                    <div id="weather-component__humidity">
                        <WaterDropRoundedIcon sx={{ fontSize: "small" }} />
                        <h5>Độ ẩm: {data.humidity}%</h5>
                    </div>
                    <h5>Cảm giác như {data.temp_feel_like}°</h5>
                </div>
                <div id="weather-component__bottom">
                    <h6>Cập nhật lúc: {data.request_time}</h6>
                    <h6>Theo OpenWeather</h6>
                </div></>
        )
    }

    return (
        <div className="news-item__component" id="weather-component">
            <WeatherContent />
        </div>
    )
}

//Hết olympic rồi => K cần dùng API nữa
const OlympicResult = () => {
    return (
        <div className="news-item__component olympic">
            <h3 style={{ textAlign: 'center', fontWeight: 'bold' }}>Kết quả Olympic 2024 Paris</h3>
            {/* Trick CSS: Làm responsive cho table: Chồng 1 container và set overflow-x: auto */}
            <div style={{ overflowX: 'auto' }}>
                <table>
                    <thead>
                        <tr>
                            <th style={{ textAlign: "start" }}>Đội</th>
                            <th></th>
                            <th>🥇</th>
                            <th>🥈</th>
                            <th>🥉</th>
                            <th>Tổng</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/22px-Flag_of_the_United_States.svg.png" alt="us_flag" />
                                Mỹ</td>
                            <td>40</td>
                            <td>44</td>
                            <td>42</td>
                            <td>126</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/33px-Flag_of_the_People%27s_Republic_of_China.svg.png" alt="cn_flag" />
                                Trung Quốc</td>
                            <td>40</td>
                            <td>27</td>
                            <td>24</td>
                            <td>91</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/33px-Flag_of_Japan.svg.png" alt="jp_flag" />
                                Nhật Bản</td>
                            <td>20</td>
                            <td>12</td>
                            <td>13</td>
                            <td>45</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/33px-Flag_of_Australia_%28converted%29.svg.png" alt="aus_flag" />
                                Úc</td>
                            <td>18</td>
                            <td>19</td>
                            <td>16</td>
                            <td>53</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>
                                <img src="//upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/23px-Flag_of_France.svg.png" alt="fr_flag" />
                                Pháp</td>
                            <td>16</td>
                            <td>26</td>
                            <td>22</td>
                            <td>64</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const News = ({ title, imageUrl, uploadTime, isHotNews, href }) => {
    const [filter, setFilter] = useState(null)
    const navigate = useNavigate()
    const NormalNews = () => {
        return (
            <div className="news-item__component news-component normalnews"
                onMouseEnter={() => setFilter("brightness(70%)")}
                onMouseLeave={() => setFilter(null)}
                onClick={() => navigate(href, { replace: true })}
            >
                <img src={imageUrl} alt="News Thumbnail" style={{ filter: filter }} />
                <div>
                    <h3>{title}</h3>
                    <h6>{uploadTime}</h6>
                </div>
            </div>
        )
    }

    const HotNews = () => {
        return (
            <div className="news-item__component news-component hotnews"
                onMouseEnter={() => setFilter("brightness(70%)")}
                onMouseLeave={() => setFilter(null)}
                onClick={() => navigate(href)}
            >
                <img src={imageUrl} alt="News thumbnail" style={{ filter: filter }} />
                <div>
                    <h3>{title}</h3>
                    <h6>{uploadTime}</h6>
                </div>
            </div>
        )
    }

    if (isHotNews) {
        return <HotNews />
    }
    else return <NormalNews />
}

const RandomImage = ({ url, title }) => {
    const [navDisplay, setNavDisplay] = useState("none")
    const [filter, setFilter] = useState(null)
    return (
        <div className="news-item__component random-image"
            onMouseEnter={() => {
                setNavDisplay("flex")
                setFilter("brightness(60%)")
            }}
            onMouseLeave={() => {
                setNavDisplay("none")
                setFilter(null)
            }}>
            <img src={url} alt="Just a random img" style={{ filter: filter }} />
            <nav style={{ display: navDisplay }}>
                <div>
                    <h5 className="random-image__header">Hình ảnh ngẫu nhiên 😃</h5>
                    <h3 className="random-image__title">{title}</h3>
                </div>
            </nav>
        </div>
    )
}

export {
    WeatherComponent,
    OlympicResult,
    News,
    RandomImage
}