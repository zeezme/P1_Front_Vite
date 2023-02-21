import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'
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
