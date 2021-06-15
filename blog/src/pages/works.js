import React, {Fragment} from "react"
import styled from "styled-components"
import Header from "../components/header"
import Layout from "../components/layout"

const WorkSq = styled.div`
  display: flex;
  height:11rem;
  min-width:17.798rem;
  background-color:navy;
  margin:1rem;
  z-index:11;
  position:relative;
  border-radius: 1rem;
  @media (max-width: 388px) {
    height:10rem;
    min-width:16.180rem;
  }
`
const HoverSq = styled.div`
  height:11rem;
  min-width:17.798rem;
  background-color:#ffffff;
  opacity:0;
  border-radius: 1rem;
    ${WorkSq} &:hover {
      opacity:0.6;
    }
`


export default () => (
<Fragment>
  <Header></Header>
    <Layout>
      <h1>Works</h1>
      <div style={{display: `flex`, justifyContent: `space-around`, flexWrap: `wrap`, position:`relative`}}>
        <WorkSq ><HoverSq><div style={{margin:`auto 0`}}><span>Notedly 입니다</span></div></HoverSq></WorkSq>
        <WorkSq ><HoverSq>hahah</HoverSq></WorkSq>
        <WorkSq ><HoverSq>hahah</HoverSq></WorkSq>
        <WorkSq ><HoverSq><div style={{margin:`auto 0`}}><span>Notedly 입니다</span></div></HoverSq></WorkSq>
        <WorkSq ><HoverSq>hahah</HoverSq></WorkSq>
        <WorkSq ><HoverSq>hahah</HoverSq></WorkSq>
     </div>
    </Layout>
</Fragment>
)