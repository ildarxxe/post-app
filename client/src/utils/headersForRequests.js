import getToken from "./getToken.js"
const headers = (additional_headers = null) => {
    return { "Authorization": "Bearer " + getToken(), additional_headers }
}
export default headers;