const router = require('express').Router()
const e = require('express')
const cloudinary = require('../../../config/configCloudinary')
const sharp = require('sharp')
require('dotenv').config({ path: "./config/.env" })


/**
 * @typedef {Object} UploadResult
 * @property {String} publicId - Public ID of image
 * @property {String} url - url sau khi upload
 */

/**
 * 
 * @param {e.Request} req Express `Request`
 * @param {import('cloudinary').UploadApiOptions} [options] Options dùng trong method upload. Mặc định sẽ có `public_id` và `folder`.
 * Với Folder được lấy từ url param, public_id là original name của hình
 * @returns {UploadResult}
 */
module.exports = async function uploadSingleImage(req, options) {
    try {
        const folderName = (req.query.folder) ? "/" + req.query.folder : ""
        let fileBuffer = req.file.buffer
        let originalName = req.file.originalname
        const fileFilter = new Set(["gif", "webp"])
        //Tự động chuyển mọi image về webp
        if (!fileFilter.has(req.file.mimetype.substring(req.file.mimetype.lastIndexOf("/") + 1))) {
            fileBuffer = await sharp(fileBuffer).webp().toBuffer()
            originalName = req.file.originalname.replace(req.file.originalname.substring(req.file.originalname.lastIndexOf(".") + 1), "webp")
        }
        const publicId = req.file.originalname.substring(0, req.file.originalname.lastIndexOf("."))
        const result = cloudinary.uploader.upload_stream(Object.assign({ public_id: publicId, folder: folderName }, options), (err, result) => {
            if (err) {
                return new Error("Lỗi trong khi upload hình")
            }
        }).end(fileBuffer)
        
        return {
            publicId: publicId,
            url: `${process.env.CLOUDINARY_LINK}${folderName}/${originalName}`
        }
    }
    catch (err) {
        console.log(err)
        return null
    }
}