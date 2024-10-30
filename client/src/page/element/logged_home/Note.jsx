import React, {useEffect, useRef, useState} from "react";
import preloadData from "../../../api/preloadData";
import {Tooltip} from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import uploadData from "../../../api/uploadData";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import formatInputContent from "../../../helper/formatInput";
import AttachmentRoundedIcon from "@mui/icons-material/AttachmentRounded";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import LoadingComponent from "../../components/LoadingComponent";
import '../../../style/element/logged_home/Note.css'

export default function NoteComponent() {
    const [listNote, setListNote] = useState(null)
    const [countNote, setCountNote] = useState(0)
    const [listIdNote, setListIdNote] = useState([])
    const attachmentRef = useRef(null)
    useEffect(() => {
        const fetchData = async () => {
            await preloadData(null, "/api/loadNote", [["id", localStorage.getItem('id')]])
                .then(data => {
                    const listComponent = data.map((note, index) => {
                        if (index === 0) setCountNote(parseInt(note.id))
                        setListIdNote(prev => [...prev, parseInt(note.id)])
                        return <MessageComponent content={note.content} time={note.upload_time} key={note.id} id={note.id}/>
                    })
                    setTimeout(() => {
                        setListNote(listComponent)
                    }, 350)

                })
        }
        fetchData()
    }, [countNote]) // [] để chỉ chạy 1 lần

    const MessageComponent = ({content, time, id}) => {

        const ContentComponent = () => {
            const refComponent = useRef(null)
            //Set innerHTML ngay khi render
            useEffect(() => {
                refComponent.current.innerHTML = content
            })
            return (
                //Style pre-line này giúp hiển thị các dòng
                <span style={{whiteSpace: "pre-line", userSelect: 'text'}} ref={refComponent}></span>
            )
        }
        return (
            <div className="note-component">
                <div className='note-component-function'>
                    <Tooltip title="Chỉnh sửa" sx={{marginRight: '0'}}>
                        <EditRoundedIcon/>
                    </Tooltip>
                    <Tooltip title="Xóa ghi chú" sx={{marginLeft: '5%'}}
                             onClick={async () => {
                                 await uploadData(null, '/api/removeNote', null, {id: localStorage.getItem('id')}, {noteId: id})
                                 setListIdNote(listIdNote.filter(ele => ele !== id)) //Xóa id của note cần xóa trong danh sách
                                 setCountNote(countNote - 1)
                             }}
                    >
                        <DeleteRoundedIcon/>
                    </Tooltip>
                </div>
                <ContentComponent/>
                <h5>
                    {time}
                </h5>
            </div>
        )
    }

    const InputNote = () => {
        const [placeholderState, setPlaceholderState] = useState('')
        const inputRef = useRef(null)
        const setPlaceHolderDisplay = () => {
            if (inputRef.current.innerText.trim() === "") {
                setPlaceholderState("block")
            } else {
                setPlaceholderState("none")
            }
        }
        return (
            <div id="input-area" tabIndex={0}>
                <div className="placeholder" style={{display: placeholderState}}>Hôm nay của bạn có gì?</div>
                {/* Note: Không được có child component vì React không biết prop.children thay đổi gì => Không update Virtual DOM được */}
                <div id="input-area__markup" contentEditable ref={inputRef} onInput={() => setPlaceHolderDisplay()}
                     suppressContentEditableWarning={false}></div>
                <InputFunction inputRef={inputRef.current} setPlaceholderState={() => setPlaceholderState("none")}/>
            </div>
        )
    }

    const InputFunction = ({inputRef, setPlaceholderState}) => {
        const handleSendNote = async () => {
            if (inputRef !== null) {
                //Gửi thông tin đến server
                const input = formatInputContent(inputRef.innerText)
                const uploadtime = new Date().toLocaleString()
                // sendNote(input, uploadtime, [], countNote)
                await uploadData(null, '/api/uploadnote', null, {id: localStorage.getItem('id')}, {content: input}, {attachment: []}, {uploadtime: uploadtime}, {noteId: listIdNote[0] + 1})
                //Update lại input
                inputRef.innerText = ""
                setPlaceholderState("block")
                //Render note mới lên page
                setListNote(prevList => [<MessageComponent content={input} time={uploadtime}
                                                           key={listIdNote[0] + 1}/>, ...prevList])
                //Update lại thông tin mới
                setListIdNote(prev => [listIdNote[0] + 1, ...prev])
                setCountNote(countNote + 1)
            }

        }

        return (
            <div id="input-area__function">
                <div id="input-area__function-attachment">
                    <input type="file" id="attachment-upload" /*onChange={(e) => setAttachment(e)}*/ ref={attachmentRef}
                           style={{opacity: 0}} hidden accept="image/*"/>
                    <Tooltip title="Tệp đính kèm">
                        <AttachmentRoundedIcon sx={{fontSize: 26}} onClick={() => attachmentRef.current.click()}/>
                    </Tooltip>
                </div>
                <div id="input-area__function-emoji">
                    <Tooltip title="Emoji">
                        <EmojiEmotionsIcon sx={{fontSize: 26}}/>
                    </Tooltip>
                </div>
                <div id="input-area__function-send" onClick={() => handleSendNote()}>
                    <Tooltip title="Gửi">
                        <SendRoundedIcon sx={{fontSize: 26}}/>
                    </Tooltip>
                </div>
            </div>
        )
    }

    return (
        <>
            <div id="note-area">
                {listNote !== null ? <>{listNote}</> : <LoadingComponent/>}
            </div>
            <InputNote/>
        </>
    )
}