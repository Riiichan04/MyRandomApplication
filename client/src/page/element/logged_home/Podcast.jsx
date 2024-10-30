import React, {useEffect, useState} from "react";
import preloadData from "../../../api/preloadData";
import ComingSoon from "../../components/ComingSoon";

export default function PodcastComponent() {
    const [listPodcast, addPodcast] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            await preloadData(null, "/api/service/loadListPodcast")
                .then(result => {
                    console.log(result)
                    addPodcast(currentList => [...currentList, result])
                })
        }
        fetchData()
    }, [])
    console.log(listPodcast)

    //Carousel
    //Có data thì tính tiếp =))
    // const ExplorePodcast = () => {

    // }

    return (
        <>
            <ComingSoon/>
        </>
    )
}