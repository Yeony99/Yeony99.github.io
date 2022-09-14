import React, { Fragment } from "react"
import Footer from "../components/footer"
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

const BE = ['node', 'spring-boot']

const Source = ['git', 'github']

const Data = ['postgreSQL', 'graphQL', 'mongodb'];

const Design = ['figma', 'photoshop']





export default () => (
  <Fragment>
    <Header path="/" title="Home" />
    <div className="wrap margin-top-1 margin-bottom-1 min-h-74">
      <div className="wrap">
        <h1 className="margin-top-1666 margin-bottom-05">Hi there, I'm Yeony.</h1>
        <div className="margin-bottom-1" style={{ fontSize: 0.8 + 'rem', color: '#9c9c9c' }}>
          Do you need Front-End Developer? Me Here! <br />
          I'm a developing developer 👩‍💻
        </div>
        <div className="flex align-center">
          <a href="https://github.com/Yeony99" target="_blank" rel="noreferrer" className="margin-right-05">
            <img style={{ height: 'auto' }} alt="" width="20" height="20" className="avatar-sm circle margin-bottom-1" src="https://avatars.githubusercontent.com/u/76241233?v=4" />
          </a>
          <h6>Yeony (Nayeon Kim)</h6>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <td colSpan={6}><h2>I develop with...</h2> </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                {
                  FE.map((sk, i) =>
                    <>
                      <td className="img-td">
                        <img className="list-skill-logo" src={require(`./skills/${sk}.svg`).default} />
                      </td>
                      <td className="td-title padding-right-1">{sk}</td>
                    </>
                  )
                }
              </tr>
              <tr>
                {
                  BE.map((sk, i) =>
                    <>
                      <td className="img-td">
                        <img className="list-skill-logo" src={require(`./skills/${sk}.svg`).default} />
                      </td>
                      <td className="td-title">{sk}</td>
                    </>
                  )
                }
                <td className="img-td"></td><td></td>
              </tr>

              <tr>
                {
                  Source.map((sk, i) =>
                    <>
                      <td className="img-td">
                        <img className="list-skill-logo" src={require(`./skills/${sk}.svg`).default} />
                      </td>
                      <td className="td-title">{sk}</td>
                    </>
                  )
                }
                <td className="img-td"></td><td></td>
              </tr>
              <tr>
                {
                  Data.map((sk, i) =>
                    <>
                      <td className="img-td">
                        <img className="list-skill-logo" src={require(`./skills/${sk}.svg`).default} />
                      </td>
                      <td className="td-title">{sk}</td>
                    </>
                  )
                }
              </tr>

              <tr>
                {
                  Design.map((sk, i) =>
                    <>
                      <td className="img-td">
                        <img className="list-skill-logo" src={require(`./skills/${sk}.svg`).default} />
                      </td>
                      <td className="td-title">{sk}</td>
                    </>
                  )
                }
                <td className="img-td"></td><td></td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Footer />
  </Fragment>
)