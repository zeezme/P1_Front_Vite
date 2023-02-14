import React from 'react'
import { theme } from '../../../services/themeUtils'

export default function Navbar() {
  /*   const [theme, setTheme] = React.useState('light') */
  /*   const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  } */
  // initially set the theme and "listen" for changes to apply them to the HTML tag
  /*   React.useEffect(() => {
    try {
      document.querySelector('html')!.setAttribute('data-theme', theme)
    } catch (error) {
      console.error('Could not find <html> element')
    }
  }, [theme]) */

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center ">
        <a className=" normal-case text-xl font-bold">UNBOREFY</a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button
          className="btn btn-ghost btn-circle"
          onClick={() => {
            theme.setCookie('dark')
          }}
        >
          <div className="indicator">
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  )
}
