import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from '../@core/components/not-found'
import VerticalLayout from '../@core/layouts/verticalLayout'
import { RootState } from '../redux/store'
import { theme } from '../services/themeUtils'

import Home from '../views/home/home'

import { routes } from './routes'

export default function Router() {
  const themeUpdater = useSelector(
    (state: RootState) => state.generalReducer.theme
  )

  useEffect(() => {
    theme.verifyThemeCookie()
  }, [themeUpdater])

  const routesJson = routes.map((route) => {
    if (route.show === false) {
      return { ...route, element: <p>No permission</p> }
    }
    return route
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<VerticalLayout />}>
          <Route path="/" element={<Home />} />
          {routesJson.map((route) => {
            return (
              <Route key={route.id} path={route.path} element={route.element} />
            )
          })}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
