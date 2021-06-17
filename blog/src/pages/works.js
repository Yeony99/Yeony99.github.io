import React, {Fragment} from "react"
import styled from "styled-components"
import Header from "../components/header"
import Layout from "../components/layout"
import Title from "../components/title"

const WorkSq = styled.div`

  display: flex;
  height:11rem;
  min-width:19.416rem;
  background-color:navy;
  margin:1rem;
  border:1px solid #249232;
  z-index:12;
  position:relative;
  border-radius: 1rem;
  background-position:center;
  background-size:cover;
  background-repeat:no-repeat;
  @media (max-width: 388px) {
    height:10rem;
    min-width:16.180rem;
  }
`
const HoverSq = styled.div`
  height:100%;
  min-width:100%;
  background-color:#636363;
  color:white;
  font-size:26px;
  opacity:0;
  display:flex;
  flex-direction: row;
  align-items: flex-end;
  border-radius: 1rem;
  cursor:pointer;
    ${WorkSq} &:hover {
      opacity:0.95;
      transition: all 0.5s ease;
    }
`

const ViewBtn = styled.button`
    margin:0 auto;
    background-color:green;
`;


export default () => (
<Fragment>
  <Header></Header>
    <Layout>
    <Title>Projects</Title>
      <div style={{display: `flex`, justifyContent: `space-around`, flexWrap: `wrap`, position:`relative`}}>
        <WorkSq style={{backgroundImage: "url(" + "https://user-images.githubusercontent.com/76241233/122172249-87f33000-cebb-11eb-9e33-236bbdc8d7e5.png" + ")"}}
                    ><HoverSq><div style={{margin:`auto 0`}}><span>Notedly 입니다</span></div></HoverSq></WorkSq>
        <WorkSq style={{backgroundImage: "url("+"https://user-images.githubusercontent.com/76241233/122215847-b0dcea80-cee6-11eb-9a09-ce0ac96f75d8.png"+")"}} ><HoverSq> 보슈</HoverSq></WorkSq>
        <WorkSq style={{backgroundImage: "url("+"https://user-images.githubusercontent.com/76241233/122216564-817aad80-cee7-11eb-9294-4b0f66841744.png"+")"}}><HoverSq>hahah</HoverSq></WorkSq>
        <WorkSq style={{backgroundImage: "url("+"https://user-images.githubusercontent.com/76241233/122219213-2bf3d000-ceea-11eb-8d03-beca3ed8f49c.png"+")"}}><HoverSq>qhtpdyd</HoverSq></WorkSq>
        <WorkSq ><HoverSq>hahah</HoverSq></WorkSq>
        <WorkSq ><HoverSq>hahah</HoverSq></WorkSq>
     </div>
    </Layout>
</Fragment>
)