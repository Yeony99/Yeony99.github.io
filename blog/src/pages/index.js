import React, { Fragment } from "react"
// import Timeline from "../components/timeline";
import Header from "../components/header"

const events = [
  {ts: "2021-07-07", text: 'Logged in'},
  {ts: "2021-07", text: 'Clicked Home Page'},
  {ts: "2021-07", text: 'Edited Profile'},
  {ts: "2021-07", text: 'Registred'},
  {ts: "2021-07", text: 'Clicked Cart'},
  {ts: "2021-07", text: 'Clicked Checkout'},
];

export default () => (
  <Fragment>
    <Header path="/" title="Home"/>
    <div className="wrap margin-top-1 margin-bottom-1">
      <div className="wrap">
        <h1 className="margin-top-1666 margin-bottom-05">Hi there, I'm Yeony.</h1>
        <div className="margin-bottom-1" style={{fontSize: 0.9+'rem', color: '#9c9c9c'}}>
          Do you need Front-End Developer? Here I am! <br/>
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
            <thead>
              <tr>
                <td colSpan={3}><h2>I develop with...</h2> </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>React</td>
                <td>tjfaud</td>
              </tr>
              <tr>
                <td>React</td>
                <td >tjfaud</td>
              </tr>
            </tbody>
          </table>
          {/* <Timeline items={events} format="YYYY-MM"/> */}
        </div>
      </div>
    </div>
  </Fragment>
)