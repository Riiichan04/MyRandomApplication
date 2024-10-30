import React, {useEffect, useState} from "react";
import LoadingComponent from "../../components/LoadingComponent";
import '../../../style/component/NewsComponents.css'

export default function NewsComponent({listComponent}) {
    const [loadedState, setLoadedState] = useState(false)
    const [listShuffledComponent, setListShuffledComponent] = useState([])

    useEffect(() => {
        setListShuffledComponent(listComponent)
        setTimeout(() => {
            setLoadedState(true)
        }, 350)
    }, [listShuffledComponent, listComponent])

    return (
        <>
            {loadedState === true ? (<div className="news-item__container"><>{listShuffledComponent}</>
            </div>) : <LoadingComponent/>}
        </>
    )
    // <div className="news-item__container">
    // {loadedState === true ? (<>{listShuffledComponent}</>) : <LoadingComponent />}
    // </div>

}