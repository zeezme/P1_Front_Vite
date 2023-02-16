import React from 'react'
import { useDispatch } from 'react-redux'
import { getProducts } from './store'
import type { AppDispatch } from '../../redux/store'

export default function PayWall() {
  const dispatch: AppDispatch = useDispatch()

  return (
    <div className="container sm:mx-auto ">
      <div className="card sm:mx-auto lg:w-96 card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Batata!</h2>
          <p>Sim, isso é apenas um teste.</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => {
                dispatch(getProducts())
              }}
            >
              Bênis
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
