import axios from 'axios'
const apiClient = axios.create({
  baseURL:
    'https://raw.githubusercontent.com/Code-Pop/real-world-vue/master/db.json',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('')
  },
  getEvent(id) {
    return apiClient.get('' + id)
  }
}
