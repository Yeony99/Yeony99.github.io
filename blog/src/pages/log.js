import React, { Fragment } from "react";
import Header from "../components/header"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Contents from "../components/content"

export default ({ data }) => {
    return (
        <>
            <Header />
            <Layout>
                <div className="wrap">
                    <div>
                        {data.allMarkdownRemark.totalCount}
                    </div>
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                        <div key={node.id}>
                            <h3
                            >
                                {node.frontmatter.title}{" "}
                                <span>
                                    — {node.frontmatter.date}
                                </span>
                            </h3>
                            <p>{node.excerpt}</p>
                            <div>{node.frontmatter.tags.map(tag => <div>{tag}</div>)}</div>
                        </div>
                    ))}
                </div>

            </Layout>
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
        }
        excerpt
        id
      }
    }
  }
}


`