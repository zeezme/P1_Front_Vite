import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import {
  CommonCard,
  CommonCardImg,
  CommonCardInfo
} from '../../@core/components/common-card/index'
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

  return (
    <Fragment>
      <CommonCard>
        <CommonCardImg img="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />

        <CommonCardInfo>AAA</CommonCardInfo>
      </CommonCard>
    </Fragment>
  )
}
