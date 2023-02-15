import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import { AppDispatch } from '../../redux/store'

export default function LogoutButton() {
  const cookies = new Cookies()
  const navigate = useNavigate()

  const logout = () => {
    cookies.remove('token')
    navigate('/')
    window.location.reload()
  }

  return (
    <div className="btn btn-outline btn-xs" onClick={logout}>
      logout
    </div>
  )
}
