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
    <Seo title="Yeony" />
    <li style={{ display: `inline-block`, marginRight: `1.5rem` }}>
      <Link className="list" id={props.id} style={{textDecoration:`none`}} data={props.data} to={props.to}>{props.children}</Link>
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
  <header
    style={{
      borderBottom: `0.1rem solid #249232`, 
      display: `flex`, 
      alignItems: `flex-end`, 
      margin: `1rem 1rem`
    }}
  >
    <ListLink to="/" id="logo"  data="Who am I ? ">
      <img src={Logo} style={{ width: `10rem`, marginRight:`1rem`}} />
    </ListLink>
    <ListLink to="/works" data="What I did !">
      <img src={Works} alt="작업물" style={{ width: `2.5rem` }} /> 
    </ListLink>
    <ListLink to="/TIL" data="Today Yeony Learned">
      <img src={Til} alt="TIL" style={{ width: `2.5rem` }} />
    </ListLink>
    <ListLink to="/contact" data="e-Mail ?">
      <img src={Contact} alt="연락" style={{ width: `2.5rem` }} />
    </ListLink>
    <ListLink to="https://github.com/Yeony99" data="@Yeony99">
      <img src={Github} alt="Github" style={{ width: `2.3rem` }} />
    </ListLink>
    <GHGrass src="https://ghchart.rshah.org/Yeony99" href="https://github.com/Yeony99"/>
    
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Yeony`,
}

export default Header

