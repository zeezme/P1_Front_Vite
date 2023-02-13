import axios from 'axios'
import Cookies from 'universal-cookie'

export const verifyJwt = async () => {
  const cookies = new Cookies()

  const userData = cookies.get('token')

  const parseJwt = (token: string) => {
    try {
      return JSON.parse(atob(token.split('.')[1]))
    } catch (e) {
      return null
    }
  }

  const api = axios.create({
    baseURL: 'http://localhost:8080/api/test',
    timeout: 8000,
    headers: {
      'x-access-token': userData?.accessToken
    }
  })

  if (userData) {
    try {
      const decodedJwt = parseJwt(userData?.accessToken)
      if (decodedJwt.exp * 1000 < Date.now()) {
        cookies.remove('token')
      }

      const res = await api.get('/user')

      return { status: res.status, message: 'Authorized' }
    } catch (error) {
      let status = 500
      let message = 'Unknown Error'
      if (error instanceof Error) {
        return { status: 500, message: 'Unauthorized' }
      }
    }
  } else {
    return { status: 440, message: 'Unauthorized' }
  }
}
