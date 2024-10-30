import {useEffect, useState} from 'react'
import '../../style/component/ActivitySideBar.css'
import preloadData from '../../api/preloadData'
import LoadingComponent from './LoadingComponent'
import FUNCTION_INDEX from "../../const/FUNCTION_INDEX";

export default function RightSideBar({listFeatureOptionalFunction}) {
    return (
        <aside id="right-aside">
            <ToDoListActivity listAction={listFeatureOptionalFunction}/>
            <ScheduleActivity listAction={listFeatureOptionalFunction}/>
        </aside>
    )
}

//Đây là cách làm không tối ưu trong case này
function ToDoListActivity({listAction}) {
    const [topTodolist, setToptodolist] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            await preloadData(null, "/api/loadTodolist", [["id", localStorage.getItem('id')]])
                .then(data => {
                    // return < ToDoListCard key={ele.todolistId} title={ele.title} content={ele.content} id={ele.todolistId} />
                    let formatTopTodolist = {
                        title: "Không có việc cần làm",
                        content: "Hooray!! Bạn thật là năng suất!!!"
                    }
                    if (data.listTodolist.length > 0) {
                        formatTopTodolist = {
                            title: data.listTodolist[0].title,
                            content: data.listTodolist[0].content,
                        }
                    }
                    setTimeout(() => {
                        setToptodolist(formatTopTodolist)
                    }, 350)

                })
        }
        fetchData()
    }, [])


    return (
        <>
            {topTodolist === null ? <LoadingComponent/> : (
                <section className="activity--element" id="todolist--activity">
                    <h5 style={{fontWeight: '500'}}>To-do List đề xuất</h5>
                    <h3 style={{marginTop: '5%'}}><strong>{topTodolist.title}</strong></h3>
                    <div style={{marginTop: '3%'}}>
                        <span style={{whiteSpace: 'pre-wrap'}}>
                            {topTodolist.content}
                        </span>
                    </div>
                    <div
                        onClick={() => listAction(FUNCTION_INDEX.TODOLIST)}
                        style={{
                            color: 'var(--foreground-unfocus-color)',
                            textAlign: 'end',
                            marginRight: '2%',
                            cursor: 'pointer',
                            marginTop: '10%',
                            fontSize: '0.75rem'
                        }}>
                        Xem thêm
                    </div>
                </section>
            )}
        </>
    )
}

function ScheduleActivity({
                              listAction,
                              currentSchedule = {
                                  0: {1: null, 2: null, 3: null, 4: null},
                                  1: {1: null, 2: null, 3: null, 4: null},
                                  2: {1: null, 2: null, 3: null, 4: null},
                                  3: {1: null, 2: null, 3: null, 4: null},
                                  4: {1: null, 2: null, 3: null, 4: null},
                                  5: {1: null, 2: null, 3: null, 4: null},
                                  6: {1: null, 2: null, 3: null, 4: null}
                              }
                          }) {
    const timeOfDay = Object.freeze({
        1: "Ca 1",
        2: "Ca 2",
        3: "Ca 3",
        4: "Ca 4"
    })
    const [isEmptySchedule, setIsEmptySchedule] = useState(true)
    //Hiện tại chỉ có thể lấy theo dạng mặc định
    const getTodaySchedule = (inputData) => {
        const currentDay = new Date().getDay()
        const scheduleData = {}
        for (let time in timeOfDay) {
            if (inputData[currentDay][time] !== null) {
                scheduleData[timeOfDay[time]] = `- ${timeOfDay[time]}: ${inputData[currentDay][time].name}\n`
                setIsEmptySchedule(false)
            } else scheduleData[timeOfDay[time]] = "- " + timeOfDay[time] + ":\n"
        }
        return {
            dayOfWeek: (currentDay === 0) ? "Chủ nhật" : `Thứ ${currentDay + 1}`,
            schedule: scheduleData
        }
    }

    const [scheduleData, setScheduleData] = useState(null)

    useEffect(() => {
        setScheduleData(getTodaySchedule(currentSchedule))
    }, []);

    return (
        <>
            {scheduleData === null ? <LoadingComponent/> : (
                <section className="activity--element" id="schedule--activity">
                    <h5 style={{fontWeight: '500'}}>Thời khóa biểu hôm nay - {scheduleData.dayOfWeek} :</h5>
                    <h3 style={{marginTop: '5%'}}>
                        <strong>
                        </strong>
                    </h3>
                    <div style={{marginTop: '3%'}}>
                        {isEmptySchedule ? "Hôm nay là ngày nghỉ đó!!" : (
                            <span style={{whiteSpace: 'pre-wrap'}}>
                                {scheduleData.schedule["Ca 1"]}
                                {scheduleData.schedule["Ca 2"]}
                                {scheduleData.schedule["Ca 3"]}
                                {scheduleData.schedule["Ca 4"]}
                            </span>)}
                    </div>
                    <div
                        onClick={() => listAction(FUNCTION_INDEX.SCHEDULE)}
                        style={{
                            color: 'var(--foreground-unfocus-color)',
                            textAlign: 'end',
                            marginRight: '2%',
                            cursor: 'pointer',
                            marginTop: '10%',
                            fontSize: '0.75rem'
                        }}>
                        Xem thêm
                    </div>
                </section>
            )}
        </>
    )
}