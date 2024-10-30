const multer = require('multer')
/**
 * Mặc định dùng memoryStorage, nếu muốn đổi hãy dùng storage trong option
 * 
 * Chỉ upload 1 image/lần
 * @param {multer.Options} option 
 * @returns {multer.Multer}
 */
function configMulter(option) {
    const defaultOption = {
        storage: multer.memoryStorage(),
        limits: {
            files: 1,
            fileSize: 10*1000*1000 //Giới hạn 10MB
        },
        fileFilter: (req, file, callback) => {
            if (file.mimetype.startsWith('image')) callback(null, true)
            else callback(new Error("Đây không phải hình!!! Chọn cái khác điiii"), false)
       }
    }
    //Tự động gộp thuộc tính hoặc ghi đè từ param lên
    const multerOption = Object.assign(defaultOption, option)
    return multer(multerOption)
}

module.exports = { configMulter }