import React, {Fragment} from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../components/navbar/navbar'
export default function VerticalLayout() {
  return (
    <Fragment>
        <Navbar/>
        <Outlet />
    </Fragment>
  )
}
