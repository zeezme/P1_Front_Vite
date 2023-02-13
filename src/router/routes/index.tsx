import React from 'react'
import { verifyJwt } from '../../services/verifyJwt'

/* const Login = React.lazy(() => import('../../views/login/login')) */
const PayWall = React.lazy(() => import('../../views/paywall/paywall'))

const getShow = async () => {
  const res = await verifyJwt()

  if (res) {
    return res.message === 'Authorized'
  }
}

export const routes = [
  {
    id: 1,
    name: 'login',
    path: '/t2',
    element: (
      <React.Suspense fallback={<p>Loading</p>}>
        <PayWall />
      </React.Suspense>
    ),
    show: true
  },
  {
    id: 2,
    name: 'paywall',
    path: '/paywall',
    element: (
      <React.Suspense fallback={<p>Loading</p>}>
        <PayWall />
      </React.Suspense>
    ),
    show: await getShow()
  }
]
