/**
 * Preload data
 * @param {String} [url] - Custom address. In default, the value is: http://localhost:3110
 * @param {String} href - Href of request
 * @param {[String, any]} [urlParam] - List parameter of url
 */
export default async function preloadData(url, href, urlParam) {
    const baseUrl = (url) ? url : "http://localhost:3110"
    const formatParam = (urlParam) ? urlParam.map(([key, value], index) => (index > 0) ? `&${key}=${value}` : `${key}=${value}`) : []
    const param = "".concat(...formatParam)
    const reqUrl = (urlParam) ? baseUrl + `${href}?${param}` : baseUrl + href
    const request = await fetch(reqUrl)
    return await request.json()
}