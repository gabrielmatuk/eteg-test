import axios from 'axios'
import { URL } from '../constants/api'
import { UserDataForFetch } from '../types/userDataFetch'

const api = axios.create({
  baseURL: URL,
})

const getAllUsers = async () => {
  return api.get('/')
}

const createUser = async (data: UserDataForFetch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return api.post('/', data, config)
}
export default {
  getAllUsers,
  createUser
}