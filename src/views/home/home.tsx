import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../../@core/components/product-card/productCard'
import { RootState } from '../../redux/store'
import { Slider, SwiperSlide } from '../../@core/components/slider'
import type { AppDispatch } from '../../redux/store'
import { getProducts } from './store'

export default function Home() {
  const productsList = useSelector((state: RootState) => state.home.fields)
  const dispatch: AppDispatch = useDispatch()
  const responsiveSlidesPerView = () => {
    const between = (x: number, min: number, max: number) => {
      return x >= min && x <= max
    }
    if (window.screen.width < 600) return 1
    if (between(window.screen.width, 600, 1000)) return 2
    if (between(window.screen.width, 1000, 1558)) return 3
    if (window.screen.width > 1558) return 5
  }

  const settings = {
    spaceBetween: 0,
    slidesPerView: responsiveSlidesPerView(),

    autoplay: {
      delay: 5000
    },
    loop: true,
    loopFillGroupWithBlank: true
  }

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <div className="container ">
      <Slider settings={settings}>
        {productsList?.map((items: any) => (
          <SwiperSlide>
            <ProductCard
              key={items.id}
              tag="oferta"
              image={items.image}
              text={items.category}
              title={items.title}
              price={items.price}
              rating={items.rating.rate}
              ratingCount={items.rating.count}
            />
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  )
}
