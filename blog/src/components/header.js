import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Logo from '../images/logo.svg'
import Seo from '../components/seo'
import Github from '../images/github.svg'
import Til from '../images/til.svg'
import Contact from '../images/contact.svg'
import Works from '../images/works.svg'
const ListLink = props => (
  <>
    <Seo title="Yeony" />
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link className="list" style={{textDecoration:`none`}} data={props.data} to={props.to}>{props.children}</Link>
    </li>
  </>
)

const Header = () => (
  <header
    style={{
      borderBottom: `0.1rem solid #249232`, display: `flex`, alignItems: `flex-end`, margin: `1rem 1rem`
    }}
  >
    <ListLink to="/"><img src={Logo} style={{ width: `10rem`, marginRight:`1rem`}} /></ListLink>
    <ListLink to="https://github.com/Yeony99" data="@Yeony99">
      <img src={Github} alt="Github" style={{ width: `2.3rem` }} />
    </ListLink>
    <ListLink to="/TIL" data="Today Yeony Learn">
      <img src={Til} alt="TIL" style={{ width: `2.5rem` }} />
    </ListLink>
    <ListLink to="/contact" data="Contact">
      <img src={Contact} alt="연락" style={{ width: `2.5rem` }} />
    </ListLink>
    <ListLink to="/works" data="Works">
      <img src={Works} alt="작업물" style={{ width: `2.5rem` }} /> 
    </ListLink>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Yeony`,
}

export default Header

