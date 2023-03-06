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
  const redirect = useNavigate()
  const selectedTheme = useSelector(
    (state: RootState) => state.generalReducer.theme
  )

  const userData = cookies.get('token')

  const navigate = useNavigate()
  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="navbar-start"></div>
      <div
        className="navbar-center btn btn-ghost"
        onClick={() => navigate('/')}
      >
        <a className=" normal-case text-xl font-bold">P1 Store</a>
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
