import React from 'react'
import Logo from '../images/logo.svg'
import { Link } from 'gatsby'

const ListLink = props => (
<li style={{display: `inline-block`, marginRight:`1rem`}}>
    <Link style={{textDecoration:`none`}} to={props.to}>{props.children}</Link>
</li>

)

export default ({children}) => (
  <div style={{margin: `1rem auto`,
    padding: `0px 1rem`,
    display: `flex`,
    flexDirection: `column`}}>
      <ul style={{margin:`0 auto`}}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about">About</ListLink>
        <ListLink to="/TIL">TIL</ListLink>
        <ListLink to="/contact">Contact</ListLink>
      </ul>
    {children}
  </div>
)
