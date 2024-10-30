const express = require("express");
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs')
const path = require('path')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

//Dev route
const customQuery = require('./dev/customQuery')
const uploadImg = require('./dev/uploadImgToCloud')
app.use('/api/dev', customQuery)
app.use('/api/dev', uploadImg)

app.listen(3110, () => {
    console.log("Listening on port 3110...");
});

uploadApi(path.join(__dirname, "/api"), (directoryPath) => {
    const apiFile = require(directoryPath)
    app.use('/api', apiFile)
})
uploadApi(path.join(__dirname, "/service"), (directoryPath) => {
    const apiFile = require(directoryPath)
    app.use('/api', apiFile)
})

/*
Dùng path.join để tự lấy filepath tính từ ổ đĩa => abs file path <=> cả fs và require module đều hiểu. Lý do:
    1. fs tính từ THƯ MỤC chứa file hiện tại
    2. require tính từ module (file) hiện tại
*/
// uploadApi(path.join(__dirname, "/api")) 

/**
 * 
 * @param {String} filePath 
 */
function uploadAsset(filePath) {
    //Kiểm tra xem có phải directory không
    const stats = fs.lstatSync(filePath)
    if (stats.isDirectory()) {
        //Đệ quy vào directory con
        fs.readdirSync(filePath).forEach(file => {
            uploadAsset(`${filePath}/${file}`)
        })
    }
    else {
        const input = filePath.substring(filePath.indexOf("/", filePath.indexOf("/") + 1))
        // console.log(path.dirname(__dirname) + '/asset' + input)
        app.get("/asset" + input, (req, res) => {
            res.sendFile(path.dirname(__dirname) + '/asset' + input)
        })
    }
}

function uploadApi(directoryPath, uploadFunction) {
    const lstat = fs.lstatSync(directoryPath)
    if (lstat.isDirectory()) {
        fs.readdirSync(directoryPath).forEach(file => {
            uploadApi(`${directoryPath}/${file}`, uploadFunction)
        })
    }
    else {
        //Callback: Gọi 1 function trong 1 function
        //Vấn đề tham số trong callback: Cứ đặt tham số trong khi gọi callback. 
        //=> Khi người dùng viết lại function, js sẽ tự hiểu parameter đó <=> Callback được cung cấp thành phần và kết quả của function
        //=> Bản chất, function đã thực hiện xong và chuyển lại (nếu cần) kết quả cho callback thực hiện tiếp
        uploadFunction(directoryPath)
    }
}