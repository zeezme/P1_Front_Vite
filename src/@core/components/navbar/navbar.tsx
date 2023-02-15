import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { theme } from '../../../services/themeUtils'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import LogoutButton from '../logoutButton'

export default function Navbar() {
  const cookies = new Cookies()

  const selectedTheme = useSelector(
    (state: RootState) => state.generalReducer.theme
  )

  const userData = cookies.get('token')

  const navigate = useNavigate()
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
      <div
        className="navbar-center btn btn-ghost"
        onClick={() => navigate('/')}
      >
        <a className=" normal-case text-xl font-bold">UNBOREFY</a>
      </div>
      <div className="navbar-end">
        <button
          className="btn btn-ghost btn-circle"
          onClick={() => navigate('/login')}
        >
          <AiOutlineUser size={24} />
        </button>
        <button
          className="btn btn-ghost btn-circle"
          onClick={() => {
            theme.toggleCookie()
          }}
        >
          <div className="indicator">
            {selectedTheme === 'dark' ? (
              <BsSunFill size={25} />
            ) : (
              <BsMoonFill size={18} />
            )}
          </div>
        </button>
        {userData && (
          <div className="indicator">
            <LogoutButton />
          </div>
        )}
      </div>
    </div>
  )
}
