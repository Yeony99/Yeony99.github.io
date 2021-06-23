import React, { Fragment, useRef } from "react"
import styled from "styled-components"
import Header from "../components/header"
import Layout from "../components/layout"
import Title from "../components/title"
import Modal from "../components/Modal"

const WorkSq = styled.div`

  display: flex;
  height:12rem;
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

const HoverDescribeDiv = styled.div`
    font-size: 0.8rem;
    margin-top:1rem;
    color: white;
`;

const ModalDescribeDiv = styled.div`
    font-weight: 800;
    margin: 0.5rem 0 0 7rem 0;
    color: white;
`;


const Links = props => (
  <>
    <a style={{textDecoration:`green wavy underline`, color:`white` }}  href={props.data}>{props.children}</a>
  </>
)


export default function Works() {
  const modalRef1 = useRef();
  const modalRef2 = useRef();
  const modalRef3 = useRef();
  const modalRef4 = useRef();
  const modalRef5 = useRef();
  const modalRef6 = useRef();


 return (
  <Fragment>
    <Header></Header>
    <Layout>
      <Title>Projects <span className="notice" style={{fontSize:`14px`, fontWeight:`normal`}}>PC 환경에서 프로젝트의 설명을 <span style={{fontWeight:`700`, fontSize:`16px`}}>'더블클릭'</span>하시면 간략한  <span style={{fontWeight:`700`, fontSize:`16px`}}>'미리보기'</span>를 보실 수 있습니다.</span></Title> 

      <div style={{ display: `flex`, justifyContent: `space-around`, flexWrap: `wrap`, position: `relative` }}>

        {/* Notedly */}
      <Modal ref={modalRef1}>
        <ModalDescribeDiv> Link : <Links data="https://github.com/Yeony99/Notedly">GitHub</Links> | <Links data="https://youthful-borg-c1eaa4.netlify.app/">WebPage</Links> <span style={{fontSize:`12.5px`, color:`#ff4d4d`, fontWeight:`normal`}}> * 링크 클릭 시 해당 <b>깃허브(혹은 웹페이지)</b>로 연결됩니다.</span></ModalDescribeDiv>
        <div>
          <img className="list-images" src="https://user-images.githubusercontent.com/76241233/122641899-04e40b00-d143-11eb-8fbd-6bf00a89ab2a.gif"  alt="" />
        </div>
      </Modal>
        <WorkSq
          style={{ backgroundImage: "url(" + "https://user-images.githubusercontent.com/76241233/122172249-87f33000-cebb-11eb-9e33-236bbdc8d7e5.png" + ")" }}
        >
          <HoverSq>
              <button className="btn" onDoubleClick={()=> modalRef1.current.openModal()}> 
            <WrapDescribe>
              <Tags src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white" alt="" /> 
              <Tags src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=white" alt="" /> 
              <Tags src="https://img.shields.io/badge/styled--components-DB7093?style=flat-square&logo=styled-components&logoColor=white" alt="" /> 
              <Tags src="https://img.shields.io/badge/GraphQL-311C87?style=flat-square&logo=graphql&logoColor=white" alt="" /> 
              <Tags src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white" alt="" /> 
              <Tags src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white" alt="" />
              <Tags src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=white" alt="" />
              <HoverDescribeDiv> <b style={{fontSize:`1.2rem`}}>CRUD</b> 기능을 적용한 Web Application</HoverDescribeDiv>
            </WrapDescribe>
              </button>
          </HoverSq>
        </WorkSq>

        {/* Vanilla JS Diary */}
        <Modal ref={modalRef2}>
        <ModalDescribeDiv><a>GitHub</a> | <a>WebPage</a></ModalDescribeDiv>
        <div>
          <img className="list-images" src="https://user-images.githubusercontent.com/76241233/122643208-7e7ef780-d149-11eb-9bd2-708fb1b36e10.gif" alt="" />
        </div>
      </Modal>
      <WorkSq 
          style={{ backgroundImage: "url(" + "https://user-images.githubusercontent.com/76241233/122216564-817aad80-cee7-11eb-9294-4b0f66841744.png" + ")" }}
        >
          <HoverSq>
           <button className="btn" onDoubleClick={()=> modalRef2.current.openModal()}> 
           <WrapDescribe>
              <Tags src="https://img.shields.io/badge/html5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="" />
              <Tags src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="" /> 
              <Tags src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=white" alt="" /> 
              <HoverDescribeDiv> Vanilla-JS Web Application</HoverDescribeDiv>
            </WrapDescribe>
            </button>
          </HoverSq>
        </WorkSq>

        {/* spring about trip */}
        <Modal ref={modalRef3}>
        <ModalDescribeDiv><a>GitHub</a> | <a>WebPage</a></ModalDescribeDiv>
        <div>
          <img className="list-images" src="blabla" style={{padding:`1rem`}} alt="" />
        </div>
      </Modal>
        <WorkSq 
          style={{ backgroundImage: "url(" + "https://user-images.githubusercontent.com/76241233/122215847-b0dcea80-cee6-11eb-9a09-ce0ac96f75d8.png" + ")" }} 
        >
           <HoverSq>
           <button className="btn" onDoubleClick={()=> modalRef3.current.openModal()} > 
            <WrapDescribe>
              <Tags src="https://img.shields.io/badge/Java-007396?style=flat-square&logo=java&logoColor=white" alt="" /> 
              <Tags src="https://img.shields.io/badge/Spring-6DB33F?style=flat-square&logo=spring&logoColor=white" alt="" />
              <Tags src="https://img.shields.io/badge/jquery-0769AD?style=flat-square&logo=jquery&logoColor=white" alt="" /> 
              <Tags src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=white" alt="" /> 
              <Tags src="https://img.shields.io/badge/oracle-F80000?style=flat-square&logo=oracle&logoColor=white" alt="" /> 
              <Tags src="https://img.shields.io/badge/git-F05032?style=flat-square&logo=git&logoColor=white" alt="" /> 
              <HoverDescribeDiv> Spring 기반 국내 여행 가이드 회원제 플랫폼 </HoverDescribeDiv>
            </WrapDescribe>
            </button>
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
              <HoverDescribeDiv> Servlet/JSP 기반 온라인 피자 주문 사이트 </HoverDescribeDiv>
            </WrapDescribe>
          </HoverSq>
        </WorkSq>
        <WorkSq 
          style={{ backgroundImage: "url(" + "https://user-images.githubusercontent.com/76241233/122420416-a2fe9680-cfc6-11eb-86e0-eb4865adf965.png" + ")" }}
        >
          <HoverSq>
            <WrapDescribe>
              <Tags src="https://img.shields.io/badge/Gatsby-663399?style=flat-square&logo=gatsby&logoColor=white" alt="" /> 
              <Tags src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white" alt="" />    
              <Tags src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=white" alt="" /> 
              <Tags src="https://img.shields.io/badge/styled--components-DB7093?style=flat-square&logo=styled-components&logoColor=white" alt="" /> 
              <Tags src="https://img.shields.io/badge/git-F05032?style=flat-square&logo=git&logoColor=white" alt="" /> 
              <HoverDescribeDiv> Gatsby 기반 Portfolio Site</HoverDescribeDiv>
            </WrapDescribe>
          </HoverSq>
        </WorkSq>
        <WorkSq 
          style={{ backgroundImage: "url(" + "" + ")", opacity:0}}
        >
          <HoverSq>
            <WrapDescribe>
              <Tags src="https://img.shields.io/badge/Gatsby-663399?style=flat-square&logo=gatsby&logoColor=white" alt="" /> 
              <Tags src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=white" alt="" /> 
              <Tags src="https://img.shields.io/badge/styled--components-DB7093?style=flat-square&logo=styled-components&logoColor=white" alt="" /> 
              <Tags src="https://img.shields.io/badge/git-F05032?style=flat-square&logo=git&logoColor=white" alt="" /> 
              <HoverDescribeDiv> <b style={{fontSize:`1.2rem`}}>CRUD</b> 기능을 적용한 Web Application</HoverDescribeDiv>
            </WrapDescribe>
          </HoverSq>
        </WorkSq>
      </div>
    </Layout>
  </Fragment>
)

}