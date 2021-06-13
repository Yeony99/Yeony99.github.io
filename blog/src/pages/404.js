import * as React from "react"
import Seo from "../components/seo"
import Lo from "../images/logo404.svg"
import styled from 'styled-components'

const Bg = styled.div`
background-color:#249232;width: 100vw; height: 100vh;
`;

const NotFoundPage = () => (
  <>
    <Seo title="404: Not found" />
    <Bg>
      <div>
        <img src={Lo} alt="" />
        <span style={{ fontSize: `4rem` }}>404</span></div>
    </Bg>
  </>
)

export default NotFoundPage
