import { Link } from "gatsby";
import * as React from "react"
import styled from 'styled-components'

const ListLink = styled.li`
  border-bottom: 2px solid transparent;
  font-size: 1rem;
  :hover {
    font-size: 2rem;
  }
  @media screen and (max-width: 300px) {
      font-size: 1rem;
      margin: 0.5rem;
  }
`

const NotFoundPage = () => (
  <div className="page-404">
    <div className="wrap margin-top-1 margin-bottom-1 flex align-center" style={{height: 94+'vh'}}>
      <div className="wrap">
        <h1 className="margin-top-1666 margin-bottom-05 flex justify-content-around">Hi there, Nothing in Here...</h1>
        <div className="margin-bottom-1 flex justify-content-around" style={{ fontSize: 0.8 + 'rem', color: '#9c9c9c' }}>
          Return to menu what you wanted to find
        </div>
        <div>
          <nav className="padding-top-1 margin-0">
            <ul className="flex justify-content-around text-sm margin-0">
              <Link to="/">
                <ListLink className="transition duration-500 text-sm margin-1 route-path">Home</ListLink>
              </Link>
              <Link to="/tech">
                <ListLink className="transition duration-500 text-sm margin-1 route-path">Tech</ListLink>
              </Link>
              <Link to="/log">
                <ListLink className="transition duration-500 text-sm margin-1 route-path">Log</ListLink>
              </Link>
              <Link to="/retrospective">
                <ListLink className="transition duration-500 text-sm margin-1 route-path">Retrospective</ListLink>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
)

export default NotFoundPage
