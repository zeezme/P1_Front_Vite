import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { Slider, SwiperSlide } from '../../@core/components/slider'

export default function Home() {
  const settings = {
    spaceBetween: 5,
    slidesPerView: 4,
    pagination: {
      clickable: true
    },
    autoplay: {
      delay: 5000
    },
    loop: true,
    loopFillGroupWithBlank: true
  }

  const [tempDB, setTempDB] = useState<Array<{ strDrink: string }>>([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin'
        )
        setTempDB(response.data.drinks)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  console.log(tempDB)

  return (
    <Fragment>
      <div className="navbar bg-red-600 text-primary-content">
        <div className="navbar-end">
          <button className="btn btn-ghost">Junte-se ao clube</button>
        </div>
      </div>
      <div className=" my-5">
        <Slider settings={settings}>
          {tempDB?.map((item) => (
            <SwiperSlide>
              <div className="card sm:mx-auto lg:w-96 card-compact bg-base-100 shadow-lg mb-10">
                <figure className=" w-25">
                  <img src={`${item.strDrinkThumb}`} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.strDrink}</h2>
                  <p>Sim, isso é apenas um teste.</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Bênis</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </Fragment>
  )
}
