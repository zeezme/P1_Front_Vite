import React from 'react'

export default function Navbar() {
  const [theme, setTheme] = React.useState('light')
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  // initially set the theme and "listen" for changes to apply them to the HTML tag
  React.useEffect(() => {
    try {
      document.querySelector('html')!.setAttribute('data-theme', theme)
    } catch (error) {
      console.error('Could not find <html> element')
    }
  }, [theme])

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={50}
          height={50}
          viewBox="0 0 128 128"
          className="fill-neutral-content"
        >
          <path d="M51.2 3c-3.3 2-7.1 8.7-7.2 12.4 0 1.1.9 3.9 2.1 6.2 3.7 7.7 13.6 10.5 20.6 5.9 5.7-3.8 8.1-13.1 4.8-19.5-3.4-6.6-13.6-9.1-20.3-5z" />
          <path d="M23.2 12.7c-7.5 3.7-14.9 16-17.6 29.5-1.8 8.7-2.1 27.4-.6 33 .6 2 2.6 5 4.6 6.7l3.5 3.1h40.8l.3 19.1.3 19.1 2.8 2.4c3.8 3.2 7.2 3.1 10.8-.6l3-2.9-.3-24.6-.3-24.6L68 71c-2.2-1.7-4.2-2-16.2-2H38V50.7l-6.5-11.2c-6.8-11.7-7.6-13.9-4.9-13.3.9.2 5.1 6.3 9.4 13.6 4.2 7.4 8.3 13.8 9.1 14.3.8.5 8 .9 16.2.9 13.4 0 14.9-.2 16.7-2 2.8-2.8 2.5-6.4-.6-8.9-2.3-1.8-4.1-2.1-13.9-2.1H52.2l-7.7-13.3c-4.3-7.2-8.7-14.2-9.8-15.5-2.4-2.6-6.8-2.9-11.5-.5z" />
          <path d="M48 61.5V65h72v-7H48v3.5z" />
        </svg>
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
        <button className="btn btn-ghost btn-circle" onClick={toggleTheme}>
          <div className="indicator">
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
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  )
}
