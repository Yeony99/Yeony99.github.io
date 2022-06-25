import React, { Fragment } from "react"
import Header from "../components/header"

export default () => (
  <Fragment>
    <Header path="/" />
    <div className="wrap margin-top-1 margin-bottom-1">
      <div className="wrap">
        <h1 className="margin-top-1666 margin-bottom-05">Hi there, I'm Yeony.</h1>
        <div className="margin-bottom-1" style={{fontSize: 0.9+'rem', color: '#9c9c9c'}}>
          asdfafdsad
        </div>
        <div className="flex align-center">
          <a href="https://github.com/Yeony99" target="_blank" className="margin-right-05">
            <img style={{ height: 'auto' }} alt="" width="20" height="20" className="avatar-sm circle margin-bottom-1" src="https://avatars.githubusercontent.com/u/76241233?v=4" />
          </a>
          <h6>Yeony (Nayeon Kim)</h6>
        </div>
      </div>
    </div>
  </Fragment>
)