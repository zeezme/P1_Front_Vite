import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setFieldsValues, setUser } from './store'
import { useCookies } from 'react-cookie'
import { RootState } from '../../redux/store'
export default function Login() {
  const [cookies, setCookie] = useCookies(['token'])
  const dispatch = useDispatch()

  const loginFields = useSelector((state: RootState) => state.login.fields)

  const user = cookies['token']

  const navigate = useNavigate()

  useEffect(() => {
    if (user !== undefined) {
      navigate('/paywall')
      window.location.reload()
    }
  }, [user])

  const onChange = (field: string, value: any) => {
    dispatch(
      setFieldsValues({
        field,
        value
      })
    )
  }

  const [loginErrorUser, setLoginErrorUser] = useState('')
  const [loginErrorPass, setLoginErrorPass] = useState('')
  const [loading, setLoading] = useState('')

  const submit = async () => {
    setLoading('loading')
    try {
      const res = await axios.post('http://localhost:8080/api/auth/signin', {
        username: loginFields.email,
        password: loginFields.password
      })
      if (res.status === 200) {
        setLoading('loading')

        setCookie('token', res.data)
        dispatch(setUser(res.data))
        return res.data
      }
    } catch (error: any) {
      if (error.response.data.message === 'User Not found.') {
        setLoading('')
        setLoginErrorUser('input-error')
      }
      if (error.response.data.message === 'Invalid Password!') {
        setLoading('')
        setLoginErrorPass('input-error')
      }
    }
  }
  return (
    <div className="container">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Nome</span>
            </label>
            <input
              type="text"
              className={`input input-bordered w-full max-w-xs  ${loginErrorUser}`}
              onChange={(e) => {
                onChange('email', e.target.value)
              }}
            />
            <label className="label">
              <span className="label-text">Senha</span>
            </label>
            <input
              type="password"
              className={`input input-bordered w-full max-w-xs ${loginErrorPass} `}
              onChange={(e) => onChange('password', e.target.value)}
            />
          </div>
          <div className="card-actions justify-end">
            <button className={`btn btn-primary ${loading}`} onClick={submit}>
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
