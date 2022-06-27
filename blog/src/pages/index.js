import React, { Fragment } from "react"
// import Timeline from "../components/timeline";
import Header from "../components/header"
// import {css3} from "../images/skills"

// const events = [
//   {ts: "2021-07-07", text: 'Logged in'},
//   {ts: "2021-07", text: 'Clicked Home Page'},
//   {ts: "2021-07", text: 'Edited Profile'},
//   {ts: "2021-07", text: 'Registred'},
//   {ts: "2021-07", text: 'Clicked Cart'},
//   {ts: "2021-07", text: 'Clicked Checkout'},
// ];


const FE = ['react', 'vue', 'typescript']
const FEDescript = [
  '<a href="https://yeony99.github.io" target="_blank">블로그</a> UI (with Gatsby), <br/> <a href="https://yeonysdev.herokuapp.com/" target="_blank">개인 웹사이트</a> UI <br/><a href="https://youthful-borg-c1eaa4.netlify.app/" target="_blank">Notedly</a> 개인 프로젝트 웹 노트 서비스 Front-End',
  'Open Source <a href="https://github.com/xaksis/vue-good-table" target="_blank">Vue Good Table</a> contributor <br/><a href="https://github.com/Yeony99/Modu_UI" target="_blank">모두의 UI</a> (개발중)',
  '<a href="https://github.com/Yeony99/TWL_TypeScript" target="_blank">TWL_Typescript 스터디</a> 진행 <br/> <a href="https://github.com/Yeony99/Modu_UI" target="_blank">모두의 UI</a> (개발중)'
]

const BE = ['node', 'springboot']
const BEDescript = [
  '<a href="https://youthful-borg-c1eaa4.netlify.app/" target="_blank">Notedly</a> 개인 프로젝트 웹 노트 서비스 Back-End <br/>(with GraphQL)',
  'SpringBoot Data JPA'
]

const Source = ['git', 'github']

const Data = ['postgreSQL', 'graphQL', 'mongodb'];

const Design = ['figma', 'photoshop']





export default () => (
  <Fragment>
    <Header path="/" title="Home" />
    <div className="wrap margin-top-1 margin-bottom-1">
      <div className="wrap">
        <h1 className="margin-top-1666 margin-bottom-05">Hi there, I'm Yeony.</h1>
        <div className="margin-bottom-1" style={{ fontSize: 0.9 + 'rem', color: '#9c9c9c' }}>
          Do you need Front-End Developer? Here I am! <br />
          I'm a developing developer 👩‍💻
        </div>
        <div className="flex align-center">
          <a href="https://github.com/Yeony99" target="_blank" className="margin-right-05">
            <img style={{ height: 'auto' }} alt="" width="20" height="20" className="avatar-sm circle margin-bottom-1" src="https://avatars.githubusercontent.com/u/76241233?v=4" />
          </a>
          <h6>Yeony (Nayeon Kim)</h6>
        </div>
        <div>
          <table>
            <colgroup>
              <col width="15%"></col>
              <col width="25%"></col>
              <col width="60%"></col>
            </colgroup>
            <thead>
              <tr>
                <td colSpan={3}><h2>I develop with...</h2> </td>
              </tr>
            </thead>
            <tbody>
              <br />
              <tr>
                <td colSpan={3}><h3>Web Front-End</h3></td>
              </tr>
              {
                FE.map((sk, i) =>
                  <tr>
                    <td>
                      <img className="list-skill-logo" src={require(`./skills/${sk}.svg`).default} />
                    </td>
                    <td className="td-title">{sk}</td>
                    <td className="wordbreak-breakall">
                      <p className="margin-0" dangerouslySetInnerHTML={{ __html: FEDescript[i] }}></p>
                    </td>
                  </tr>)
              }
              <br />
              <tr>
                <td colSpan={3}><h3>Web Back-End</h3></td>
              </tr>
              {
                BE.map((sk, i) =>
                  <tr>
                    <td>
                      <img className="list-skill-logo" src={require(`./skills/${sk}.svg`).default} />
                    </td>
                    <td className="td-title">{sk}</td>
                    <td className="wordbreak-breakall">
                      <p className="margin-0" dangerouslySetInnerHTML={{ __html: BEDescript[i] }}></p>
                    </td>
                  </tr>)
              }

              <br />
              <tr>
                <td colSpan={3}><h3>Version Control</h3></td>
              </tr>
              {
                Source.map((sk, i) =>
                  <tr>
                    <td>
                      <img className="list-skill-logo" src={require(`./skills/${sk}.svg`).default} />
                    </td>
                    <td className="td-title">{sk}</td>
                    <td className="wordbreak-breakall">
                      {/* <p className="margin-0" dangerouslySetInnerHTML={{ __html: BEDescript[i] }}></p> */}
                    </td>
                  </tr>)
              }


              <br />
              <tr>
                <td colSpan={3}><h3>DataBase & NoSQL DataStorage</h3></td>
              </tr>
              {
                Data.map((sk, i) =>
                  <tr>
                    <td>
                      <img className="list-skill-logo" src={require(`./skills/${sk}.svg`).default} />
                    </td>
                    <td className="td-title">{sk}</td>
                    <td className="wordbreak-breakall">
                      {/* <p className="margin-0" dangerouslySetInnerHTML={{ __html: BEDescript[i] }}></p> */}
                    </td>
                  </tr>)
              }

              <br />
              <tr>
                <td colSpan={3}><h3>Design</h3></td>
              </tr>
              {
                Design.map((sk, i) =>
                  <tr>
                    <td>
                      <img className="list-skill-logo" src={require(`./skills/${sk}.svg`).default} />
                    </td>
                    <td className="td-title">{sk}</td>
                    <td className="wordbreak-breakall">
                      {/* <p className="margin-0" dangerouslySetInnerHTML={{ __html: BEDescript[i] }}></p> */}
                    </td>
                  </tr>)
              }

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Fragment>
)