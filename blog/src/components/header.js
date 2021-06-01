import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Logo from '../images/logo.svg'

const Header = () => (
  <header
    style={{ borderBottom: `0.1rem solid #cfcfcf`
    }}
  >
    <img src={Logo} style={{ width: `10rem`, margin:`1rem auto`, display:'flex' }} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Yeony`,
}

export default Header
