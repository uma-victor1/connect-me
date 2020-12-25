import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/',
  Headers: { Accept: 'application/json' }
})

export default {
  getEvents() {
    return axiosInstance.get('/events')
  },
  getEvent(id) {
    return axiosInstance.get('/events/' + id)
  },
  postEvent(event) {
    return axiosInstance.post('/events', event)
  }
}
