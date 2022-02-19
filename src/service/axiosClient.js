/* eslint-disable no-console */
import axios from 'axios'

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,

  headers: {
    'content-type': 'application/json',
  },
})

axiosClient.interceptors.request.use(async (config) => {
  // handling token here

  return config
})

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data
    return response
  },
  (error) => {
    // handling error here
    console.log('ERROR API', error)
    throw error
  }
)

export default axiosClient
