import React, {useState} from "react";
import Header from "../../components/header"
import { graphql, Link } from "gatsby"
import PageHeader from "../../components/page-header";
import Tag from "../../components/tag";
import Footer from "../../components/footer";

export default ({ data }) => {
  const [all, setAll] = useState('')


  const test = (tag) => {
    console.log('test!!!!', tag)
    setAll(tag)
  }
    return (
        <>
            <Header path="/retrospective" title="회고" />
            <div className="wrap min-h-76">
                <PageHeader title="Retrospective ☘" subtitle="시간들을 되돌아보며 적는 회고록" />
                <div className="padding-bottom-1 wrap flex overflow-x-scroll ws-nowrap">
                  <Tag className={"tag pointer bg-orange wordbreak-keepall" + (all == ''? 'selected-tag' : '')} onClick={() => test('')}>All</Tag>
                  {
                    data.allMarkdownRemark.distinct.map(tag => <Tag key={tag} className={"tag pointer bg-orange wordbreak-keepall" + (all == tag? 'selected-tag' : '')} onClick={() => test(tag)}>{tag}</Tag>)
                  }
                </div>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div key={node.id} className="row flex-column" style={{display: !all ? 'block' : node.frontmatter.tags.map(tag => tag).includes(all)? 'block' : 'none'}}>
                      <Link to={node.frontmatter.slug}>
                        <div className="padding-1 h-100">
                              <h3>{node.frontmatter.title}</h3>
                              <p>{node.excerpt}</p>
                              <div className="flex justify-content-between align-center"><div className="flex">{node.frontmatter.tags.map(tag => <Tag key={tag} className="tag">{tag}</Tag>)}</div><div style={{fontSize: 0.7+'rem'}}>{node.frontmatter.date}</div></div>
                              <hr/>
                          </div>
                      </Link>
                    </div>
                ))}

            </div>
            <Footer />
        </>
    )
}


export const query = graphql`
query MyQuery1 {
  allMarkdownRemark(filter: {frontmatter: {category: {eq: "retrospective"}}} sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        frontmatter {
          date
          title
          tags    
          img
          slug
        }
        excerpt
        id
        tableOfContents 
      }
    }
    distinct(field: frontmatter___tags)
  }
}
`