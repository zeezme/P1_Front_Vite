import React from 'react'

interface productCardInterface {
  tag?: string
  text?: string
  title?: string
  price: number
  rating?: number
  ratingCount?: number
  image: string
}
export default function ProductCard({
  tag,
  text,
  title,
  price,
  rating,
  ratingCount,
  image
}: productCardInterface) {
  return (
    <div className="commonCardImg mb-20 mx-20">
      <div>
        <div className="w-full object-cover object-center rounded-t-lg shadow-md max-w-xs p-16 bg-white h-64 flex content-center items-center">
          <img src={image} alt=" random imgee" className="h-max-40" />
        </div>

        <div className="relative  ">
          <div className="bg-base-100 p-6 rounded-b-lg shadow-md">
            <div className="flex items-baseline">
              {tag && (
                <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  {tag}
                </span>
              )}
              {text && (
                <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                  {text}
                </div>
              )}
            </div>

            {title && (
              <div className="tooltip" data-tip={title}>
                <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate w-56">
                  {title}
                </h4>
              </div>
            )}

            {price && <div className="mt-2">${price}</div>}
            <div className="mt-2 flex flex-col">
              {rating && (
                <div className="flex flex-col ">
                  Avaliações
                  <div className="flex flex-row align-center justify-between">
                    <progress
                      className="progress progress-primary w-48 my-2"
                      value={rating}
                      max="5"
                    />
                    <div className="">{Math.round((rating * 100) / 5)}%</div>
                  </div>
                </div>
              )}
              {ratingCount && (
                <span className="text-sm text-gray-600">
                  (Baseado em {ratingCount} avaliações)
                </span>
              )}
              <button className="btn btn-primary mt-2">Comprar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
