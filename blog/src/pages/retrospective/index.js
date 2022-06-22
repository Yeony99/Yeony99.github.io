import React from "react";
import Header from "../../components/header"
import { graphql, Link } from "gatsby"
import PageHeader from "../../components/page-header";
import Tag from "../../components/tag";

export default ({ data }) => {
    return (
        <>
            <Header path="/retrospective" title="회고" />
            <div className="wrap">
                <PageHeader title="Retrospective ☘" subtitle="조금 긴 이야기, 혹은 마무리하며 작성하는 회고록" />
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
query MyQuery1 {
  allMarkdownRemark(filter: {frontmatter: {category: {eq: "retrospective"}}}) {
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