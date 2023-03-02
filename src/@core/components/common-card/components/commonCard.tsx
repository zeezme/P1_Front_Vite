import React, { Children, ReactNode } from 'react'
interface Props {
  children?: ReactNode
}
export default function CommonCard({ children, ...props }: Props) {
  return <div className="commonCard shadow-xl">{children}</div>
}
