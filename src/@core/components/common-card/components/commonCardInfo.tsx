import React, { Children, Fragment, ReactNode } from 'react'
interface Props {
  children?: ReactNode
}
export default function commonCardInfo({ children, ...props }: Props) {
  return <div className="commonCardInfo">{children}</div>
}
