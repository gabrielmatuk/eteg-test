import axios from 'axios'
import { URL } from '../constants/api'

const api = axios.create({
  baseURL: URL,
})

const getAllUsers = async () => {
  api.get('/users')
}
export default {
  getAllUsers
}