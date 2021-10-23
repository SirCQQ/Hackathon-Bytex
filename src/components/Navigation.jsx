import React from 'react'
import useTheme from '../hooks/themeHook'
import {useSelector}from 'react-redux'
export default function Navigation() {
  const {palette:{primary}}= useTheme()
  const user = useSelector(state => state.user)
  return (
    <nav className='navigation-bar'style={{backgroundColor:primary.main,color:primary.contrastText}}>
      <div className='company'>Company Name</div>
      <div className="user-name">{`Welcome back, ${user.name}`}</div>
    </nav>
  )
}
