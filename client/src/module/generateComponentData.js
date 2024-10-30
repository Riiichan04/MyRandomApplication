import {News, OlympicResult, RandomImage, WeatherComponent} from "../page/components/NewsComponent";
import preloadData from "../api/preloadData";
import {componentGenerator, generateListComponents} from "./componentGenerator";
import React from "react";

const olympicComponent = <OlympicResult key={"olympic"}/>
const weatherComponent = await componentGenerator(
    WeatherComponent, "weather", null,
    () =>
        preloadData(null, "/api/service/weather", [["location", "Ho Chi Minh"], ["lang", "vi"]])
            .then(result => {
                return {data: result}
            }))
const listImageComponent = generateListComponents(RandomImage, "img",
    async () =>
        await preloadData(null, "/api/loadImages", [["start", "0"], ["amount", "max"]])
            .then(result =>
                result.map(data => {
                    return {title: data.title, url: data.url,}
                })
            ))
const listNewsDataComponent = generateListComponents(News, "news",
    async () =>
        await preloadData(null, "/api/loadNews", [["start", "0"], ["amount", "max"]])
            .then(result =>
                result.map(data => {
                    const title = data.title.normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")
                        .replace(/[!@%^*()+=<>?/,.:;'"&#[\]~$_`\-{}|\\]/g, "")
                        .replace(/\s+/g, "-");
                    return {
                        title: data.title, imageUrl: data.thumbnail, uploadTime: data.uploadTime,
                        isHotNews: data.isHotNews, href: "/news/" + title
                    }
                })
            ))
export {
    olympicComponent,
    weatherComponent,
    listImageComponent,
    listNewsDataComponent,
}