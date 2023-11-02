import axios from "axios";

const http = axios.create({
    baseURL: 'https://api.plataformainatu.com.br:4001/'
})

export default http