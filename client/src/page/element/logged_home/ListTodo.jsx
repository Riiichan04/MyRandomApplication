import React, {useEffect, useRef, useState} from "react";
import preloadData from "../../../api/preloadData";
import formatInputContent from "../../../helper/formatInput";
import uploadData from "../../../api/uploadData";
import {Dialog, DialogTitle, IconButton, Tooltip} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import LoadingComponent from "../../components/LoadingComponent";
import '../../../style/element/logged_home/ListToDo.css'

export default function ToDoListComponent() {
    const [displayDialog, setDisplayDialog] = useState(false)
    const [listTodolist, setListTodolist] = useState(null)
    const [listIdTodolist, setListIdTodolist] = useState([])
    const [countTodolist, setCountTodolist] = useState('')
    const [completedTodolist, setCompletedTodolist] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            await preloadData(null, "/api/loadTodolist", [["id", localStorage.getItem('id')]])
                .then(data => {
                    const listComponent = data.listTodolist.map((ele, index) => {
                        setListIdTodolist(currentList => [...currentList, ele.todolistId])
                        return < ToDoListCard key={ele.todolistId} title={ele.title} content={ele.content}
                                              id={ele.todolistId}/>
                    })
                    setTimeout(() => {
                        setCountTodolist(listComponent.length)  //Đếm số lg todolist
                        setCompletedTodolist(data.completedTodolist)
                        setListTodolist(listComponent)
                    }, 350)
                })
        }
        fetchData()
    }, [countTodolist, completedTodolist]) //Mỗi khi số lượng todolist thay đổi thì component sẽ render lại

    const TempTodolist = () => {
        const [titlePlaceholder, setTitlePlaceholderState] = useState("block")
        const [contentPlaceholder, setContentPlaceholderState] = useState("block")
        // const [attachment, setAttachment] = useState(null)

        const titleRef = useRef(null)
        const contentRef = useRef(null)
        // const attachmentRef = useRef(null)

        const setTitlePlaceHolder = () => {
            if (titleRef.current.innerText.trim() === "") {
                setTitlePlaceholderState("block")
            } else setTitlePlaceholderState("none")
        }

        const setContentPlaceHolder = () => {
            if (contentRef.current.innerText.trim() === "") {
                setContentPlaceholderState("block")
            } else setContentPlaceholderState("none")
        }

        const uploadTodoList = async () => {
            if (contentRef.current !== null) {
                //Lấy thông tin input
                const titleInput = titleRef.current.innerText
                const contentInput = formatInputContent(contentRef.current.innerText)
                //Gửi input
                await uploadData(null, '/api/uploadTodolist', null, {id: localStorage.getItem('id')}, {title: titleInput}, {content: contentInput}, {attachments: []}, {deadline: null}, {todolistId: parseInt(listIdTodolist[0]) + 1})
                //Update input
                titleRef.current.innerText = ""
                contentRef.current.innerText = ""
                //Update lại placeholder
                setTitlePlaceholderState("block")
                setContentPlaceholderState("block")
                //Render note mới
                setListTodolist(prevList => [< ToDoListCard key={parseInt(listIdTodolist[0]) + 1} title={titleInput}
                                                            content={contentInput}
                                                            id={parseInt(listIdTodolist[0]) + 1}/>, ...prevList])
                //Update các thông tin khác
                setCountTodolist(countTodolist + 1)
                setListIdTodolist(currentList => ["" + (parseInt(listIdTodolist[0]) + 1), ...currentList])
                setDisplayDialog(false)
            }
        }

        return (
            <Dialog
                onClose={() => setDisplayDialog(false)} open={displayDialog}
                fullWidth maxWidth='sm'
                sx={{
                    '& .MuiPaper-root': {
                        background: "var(--side-background-color)",
                        color: 'var(--foreground-color)',
                        borderRadius: '20px',
                        overflowY: 'hidden'
                    },
                }}>
                <DialogTitle sx={{paddingBottom: '0 !important'}}>
                    <div style={{display: 'flex', justifyContent: 'flex-end',}}>
                        <Tooltip title='Đóng'>
                            <IconButton sx={{color: 'var(--foreground-color)'}} onClick={() => setDisplayDialog(false)}>
                                <CloseIcon sx={{'&:hover': {color: 'var(--foreground-color-hover)'}}}/>
                            </IconButton>
                        </Tooltip>
                    </div>
                </DialogTitle>
                <div className='temp-todolist todolist-card'>
                    <div className='temp-todolist-title'>
                        <p><strong>Tên công việc</strong></p>
                        <div className='temp-todolist-element-container'>
                            <div className='temp-todolist-placeholder' style={{display: titlePlaceholder}}>Nhập tên công
                                việc
                            </div>
                            <div className='temp-todolist-title-markup' onInput={() => setTitlePlaceHolder()}
                                 ref={titleRef} contentEditable suppressContentEditableWarning={false}></div>
                        </div>
                    </div>
                    {/* <div className='seperate-line'></div> */}
                    <div className='temp-todolist-content'>
                        <p><strong>Nội dung công việc</strong></p>
                        <div className='temp-todolist-element-container'>
                            <div className='temp-todolist-placeholder' style={{display: contentPlaceholder}}>Nhập nội
                                dung công việc
                            </div>
                            <div className='temp-todolist-content-markup' onInput={() => setContentPlaceHolder()}
                                 ref={contentRef} contentEditable suppressContentEditableWarning={false}></div>
                        </div>
                    </div>
                    {/* Sẽ được dùng sau
                        Phần này đang sử dụng component Date Picker của MUI */}
                    {/* <div className='date-picker'>
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                            <DatePicker
                                label='Thời hạn công việc'
                                disablePast
                                onChange={(newValue) => setDeadlineValue(newValue)}
                                sx={{
                                    '& input': { color: 'var(--foreground-color) !important', textDecoration: 'none', border: 'none' },
                                    "& MuiPickersDay-root.Mui-selected": {
                                        color: 'var(--foreground-color) !important'
                                    },
                                }}

                            />
                        </LocalizationProvider>
                    </div> */}
                    {/* <div className='temp-todolist-attachment'>
                        <input type="file" id="attachment-upload" onChange={(e) => setAttachment(e)} ref={attachmentRef} style={{ opacity: 0 }} hidden accept="image/*" />
                        <button onClick={() => attachmentRef.current.click()} className='temp-todolist-attachment--button'>Click để chọn hình ảnh</button>
                    </div> */}
                    {/* <div>
                        <Tooltip title='Thêm hình ảnh'>
                            <IconButton sx={{ color: 'var(--foreground-color)' }} onClick={() => attachmentRef.current.click()}>
                                <AddPhotoAlternateRoundedIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title='Thêm emoji'>
                            <IconButton sx={{ color: 'var(--foreground-color)' }}>
                                <EmojiEmotionsIcon />
                            </IconButton>
                        </Tooltip>
                    </div> */}
                    <div className='temp-todolist-button'>
                        <button className='todolist-complete maincta__btn' onClick={() => uploadTodoList()}>Hoàn tất
                        </button>
                    </div>
                </div>
            </Dialog>
        )
    }

    const AddToDoListCard = () => {
        return (
            <div className='todolist-card' id='todolist-add'
                 onClick={() => (displayDialog) ? setDisplayDialog(false) : setDisplayDialog(true)}>
                <AddCircleRoundedIcon sx={{fontSize: '60px', marginBottom: '1%'}}/>
                Click để thêm một công việc
            </div>
        )
    }
    const ToDoListCard = ({title, content, attachment, id}) => {
        const handleButton = async (type) => {
            switch (type) {
                case 'REMOVE': {
                    await uploadData(null, '/api/removeTodolist', null, {id: localStorage.getItem('id')}, {todolistId: id}, {isCompleted: false})
                    break
                }
                case 'COMPLETE': {
                    await uploadData(null, '/api/removeTodolist', null, {id: localStorage.getItem('id')}, {todolistId: id}, {isCompleted: true})
                    setCompletedTodolist(completedTodolist + 1)
                    break
                }
                default:
                    break
            }
            setListIdTodolist(listIdTodolist.filter(ele => ele !== id)) //Xóa id của todolist cần xóa trong danh sách
            setCountTodolist(countTodolist - 1)
        }

        return (
            <div className='todolist-card'>
                <h2><strong>{title}</strong></h2>
                <p style={{whiteSpace: 'pre-line'}}>{content}</p>
                <div className='todolist-button'>
                    <button className='todolist-remove' onClick={() => handleButton('REMOVE')}>Xóa công việc</button>
                    <button className='todolist-complete maincta__btn' onClick={() => handleButton('COMPLETE')}>Hoàn
                        thành
                    </button>
                </div>
            </div>
        )
    }

    return (
        <>
            {listTodolist !== null ? (
                <section id='todolist-component'>
                    {listTodolist}
                    < TempTodolist/>
                    <AddToDoListCard/>
                    <div><h4>Số việc đã hoàn thành: {completedTodolist}</h4></div>
                </section>
            ) : <LoadingComponent/>}
        </>
    )
}