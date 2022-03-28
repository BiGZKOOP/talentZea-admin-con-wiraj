import axios from "axios"
import {BASE_CLOUD_URL} from "./server"

const instance = axios.create({
    baseURL: BASE_CLOUD_URL
})

export default instance