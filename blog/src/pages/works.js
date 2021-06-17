import React, { Fragment } from "react"
import styled from "styled-components"
import Header from "../components/header"
import Layout from "../components/layout"
import Title from "../components/title"

const WorkSq = styled.div`

  display: flex;
  height:11rem;
  min-width:19.416rem;
  max-width:19.416rem;
  background-color:navy;
  margin:1rem;
  border:0.5px solid #249232;
  z-index:12;
  position:relative;
  border-radius: 1rem;
  background-position:center;
  background-size:cover;
  background-repeat:no-repeat;
  @media (max-width: 388px) {
    height:10rem;
    min-width:16.180rem;
    max-width:16.180rem;
  }
`
const HoverSq = styled.div`
  height:100%;
  min-width:100%;
  background-color:#636363e8;
  color:white;
  font-size:26px;
  opacity:0;
  display:flex;
  flex-direction: row;
  align-items: flex-end;
  border-radius: 1rem;
  cursor:pointer;
    ${WorkSq} &:hover {
      opacity:0.99;
      transition: all 0.5s ease;
    }
`

const ViewBtn = styled.button`
    margin:0 auto;
    background-color:green;
`;

const Tags = styled.img`
    margin: 0.1rem;
    padding:0;
    height: 1.5rem;
`;

const WrapDescribe = styled.div`
    margin: auto 0;
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
`;


export default () => (
  <Fragment>
    <Header></Header>
    <Layout>
      <Title>Projects</Title>
      <div style={{ display: `flex`, justifyContent: `space-around`, flexWrap: `wrap`, position: `relative` }}>
        <WorkSq
          style={{ backgroundImage: "url(" + "https://user-images.githubusercontent.com/76241233/122172249-87f33000-cebb-11eb-9e33-236bbdc8d7e5.png" + ")" }}
        >
          <HoverSq>
            <WrapDescribe>
              <Tags src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white" alt="" /> 
              <Tags src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=white" alt="" /> 
              <Tags src="https://img.shields.io/badge/styled--components-DB7093?style=flat-square&logo=styled-components&logoColor=white" alt="" /> 
              <Tags src="https://img.shields.io/badge/GraphQL-311C87?style=flat-square&logo=graphql&logoColor=white" alt="" /> 
              <Tags src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white" alt="" /> 
              <Tags src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white" alt="" />
              <div style={{fontSize:`0.8rem`, marginTop:`1rem`}}> <b style={{fontSize:`1.2rem`}}>CRUD</b> 기능을 적용한 Web Application</div>
            </WrapDescribe>
          </HoverSq>
        </WorkSq>
        <WorkSq 
          style={{ backgroundImage: "url(" + "https://user-images.githubusercontent.com/76241233/122215847-b0dcea80-cee6-11eb-9a09-ce0ac96f75d8.png" + ")" }} 
        >
           <HoverSq>
            <WrapDescribe>
              <Tags src="https://img.shields.io/badge/Java-007396?style=flat-square&logo=java&logoColor=white" alt="" /> 
              <Tags src="https://img.shields.io/badge/Spring-6DB33F?style=flat-square&logo=spring&logoColor=white" alt="" />
              <Tags src="https://img.shields.io/badge/jquery-0769AD?style=flat-square&logo=jquery&logoColor=white" alt="" /> 
              <Tags src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=white" alt="" /> 
              <Tags src="https://img.shields.io/badge/oracle-F80000?style=flat-square&logo=oracle&logoColor=white" alt="" /> 
              <Tags src="https://img.shields.io/badge/git-F05032?style=flat-square&logo=git&logoColor=white" alt="" /> 
              <div style={{fontSize:`0.8rem`, marginTop:`1rem`}}> Spring 기반 국내 여행 가이드 회원제 플랫폼 </div>
            </WrapDescribe>
          </HoverSq>
        </WorkSq>
        <WorkSq 
          style={{ backgroundImage: "url(" + "https://user-images.githubusercontent.com/76241233/122216564-817aad80-cee7-11eb-9294-4b0f66841744.png" + ")" }}
        >
          <HoverSq>
           <WrapDescribe>
              <Tags src="https://img.shields.io/badge/html5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="" />
              <Tags src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="" /> 
              <Tags src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=white" alt="" /> 
              <div style={{fontSize:`0.8rem`, marginTop:`1rem`}}> Vanilla-JS Web Application</div>
            </WrapDescribe>
          </HoverSq>
        </WorkSq>
        <WorkSq 
          style={{ backgroundImage: "url(" + "https://user-images.githubusercontent.com/76241233/122219213-2bf3d000-ceea-11eb-8d03-beca3ed8f49c.png" + ")" }}
        >
          <HoverSq>
            <WrapDescribe>
              <Tags src="https://img.shields.io/badge/Java-007396?style=flat-square&logo=java&logoColor=white" alt="" /> 
              <Tags src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=white" alt="" /> 
              <Tags src="https://img.shields.io/badge/jquery-0769AD?style=flat-square&logo=jquery&logoColor=white" alt="" /> 
              <Tags src="https://img.shields.io/badge/oracle-F80000?style=flat-square&logo=oracle&logoColor=white" alt="" /> 
              <Tags src="https://img.shields.io/badge/git-F05032?style=flat-square&logo=git&logoColor=white" alt="" /> 
              <div style={{fontSize:`0.8rem`, marginTop:`1rem`}}> Servlet/JSP 기반 온라인 피자 주문 사이트 </div>
            </WrapDescribe>
          </HoverSq>
        </WorkSq>
        <WorkSq 
          style={{ backgroundImage: "url(" + "https://user-images.githubusercontent.com/76241233/122420416-a2fe9680-cfc6-11eb-86e0-eb4865adf965.png" + ")" }}
        >
          <HoverSq>
            <WrapDescribe>
              <Tags src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white" alt="" />    
              <Tags src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=white" alt="" /> 
              <Tags src="https://img.shields.io/badge/Gatsby-663399?style=flat-square&logo=gatsby&logoColor=white" alt="" /> 
              <Tags src="https://img.shields.io/badge/styled--components-DB7093?style=flat-square&logo=styled-components&logoColor=white" alt="" /> 
              <Tags src="https://img.shields.io/badge/git-F05032?style=flat-square&logo=git&logoColor=white" alt="" /> 
              <div style={{fontSize:`0.8rem`, marginTop:`1rem`}}> Gatsby 기반 Portfolio Site</div>
            </WrapDescribe>
          </HoverSq>
        </WorkSq>
        <WorkSq 
          style={{ backgroundImage: "url(" + "" + ")", opacity:0}}
        >
          <HoverSq>
            <WrapDescribe>
              <Tags src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=white" alt="" /> 
              <Tags src="https://img.shields.io/badge/Gatsby-663399?style=flat-square&logo=gatsby&logoColor=white" alt="" /> 
              <Tags src="https://img.shields.io/badge/styled--components-DB7093?style=flat-square&logo=styled-components&logoColor=white" alt="" /> 
              <Tags src="https://img.shields.io/badge/git-F05032?style=flat-square&logo=git&logoColor=white" alt="" /> 
              <div style={{fontSize:`0.8rem`, marginTop:`1rem`}}> <b style={{fontSize:`1.2rem`}}>CRUD</b> 기능을 적용한 Web Application</div>
            </WrapDescribe>
          </HoverSq>
        </WorkSq>
      </div>
    </Layout>
  </Fragment>
)