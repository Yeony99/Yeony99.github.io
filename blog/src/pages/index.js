import React, { Fragment } from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Contents from "../components/content"

export default () => (
  <Fragment>
    <Header/>
    <Layout>
      <Contents>
        <h2 style={{wordBreak:`keep-all`}}>안녕하세요,  프론트엔드 개발자 김나연입니다.</h2>
        <div style={{wordBreak:`break-all`}} className="contact-list">
          <ul>
            <li>개발을 왜 하게 됐는지 - 2020년 데이터분석으로 코딩을 접하고, 2021년 1월 말, 본격적으로 웹 개발 언어를 공부하기 시작 </li>
            <li>개발자 업무를 해보니 힘들었지만 흥미와 보람~~</li>
            <li>개발 관련 지식은 무수히 많고, 꾸준히 배워나가야 한다고 생각했습니다. 따라서 2021년 2월 n일부터 1일 1커밋을 실천 중입니다.</li>
          </ul>
        </div>
        
      </Contents>
    </Layout>
  </Fragment>
)