import axios from 'axios'
import Cookies from 'universal-cookie'

export const api = {
  get: async (url: string) => {
    const cookies = new Cookies()
    const token = cookies.get('token')
    const api_url = import.meta.env.VITE_API_URL
    const api_port = import.meta.env.VITE_API_PORT
    /* console.log('http://' + api_url + ':' + api_port + '/api' + url + '/') */

    const options = {
      method: 'GET',
      url: 'http://' + api_url + ':' + api_port + '/api' + url + '/'
      /*  headers: {
        'Content-Type': 'application/json',
        'x-access-token': token.accessToken
      } */
    }
    const response = await axios.request(options)
    return response
  }
}
