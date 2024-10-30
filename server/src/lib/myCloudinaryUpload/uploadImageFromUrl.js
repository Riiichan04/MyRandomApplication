const router = require('express').Router()
const cloudinary = require('../../../config/configCloudinary')
const e = require('express')

/**
 * @typedef {Object} UploadResult
 * @property {String} publicId - Public ID of image
 * @property {String} url - url sau khi upload
 */

/**
 * 
 * @param {e.Request} req Express `Request`
 * @param {String} [url] Url của hình
 * @param {import('cloudinary').UploadApiOptions} [options] Options dùng trong method upload. Mặc định sẽ không có option
 * @returns {UploadResult}
 */
module.exports = async function uploadSingleImageFromUrl(req, url, options) {
    if (!req.query.url && !url) return null
    const imageUrl = req.query.url
    return await cloudinary.uploader.upload(imageUrl, options)
        .then(result => new Object({ publicId:  result.public_id, url: result.url }))
        .catch(err => {
            console.log(err)
            return null
        })

}