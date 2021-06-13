import React from 'react'
import { Link } from 'gatsby'
const ListLink = props => (
  <>
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link style={{ textDecoration: `none` }} to={props.to}>{props.children}</Link>
    </li>
  </>
)

export default ({children}) => (
  <div style={{margin: `1rem auto`,
    padding: `0px 3rem`,
    display: `flex`,
    flexDirection: `column`}}>
    {children}
  </div>
)
