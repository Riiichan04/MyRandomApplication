import '../style/page/UserHome.css'
import React from "react";
import withRouter from '../helper/withRouter';
import LeftSideBar from "./components/LeftSideBar";
import FUNCTION_INDEX from '../const/FUNCTION_INDEX';
import RightSideBar from './components/RightSideBar';
import MiddleBar from "./components/MiddleBar";
import NoteComponent from "./element/logged_home/Note";
import NewsComponent from "./element/logged_home/NewsComponent";
import DashBoardComponent from "./element/logged_home/DashBoard";
import ScheduleComponent from "./element/logged_home/Schedule";
import PodcastComponent from "./element/logged_home/Podcast";
import ToDoListComponent from "./element/logged_home/ListTodo";
import {fetchNewsData} from "../module/generateNewsComponents";
import RecommendShoppingComponent from "./element/logged_home/RecommendShopping";

const listComponent = await fetchNewsData()

class UserHome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            functionIndex: 0
        }
    }

    async componentDidMount() {
        const fIndex = (localStorage.getItem("isNeedToReload") === "true" && this.props.router.location.state?.passedFunctionIndex) ?
            this.props.router.location.state.passedFunctionIndex : 0
        this.setState({functionIndex: fIndex})
        window.localStorage.setItem("isNeedToReload", "false")
    }

    switchFunction = (index) => {
        if (index > -1 && index < Object.keys(FUNCTION_INDEX).length && index !== this.state.functionIndex) {
            this.setState({functionIndex: index})
        }
    }

    render() {
        return (
            <>
                <LeftSideBar overrideSwitchFunction={this.switchFunction} startIndex={0}
                             getCurrentIndexFunction={() => this.state.functionIndex}/>
                <MiddleBar/>
                <div id="center">
                    {this.state.functionIndex === FUNCTION_INDEX.DASHBOARD && <DashBoardComponent/>}
                    {this.state.functionIndex === FUNCTION_INDEX.NOTE && <NoteComponent/>}
                    {this.state.functionIndex === FUNCTION_INDEX.NEWS && <NewsComponent listComponent={listComponent}/>}
                    {this.state.functionIndex === FUNCTION_INDEX.SCHEDULE && <ScheduleComponent/>}
                    {this.state.functionIndex === FUNCTION_INDEX.PODCAST && <PodcastComponent/>}
                    {this.state.functionIndex === FUNCTION_INDEX.TODOLIST && <ToDoListComponent/>}
                    {this.state.functionIndex === FUNCTION_INDEX.RECOMMEND_SHOPPING && <RecommendShoppingComponent/>}
                </div>
                <RightSideBar listFeatureOptionalFunction={this.switchFunction}/>
            </>
        )
    }
}

export default withRouter(UserHome)

