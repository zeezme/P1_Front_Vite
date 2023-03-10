import React from 'react'
import Spinner from '../../@core/components/spinner'
import VerticalLayout from '../../@core/layouts/verticalLayout'
import { verifyJwt } from '../../services/verifyJwt'

const Login = React.lazy(() => import('../../views/login/login'))
const PayWall = React.lazy(() => import('../../views/paywall/paywall'))
const Home = React.lazy(() => import('../../views/home/home'))

const getShow = async () => {
  const res = await verifyJwt()

  if (res) {
    return res.message === 'Authorized'
  }
}

export const routes = [
  {
    id: 0,
    name: 'home',
    path: '/',
    element: (
      <React.Suspense fallback={<Spinner />}>
        <Home />
      </React.Suspense>
    ),
    show: true,
    showLayout: true
  },
  {
    id: 1,
    name: 'login',
    path: '/login',
    element: (
      <React.Suspense fallback={<Spinner />}>
        <Login />
      </React.Suspense>
    ),
    show: true,
    showLayout: false
  },
  {
    id: 2,
    name: 'paywall',
    path: '/paywall',
    element: (
      <React.Suspense fallback={<Spinner />}>
        <PayWall />
      </React.Suspense>
    ),
    show: await getShow(),
    showLayout: true
  }
]
