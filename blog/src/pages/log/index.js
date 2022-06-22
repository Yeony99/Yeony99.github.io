import React from "react";
import Header from "../../components/header"
import { graphql, Link } from "gatsby"
import PageHeader from "../../components/page-header";
import Tag from "../../components/tag";

export default ({ data }) => {
  console.log({ data })
    return (
        <>
            <Header path="/log" />
            <div className="wrap">
                <PageHeader title="Log ☘" subtitle="개발, 읽을거리, 일 관련된 사소한 기록을 남깁니다." />
                {/* <div>
                        {data.allMarkdownRemark.totalCount}
                    </div> */}
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div key={node.id} className="row flex-column">
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
query MyQuery {
  allMarkdownRemark {
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
  }
}



`