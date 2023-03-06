import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import type { AppDispatch } from '../../redux/store'

export default function Home() {
  const productsList = useSelector((state: RootState) => state.home.fields)
  const dispatch: AppDispatch = useDispatch()

  return <div className="container ">AAAAAAAA</div>
}
