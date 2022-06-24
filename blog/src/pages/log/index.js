import React, { useState } from "react";
import Header from "../../components/header"
import { graphql, Link } from "gatsby"
import PageHeader from "../../components/page-header";
import Tag from "../../components/tag";

export default ({ data }) => {
  const [obj, setState] = useState({
    key: '',
    isOpen: false,
  });

  const [open, setOpen] = useState(false)

  const changeHandler = (key, isOpen) => {
    setOpen(isOpen? false: true)
    console.log(isOpen, open)
    setState({...obj, key: key, isOpen: open})
    console.log(key, obj)
  }

  
    return (
        <>
            <Header path="/log" title="로그" />
            <div className="wrap">
                <PageHeader title="Log ☘" subtitle="개발, 읽을거리, 일 관련된 사소한 기록들" />
                {/* <div>
                        {data.allMarkdownRemark.totalCount}
                    </div> */}
                {data.allMarkdownRemark.edges.map(({ node }) => (
                  
                    <div key={node.id} className="row flex-column">
                      {/* <Link to={node.frontmatter.slug}> */}
                        <div className="padding-1 h-100" name="key" onClick={() => changeHandler(node.id, open)}>
                              <h3>{node.frontmatter.title}</h3>
                              <div className={`transition duration-500 ${obj.key == node.id? ' log-selected-bg' : ''}`}>
                                 <div dangerouslySetInnerHTML={ {__html: obj.key == node.id? node.html : node.excerpt} }></div>
                              </div>
                              
                              <div className="flex">{node.frontmatter.tags.map(tag => <Tag key={tag} className="tag">{tag}</Tag>)}</div>
                              <hr/>
                          </div>
                      {/* </Link> */}
                    </div>
                ))}

            </div>
        </>
    )
}


export const query = graphql`
query MyQuery {
  allMarkdownRemark(filter: {frontmatter: {category: {eq: "log"}}}) {
    edges {
      node {
        frontmatter {
          date
          title
          tags    
          slug
        }
        excerpt
        html
        internal {
          content
        }
        id
      }
    }
  }
}


`