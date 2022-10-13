import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

export default function Navigation() {
  return (
    <div className='Navigation'>
        <Link to='/'>HOME</Link>
        <Link to='/About'>ABOUT</Link>
    </div>
  )
}
