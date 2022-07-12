import React, { useEffect, useState } from "react";
import { graphql } from 'gatsby'
import Header from "../components/header"
import styled from "styled-components";
import Tag from "../components/tag";
import Utterances from "../components/utterances";
import Footer from "../components/footer";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();


const ImgHeader = styled.div`
    height: 35vh;
    width: 100%;
    background-color: #f5fff0;
`

export default ({ data }) => {
    const meta = data.allMarkdownRemark.edges[0].node

    const [ScrollY, setScrollY] = useState(0);  // 스크롤값을 저장하기 위한 상태
    const handleFollow = () => {
        setScrollY(window.pageYOffset); // window 스크롤 값을 ScrollY에 저장
    }

    useEffect(() => {
        // console.log("ScrollY is ", ScrollY); // ScrollY가 변화할때마다 값을 콘솔에 출력
    }, [ScrollY])

    useEffect(() => {
        const watch = () => {
        window.addEventListener('scroll', handleFollow);
        }
        watch(); // addEventListener 함수를 실행
        return () => {
        window.removeEventListener('scroll', handleFollow); // addEventListener 함수를 삭제
        }
    })

    return (
        <>
            <Header path={meta.frontmatter.slug} title={meta.frontmatter.title} />        
            {
                meta.frontmatter.img? 
                <ImgHeader><img className="pg-header-img" src={meta.frontmatter.img}/></ImgHeader>
                : <></>
            }
            <div className="toc-container transition duration-500" style={ScrollY> 335? {top: 0} : ScrollY >= 300? {top: 125} : ScrollY >= 200? {top: 225} : ScrollY >= 100 ? {top: 325} : {}}>
                <div className="toc-wrapper">
                    <div className="toc-content">
                        <div className="toc" dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.tableOfContents }} />
                    </div>
                    {/* <div className="toc-open-btn" onClick={onClickTOCOpen}></div> */}
                </div>
            </div>
            <div className="wrap margin-top-1 margin-bottom-1 transition duration-500">
                <div className="wrap">
                    <h1 className="margin-top-1666">{meta.frontmatter.title}</h1>
                    <div className="flex align-center">
                        <a href="https://github.com/Yeony99" target="_blank" rel="noreferrer"className="margin-right-05">
                            <img style={{ height: 'auto' }} alt="" width="20" height="20" className="avatar-sm circle margin-bottom-1" src="https://avatars.githubusercontent.com/u/76241233?v=4" />
                        </a>
                        <h6>Yeony (Nayeon Kim) · {meta.frontmatter.date}</h6>
                    </div>
                
                    <div className="blog-post" dangerouslySetInnerHTML={ {__html: meta.html} }></div>

                    <hr className="margin-0" />
                    <div className="flex">{meta.frontmatter.tags.map(tag => <Tag key={tag} className="tag tag-sm">{tag}</Tag>)}</div>

                </div>
                <div className="padding-1 margin-top-2">
                    <div className="b-shadow-10-gray">
                        <Utterances />
                    </div>

                </div>
            </div>
            <Footer />
            
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
            tableOfContents
          }
      }
    }
  }
  
`