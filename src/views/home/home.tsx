import React from 'react'

export default function Home() {
  return (
    <div className="container mx-auto prose mt-6">
      <h1 className=" font-bold text-center	">Welcome to unborefy</h1>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title">Total Page Views</div>
          <div className="stat-value">89,400</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
      </div>
    </div>
  )
}
