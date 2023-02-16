import axios from 'axios'
import Cookies from 'universal-cookie'

export const api = {
  get: (url: string) => {
    const cookies = new Cookies()
    const token = cookies.get('token')
    console.log(token.accessToken)

    const options = {
      method: 'GET',
      url: 'http://localhost:8080/api' + url + '/',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token.accessToken
      }
    }
    const response = axios.request(options)
    return response
  }
}
