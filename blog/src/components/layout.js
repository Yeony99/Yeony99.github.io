import React from 'react'
import Logo from '../images/logo.svg'
import { Link } from 'gatsby'
const ListLink = props => (
<li style={{display: `inline-block`, marginRight:`1rem`}}>
    <Link to={props.to}>{props.children}</Link>
</li>

)

export default ({children}) => (
  <div style={{margin:`3rem auto`, maxWidth:650, padding:`0 1rem`}}>
      <img src={Logo}/>
      <ul>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about">About</ListLink>
        <ListLink to="/contact">Contact</ListLink>

      </ul>
    {children}
  </div>
)
