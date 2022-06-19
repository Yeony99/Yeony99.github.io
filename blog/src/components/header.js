import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Logo from '../images/logo.svg'
import Seo from '../components/seo'
import Github from '../images/github.svg'
import Til from '../images/til.svg'
import Contact from '../images/contact.svg'
import Works from '../images/works.svg'
import styled from "styled-components"
const ListLink = props => (
  <>
    <Seo title="Yeony" logo="../images/logo.svg" />
    <li style={{ display: `inline-block`, marginRight: `1.5rem` }}>
      <Link className="list" id={props.id} style={{ textDecoration: `none` }} data={props.data} to={props.to}>{props.children}</Link>
    </li>
  </>
)

const GHGrass = styled.img`
  width: 13rem;
  @media (max-width: 700px) {
    display:none;
  }
`;

const Header = () => (
  <header>

    <div className="wrap row justify-content-between align-center">
      <div className="col-6">
        <a aria-current="page" className="" href="/">
          <img src={Logo} style={{ width: 33 + '%', margin: 0 }} />
        </a>
      </div>
      <nav className="col-6" style={{ paddingTop: 1 + 'rem', marginBottom: 0 }}>
        <ul className="flex justify-content-around text-sm" style={{ marginBottom: 0 }}>
          <a href="/log">
            <li className="transition duration-500 ">Log</li>
          </a>
          <a href="/retrospective">
            <li className="text-sm transition duration-500 ">Retrospective</li>
          </a>
        </ul>
      </nav>
    </div>

  </header>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Yeony`,
}

export default Header

