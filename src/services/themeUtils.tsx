import Cookies from 'universal-cookie'

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
    } else cookies.set('theme', 'dark')
  },

  getCookie: () => {
    const response = cookies.get('theme')
    return response
  },
  verifyThemeCookie: () => {
    const response = cookies.get('theme')
    console.log(response)

    if (response) {
      document.querySelector('html')!.setAttribute('data-theme', response)
    }
  }
}

/* export const setThemeOnCookie = (theme: ThemeType) => {
  cookies.set('theme', theme)
}

export const getTheme = () => {
  const response = cookies.get('theme')
  return response
}

export const verifyThemeCookie = () => {
  const response = cookies.get('theme')
  console.log(response)

  /* if (response) {
        document.querySelector('html')!.setAttribute('data-theme', theme)
    } */
