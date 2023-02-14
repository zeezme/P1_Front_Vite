import Cookies from 'universal-cookie'
import { updateTheme } from '../redux/generalReducer'
import { store } from '../redux/store'

const cookies = new Cookies()

type ThemeType = 'light' | 'dark'

export const theme = {
  setCookie: (theme: ThemeType) => {
    cookies.set('theme', theme)
  },
  toggleCookie: () => {
    const response = cookies.get('theme')

    if (response === 'dark') {
      cookies.set('theme', 'light')
      store.dispatch(updateTheme('light'))
    } else {
      cookies.set('theme', 'dark')
      store.dispatch(updateTheme('dark'))
    }
  },

  getCookie: () => {
    const response = cookies.get('theme')
    return response
  },
  verifyThemeCookie: () => {
    const response = cookies.get('theme')

    if (response) {
      document.querySelector('html')!.setAttribute('data-theme', response)
    }
  }
}
