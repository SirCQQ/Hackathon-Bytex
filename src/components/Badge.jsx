import React from 'react'
import useTheme  from '../hooks/themeHook'
export default function Badge({text}) {
  const {palette:{primary}}= useTheme()
  return (
    <span className='badge' style={{backgroundColor:primary.main,color:primary.contrastText}}>{text}</span>
  )
}
