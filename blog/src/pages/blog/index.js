import React, {useState} from "react";
import Header from "../../components/header"
import { graphql, Link } from "gatsby"
import PageHeader from "../../components/page-header";
import Tag from "../../components/tag";

export default ({ data }) => {
  const [all, setAll] = useState('')


  const test = (tag) => {
    console.log('test!!!!', tag)
    setAll(tag)
  }
    return (
        <>
            <Header path="/blog" title="블로그" />
            <div className="wrap">
                <PageHeader title="Blog ☘" subtitle="시간들을 되돌아보며 적는 회고록" />
                <div className="padding-bottom-1 wrap flex overflow-x-scroll">
                  <Tag className="tag pointer bg-orange" onClick={() => test('')}>All</Tag>
                  {
                    data.allMarkdownRemark.distinct.map(tag => <Tag key={tag} className="tag pointer bg-orange" onClick={() => test(tag)}>{tag}</Tag>)
                  }
                </div>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div key={node.id} className="row flex-column" style={{display: !all ? 'block' : node.frontmatter.tags.map(tag => tag).includes(all)? 'block' : 'none'}}>
                      <Link to={node.frontmatter.slug}>
                        <div className="padding-1 h-100">
                              <h3>{node.frontmatter.title}</h3>
                              <p>{node.excerpt}</p>
                              <div className="flex">{node.frontmatter.tags.map(tag => <Tag key={tag} className="tag">{tag}</Tag>)}</div>
                              <hr/>
                          </div>
                      </Link>
                    </div>
                ))}

            </div>
        </>
    )
}


export const query = graphql`
query MyQuery3 {
  allMarkdownRemark(filter: {frontmatter: {category: {eq: "blog"}}}) {
    edges {
      node {
        frontmatter {
          date
          title
          tags    
          slug
        }
        excerpt
        id
      }
    }
    distinct(field: frontmatter___tags)
  }
}
`