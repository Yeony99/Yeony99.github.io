import React from "react";
import { graphql } from 'gatsby'
import Contents from "../components/content";
import Header from "../components/header"
import styled from "styled-components";
import Tag from "../components/tag";

const ImgHeader = styled.div`
height: 25vh;
    width: 100%;
    background-color: aliceblue;
`

export default ({data}) => {
    const meta = data.allMarkdownRemark.edges[0].node
    console.log(data.allMarkdownRemark.edges[0].node.frontmatter)
    return (
        <>
            <Header path={meta.frontmatter.slug} title={meta.frontmatter.title}/>
            <ImgHeader></ImgHeader>
            <div className="wrap margin-top-1">
                <div className="wrap">
                    <h1 className="margin-top-1666">{meta.frontmatter.title}</h1>
                    <div className="flex align-center">
                        <img style={{height:'auto'}} alt="" width="20" height="20" className="avatar-sm circle margin-right-05" src="https://avatars.githubusercontent.com/u/76241233?v=4" />
                        <h6>Yeony (Nayeon Kim) · {meta.frontmatter.date}</h6>
                    </div>

                    <p>{meta.internal.content}</p>

                    <hr className="margin-0"/>
                    <div className="flex">{meta.frontmatter.tags.map(tag => <Tag key={tag} className="tag tag-sm">{tag}</Tag>)}</div>
                    
                </div>
                
            </div>
            {/* <Contents title="hi" subtitle="sub">

            </Contents> */}
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
              date
              title
            }
            internal {
              content
            }
          }
      }
    }
  }
  
`