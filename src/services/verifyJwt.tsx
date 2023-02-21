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
  const api_url = import.meta.env.VITE_API_URL
  const api_port = import.meta.env.VITE_API_PORT

  const api = axios.create({
    baseURL: `http://${api_url}:${api_port}/api/test`,
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
      if (error instanceof Error) {
        return { status: 500, message: 'Unauthorized' }
      }
    }
  } else {
    return { status: 440, message: 'Unauthorized' }
  }
}
