import React, { Fragment, ReactNode } from 'react'
import { Outlet, OutletProps } from 'react-router-dom'
import Navbar from '../components/navbar/navbar'

export default function VerticalLayout() {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </Fragment>
  )
}
