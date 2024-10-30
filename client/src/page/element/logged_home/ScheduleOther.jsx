import {Tooltip} from "@mui/material";
import ComingSoon from "../../components/ComingSoon";
import React from "react";
//Bí idea => Sửa sau
export default function ScheduleComponent() {
    //Làm sau
    const WeekTemplate = ({row, rowName, data}) => {
        return (
            <>
                <table className='table-template-week'>
                    <thead className='table-template-week--header'>
                    <tr>
                        <th></th>
                        <th>Thứ 2</th>
                        <th>Thứ 3</th>
                        <th>Thứ 4</th>
                        <th>Thứ 5</th>
                        <th>Thứ 6</th>
                        <th>Thứ 7</th>
                        <th>Chủ Nhật</th>
                    </tr>
                    </thead>
                    <tbody className='table-template-week--body'>
                    <tr>
                        <th>Ca 1</th>
                        <th></th>
                        <th></th>
                        <th><Tooltip title={"Phòng: CT102\n Giảng viên: Phạm Văn Tính"}>Lập trình mạng</Tooltip></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>Ca 2</th>
                        <th></th>
                        <th></th>
                        <th><Tooltip title={"Phòng: P4\n Giảng viên: Phạm Văn Tính"}>Lập trình mạng (TH)</Tooltip></th>
                        <th></th>
                        <th><Tooltip title={"Phòng: P4\n Giảng viên: Phan Đình Long"}>Lập trình Web (TH)</Tooltip></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>Ca 3</th>
                        <th></th>
                        <th><Tooltip title={"Phòng: HD301\n Giảng viên: Nguyễn Văn Dũ"}>Lập trình Python</Tooltip></th>
                        <th></th>
                        <th><Tooltip title={"Phòng: HD301\n Giảng viên: Nguyễn Văn Dũ"}>Nhập môn AI</Tooltip></th>
                        <th></th>
                        <th><Tooltip title={"Phòng: RD306\n Giảng viên: Phan Đình Long"}>Lập trình Web</Tooltip></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>Ca 4</th>
                        <th><Tooltip title={"Phòng: RD100\n Giảng viên: Nguyễn Thị Hồng"}>Lịch sử Đảng</Tooltip></th>
                        <th><Tooltip title={"Phòng: P2\n Giảng viên: Nguyễn Văn Dũ"}>Lập trình Python (TH)</Tooltip></th>
                        <th></th>
                        <th><Tooltip title={"Phòng: P1\n Giảng viên: Nguyễn Văn Dũ"}>Nhập môn môn AI (TH)</Tooltip></th>
                        <th></th>
                        <th></th>
                    </tr>
                    </tbody>
                </table>
                <ComingSoon/>
            </>

        )
    }

    return (
        <>
            <WeekTemplate/>
        </>
    )
}