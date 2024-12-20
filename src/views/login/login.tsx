import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setFieldsValues, setUser } from './store'
import { useCookies } from 'react-cookie'
import { RootState } from '../../redux/store'
import { BiUser } from 'react-icons/bi'
import LoginSvg from '../../@core/components/svg/login/loginImage'

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

  const api_url = import.meta.env.VITE_API_URL
  const api_port = import.meta.env.VITE_API_PORT

  const submit = async () => {
    setLoading('loading')
    try {
      const res = await axios.post(
        `http://${api_url}:${api_port}/api/auth/signin`,
        {
          username: loginFields.email,
          password: loginFields.password
        }
      )
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
    <div className="">
      <div
        className=" h-screen flex flex-col items-center content-center w-3/4 pt-[100px] sm:invisible lg:visible"
        style={{ justifyContent: 'center' }}
      >
        <LoginSvg />
      </div>
      <div
        className=" fixed top-0 bottom-0 lg:right-0 sm:right-0 p-2 lg:w-[400px] sm:w-full sm:w-full xs:w-full overflow-y-auto text-center bg-gray-900"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <div className="text-2xl font-semibold  my-8">
          Bem vindo a P1 Store. faça seu login!
        </div>
        <div className="form-control flex flex-col  items-center">
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
          <button
            className={`btn btn-primary ${loading} w-full max-w-xs mt-8`}
            onClick={submit}
          >
            Entrar
          </button>
          <button
            className={`btn btn-ghost mt-8 `}
            onClick={() => navigate('/')}
          >
            Voltar à home
          </button>
        </div>
      </div>
    </div>

    /*  <div className="container grid content-center	justify-items-center  height-no-header">
      <div className="card w-96 bg-base-100 shadow-md">
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
    </div> */
  )
}
