import axios from "axios"

const BASE_URL = "http://localhost:3001/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY0OTMzMTkyMSwiZXhwIjoxNjQ5MzM1NTIxLCJzdWIiOiIxIn0._b5D-Y4hMvCIsiVX2964Rn1-idn5ZLoMPTtTU1iWKWU"

export const publicRequest = axios.create ({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token : `Bearer ${TOKEN}`}
})