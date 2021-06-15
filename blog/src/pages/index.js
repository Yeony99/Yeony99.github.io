import React, { Fragment } from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Contents from "../components/content"
import Title from "../components/title"

export default () => (
  <Fragment>
    <Header/>
    
    <Layout>
      <Title>About me</Title>
      <Contents>
        <h3 style={{wordBreak:`keep-all`}}>안녕하세요, 김나연입니다.</h3>
        <div style={{wordBreak:`break-all`}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

        </div>
        
      </Contents>
    </Layout>
  </Fragment>
)