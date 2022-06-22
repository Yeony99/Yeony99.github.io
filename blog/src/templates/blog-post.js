import React from "react";
import { graphql } from 'gatsby'
import Contents from "../components/content";
import Header from "../components/header"

export default ({data}) => {
    const meta = data.allMarkdownRemark.edges[0].node.frontmatter
    console.log(data.allMarkdownRemark.edges[0].node.frontmatter)
    return (
        <>
            <Header path={meta.slug} title={meta.title}/>
            <Contents title="hi" subtitle="sub">

            </Contents>
        </>
    )
}

export const query = graphql`
query($slug: String!) {
    allMarkdownRemark(filter: {frontmatter: {slug: {eq: $slug}}}) {
      edges {
        node {
          frontmatter {
            category
            slug
            tags
            title
          }
        }
      }
    }
  }
  
`