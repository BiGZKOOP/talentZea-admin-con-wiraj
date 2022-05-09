import axios from "axios"
import {BASE_CLOUD_URL, BASE_LOCAL_URL} from "./server"

const instance = axios.create({
    baseURL: BASE_CLOUD_URL
    // baseURL: BASE_LOCAL_URL
})

export default instance