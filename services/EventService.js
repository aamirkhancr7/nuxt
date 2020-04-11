import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://gist.githubusercontent.com/aamirkhancr7/528f0b8cfb9fa0f78dc8bac658714647/raw/284ac8c42d0aac754f981d24102689f68f94c9b9/app.json`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/events')
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  }
}
