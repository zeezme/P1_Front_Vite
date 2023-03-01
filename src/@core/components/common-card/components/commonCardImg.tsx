import React, { ReactNode } from 'react'
interface Props {
  img: string
}
export default function commonCardImg(props: Props) {
  return <img className="commonCardImg" src={props.img} />
}
