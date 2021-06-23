import React, { Fragment } from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Contents from "../components/content"

export default () => (
  <Fragment>
    <Header/>
    <Layout>
      <Contents>
        <h1 style={{wordBreak:`keep-all`}}>안녕하세요,  프론트엔드 개발자 김나연입니다.</h1>
        <div style={{wordBreak:`break-all`}} className="contact-list">
          <ul style={{margin:`1rem`}}>
            <li>웹 브라우저의 동작을 이해하고, 웹 표준을 지키기 위해 노력합니다.</li>
            <li>1일 1커밋을 통해 배움을 생활화하고 있습니다.</li>
            <li><strong>쉬운 웹</strong>을 위해 사용자의 관점에서 바라봅니다. </li>
            <li>학부시절 콘텐츠기획 팀 프로젝트를 통해 '사용하기 좋은' UI 구성과 필요한 서비스는 무엇인지 고민하게 되었고, 이것이 '웹'을 궁금해하고, 웹 개발을 공부하는 계기가 되었습니다.</li>
          </ul>
        </div>
        
      </Contents>
    </Layout>
  </Fragment>
)