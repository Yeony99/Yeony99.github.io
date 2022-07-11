import * as React from "react"

const Footer = () => {
  return (
    <footer>
        <div className="margin-top-1 padding-1 w-100 ">
            <div className="wrap flex align-center justify-content-between padding-1">
                <div style={{fontSize: 0.9+'rem'}}>© 2022 Nayeon Yeony Kim</div>
                <div className="flex">
                  <div className="margin-right-1">
                    <a href="/rss.xml" target="_blank"><img className="footer-logo" src={require(`../pages/skills/rss.svg`).default} /></a>
                  </div>
                  <div>
                      <a href="https://github.com/Yeony99" target="_blank"><img className="footer-logo" src={require(`../pages/skills/github.svg`).default} /></a>
                  </div>
                </div>
            </div>
            
        </div>
    </footer>
  )
}


export default Footer

