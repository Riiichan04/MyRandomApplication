const router = require('express').Router()
const cloudinary = require('../../../config/configCloudinary')
const e = require('express')
require('dotenv').config({ path: "./config/.env" })

/**
 * @typedef {Object} UploadResult
 * @property {String} publicId - Public ID of image
 * @property {String} url - url sau khi upload
 */

/**
 * 
 * @param {e.Request} req Express `Request`
 * @param {import('cloudinary').UploadApiOptions} options Options dùng trong method upload. Mặc định sẽ có `public_id` và `folder`
 * @returns {UploadResult}
 */
module.exports = async function uploadMultipleImage(req, options) {

    req.files.forEach(async file => {
        const folderName = "/" + req.query.folder || ""
        try {
            const publicId = folderName + req.file.originalname.substring(0, req.file.originalname.lastIndexOf("."))
            const result = await cloudinary.uploader.upload_stream(Object.assign({ public_id: publicId, folder: folderName }, options), (err, result) => {
                if (err) {
                    return new Error("Lỗi trong khi upload hình")
                }
            }).end(req.file.buffer)

            return {
                publicId: publicId,
                url: `${process.env.CLOUDINARY_LINK}${folderName}/${req.file.originalname}`
            }
        }
        catch (err) {
            console.log(err)
            return null
        }
    })


}