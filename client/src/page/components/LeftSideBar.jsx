import SpaceDashboardRoundedIcon from '@mui/icons-material/SpaceDashboardRounded';
import NotesRoundedIcon from '@mui/icons-material/NotesRounded';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import PodcastsRoundedIcon from '@mui/icons-material/PodcastsRounded';
import PlaylistAddCheckRoundedIcon from '@mui/icons-material/PlaylistAddCheckRounded';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FUNCTION_INDEX from '../../const/FUNCTION_INDEX';
import '../../style/component/MenuSideBar.css'

export default function LeftSideBar({ overrideSwitchFunction, startIndex, getCurrentIndexFunction }) {

    const [functionIndex, setFunctionIndex] = useState(startIndex)
    const navigate = useNavigate()

    const defaultSwitchFunction = (index) => {
        if (index > -1 && index < Object.keys(FUNCTION_INDEX).length && index !== functionIndex) {
            setFunctionIndex(index)
            navigate("/", { state: { passedFunctionIndex: index } })
        }
    }
    
    const defaultCurrentIndex = () => functionIndex

    const switchFunction = overrideSwitchFunction || defaultSwitchFunction
    const currentIndexFunction = getCurrentIndexFunction || defaultCurrentIndex

    const FeatureMenu = ({ fontSize }) => {
        return (
            <div id="feature__menu">
                <div id="logo">
                    <a href="http://localhost:3000">
                        <img src="http://localhost:3000/logo192.png" alt="" style={{width: fontSize * 1.5 + "px"}}/>
                    </a>
                </div>
                <div className='feature-button' onClick={() => switchFunction(FUNCTION_INDEX.NOTE)}
                     style={{
                         backgroundColor: currentIndexFunction() === FUNCTION_INDEX.NOTE ? "var(--side-background-color-hover)" : "",
                         color: currentIndexFunction() === FUNCTION_INDEX.NOTE ? "var(--foreground-color)" : "var(--foreground-unfocus-color)"
                     }}>
                    <NotesRoundedIcon sx={{fontSize: fontSize}}/>
                    <span>Ghi Chú</span>
                </div>
                <div className='feature-button' onClick={() => switchFunction(FUNCTION_INDEX.NEWS)}
                     style={{
                         backgroundColor: currentIndexFunction() === FUNCTION_INDEX.NEWS ? "var(--side-background-color-hover)" : "",
                         color: currentIndexFunction() === FUNCTION_INDEX.NEWS ? "var(--foreground-color)" : "var(--foreground-unfocus-color)"
                     }}>
                    <NewspaperRoundedIcon sx={{fontSize: fontSize}}/>
                    Tin Tức
                </div>
                <div className='feature-button' onClick={() => switchFunction(FUNCTION_INDEX.SCHEDULE)}
                     style={{
                         backgroundColor: currentIndexFunction() === FUNCTION_INDEX.SCHEDULE ? "var(--side-background-color-hover)" : "",
                         color: currentIndexFunction() === FUNCTION_INDEX.SCHEDULE ? "var(--foreground-color)" : "var(--foreground-unfocus-color)"
                     }}>
                    <CalendarMonthRoundedIcon sx={{fontSize: fontSize}}/>
                    Thời khóa biểu
                </div>
                <div className='feature-button' onClick={() => switchFunction(FUNCTION_INDEX.PODCAST)}
                     style={{
                         backgroundColor: currentIndexFunction() === FUNCTION_INDEX.PODCAST ? "var(--side-background-color-hover)" : "",
                         color: currentIndexFunction() === FUNCTION_INDEX.PODCAST ? "var(--foreground-color)" : "var(--foreground-unfocus-color)"
                     }}>
                    <PodcastsRoundedIcon sx={{fontSize: fontSize}}/>
                    Podcast
                </div>
                <div className='feature-button' onClick={() => switchFunction(FUNCTION_INDEX.TODOLIST)}
                     style={{
                         backgroundColor: currentIndexFunction() === FUNCTION_INDEX.TODOLIST ? "var(--side-background-color-hover)" : "",
                         color: currentIndexFunction() === FUNCTION_INDEX.TODOLIST ? "var(--foreground-color)" : "var(--foreground-unfocus-color)"
                     }}>
                    <PlaylistAddCheckRoundedIcon sx={{fontSize: fontSize}}/>
                    To-do List
                </div>
                <div className='feature-button' onClick={() => switchFunction(FUNCTION_INDEX.DASHBOARD)}
                     style={{
                         backgroundColor: currentIndexFunction() === FUNCTION_INDEX.DASHBOARD ? "var(--side-background-color-hover)" : "",
                         color: currentIndexFunction() === FUNCTION_INDEX.DASHBOARD ? "var(--foreground-color)" : "var(--foreground-unfocus-color)"
                     }}>
                    <SpaceDashboardRoundedIcon sx={{fontSize: fontSize}}/>
                    <span>Trang chủ</span>
                </div>
                <div className='feature-button' onClick={() => switchFunction(FUNCTION_INDEX.RECOMMEND_SHOPPING)}
                     style={{
                         backgroundColor: currentIndexFunction() === FUNCTION_INDEX.RECOMMEND_SHOPPING ? "var(--side-background-color-hover)" : "",
                         color: currentIndexFunction() === FUNCTION_INDEX.RECOMMEND_SHOPPING ? "var(--foreground-color)" : "var(--foreground-unfocus-color)"
                     }}>
                    <ShoppingBagRoundedIcon sx={{fontSize: fontSize}}/>
                    <span>Review mua sắm</span>
                </div>
            </div>
        )
    }

    return (
        <>
            <aside id="left-aside">
                <FeatureMenu fontSize={32}/>
            </aside>
        </>

    )
}

