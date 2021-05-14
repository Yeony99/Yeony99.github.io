import React from 'react'
import Logo from '../images/logo.svg'

export default ({children}) => (
  <div style={{margin:`3rem auto`, maxWidth:650, padding:`0 1rem`}}>
      <img src={Logo}/>
    {children}
  </div>
)
