import axios from 'axios'
import Nprogress from 'nprogress'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/',
  Headers: { Accept: 'application/json' },
  timeout: 10000
})

axiosInstance.interceptors.request.use(config => {
  Nprogress.start()
  return config
})
axiosInstance.interceptors.response.use(config => {
  Nprogress.done()
  return config
})

export default {
  getEvents(perpage, page) {
    return axiosInstance.get('/events?_limit=' + perpage + '&_page=' + page)
  },
  getEvent(id) {
    return axiosInstance.get('/events/' + id)
  },
  postEvent(event) {
    return axiosInstance.post('/events', event)
  }
}
