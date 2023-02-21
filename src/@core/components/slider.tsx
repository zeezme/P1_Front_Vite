import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, Autoplay, SwiperOptions } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface SliderProps {
  settings: SwiperOptions
  children: React.ReactNode
  className?: string
}

export function Slider({ settings, children }: SliderProps) {
  return (
    <Swiper modules={[Navigation, Pagination, A11y, Autoplay]} {...settings}>
      {children}
    </Swiper>
  )
}

export { SwiperSlide }
