/**
 * Upload data by POST method with customize action
 * @param {*} url - Url, value in default is: http://localhost:3110
 * @param {*} apiName - Name of api that request will be sent
 * @param {*} action - Callback that perform action by the param
 * @param  {...any} param - A js normal object
 */
export default async function uploadData(url, apiName, action, ...param) {
    const baseUrl = (url) ? url + apiName : "http://127.0.0.1:3110" + apiName
    const body = Object.assign({}, ...param)
    const defaultAction = (response) => response.ok
    return await fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    }).then(response => (action) ? action(...param) : defaultAction(response))
}