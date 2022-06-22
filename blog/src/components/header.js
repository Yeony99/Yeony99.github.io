import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Logo from '../images/logo.svg'
import styled from "styled-components"
import Seo from "./seo"
// const ListLink = props => (
//   <>
//     <Seo title="Yeony" logo="../images/logo.svg" />
//     <li style={{ display: `inline-block`, marginRight: `1.5rem` }}>
//       <Link className="list" id={props.id} style={{ textDecoration: `none` }} data={props.data} to={props.to}>{props.children}</Link>
//     </li>
//   </>
// )

const ListLink = styled.li`
  border-bottom: 2px solid transparent;
  @media screen and (max-width: 300px) {
      font-size: 0.75rem;
      margin: 0.5rem;
  }
`

const LogoImg = styled.img`
  width: 33%;
  margin: 0;
  @media screen and (max-width: 300px) {
    width: 62%;
  }
`

const Header = (props) => {
  const current = props.path;
  console.log(props)
  return (
    <header>
      <Seo title={props.title? props.title : null}/>

      <div className="wrap flex justify-content-between align-center">
        <div className="">
          <Link aria-current="page" className="" to="/">
            <LogoImg src={Logo} />
            <h1 style={{ display: 'none' }}>Yeony</h1>
          </Link>
        </div>
        <nav className="padding-top-1 margin-0">
          <ul className="flex justify-content-around text-sm margin-0">
            <Link to="/log">
              <ListLink className={"transition duration-500 text-sm margin-1" + (current.includes("/log") ? " current-path" : " route-path")}>Log</ListLink>
            </Link>
            <Link to="/retrospective">
              <ListLink className={"transition duration-500 text-sm margin-1" + (current.includes("/retrospective") ? " current-path" : " route-path")}>Retrospective</ListLink>
            </Link>
          </ul>
        </nav>
        {({ path }) => (path)}
      </div>

    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Yeony`,
}

export default Header

