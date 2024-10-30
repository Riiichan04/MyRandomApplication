const router = require('express').Router()
const multer = require('multer')
const uploadSingleImage = require('../lib/myCloudinaryUpload/uploadSingleImage')
require('dotenv').config({ path: "./config/.env" })

const uploadImage = multer({
    storage: multer.memoryStorage(),
    limits: {
        files: 1
    },
    fileFilter: (req, file, callback) => {
        if (file.mimetype.startsWith('image/')) callback(null, true)
        else callback(new Error("Đây đâu phải hình!!! Chọn cái khác điiii"), false)
    }
})

router.post("/forceUploadImage", uploadImage.single('image'), async (req, res) => {
    const uploadImage = await uploadSingleImage(req);    
    (uploadImage) ? res.status(200).json(uploadImage) : res.status(500).json(false)
})

module.exports = router