// import React from 'react'
import Card from './navcard/Card'
import Nav from './nav/Nav'
import 'animate.css'

export default function Layout() {
  return (
    <div>
      <Card/>
      <div style={{ position: "relative", zIndex: "1" }} className=''>
        <Nav />
      </div>

      
      <div className="rounder_img">
        <img loading="lazy" src="https://i.imgur.com/tiHcu1S.png" alt="" />
      </div>
      
    </div>
  )
}
