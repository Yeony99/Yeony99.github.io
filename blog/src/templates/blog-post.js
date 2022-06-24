import React from "react";
import { graphql } from 'gatsby'
import Header from "../components/header"
import styled from "styled-components";
import Tag from "../components/tag";

const ImgHeader = styled.div`
    height: 25vh;
    width: 100%;
    background-color: #f5fff0;
`

export default ({ data }) => {
    const meta = data.allMarkdownRemark.edges[0].node
    return (
        <>
            <Header path={meta.frontmatter.slug} title={meta.frontmatter.title} />        
            {
                meta.frontmatter.img? 
                <ImgHeader><img className="pg-header-img" src={meta.frontmatter.img}/></ImgHeader>
                : <></>
            }
            <div className="wrap margin-top-1 margin-bottom-1">
                <div className="wrap">
                    <h1 className="margin-top-1666">{meta.frontmatter.title}</h1>
                    <div className="flex align-center">
                        <a href="https://github.com/Yeony99" target="_blank" className="margin-right-05">
                            <img style={{ height: 'auto' }} alt="" width="20" height="20" className="avatar-sm circle margin-bottom-1" src="https://avatars.githubusercontent.com/u/76241233?v=4" />
                        </a>
                        <h6>Yeony (Nayeon Kim) · {meta.frontmatter.date}</h6>
                    </div>
                
                    <div dangerouslySetInnerHTML={ {__html: meta.html} }></div>

                    <hr className="margin-0" />
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
              img
              title
            }
            html
            internal {
              content
            }
          }
      }
    }
  }
  
`