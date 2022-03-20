import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
 const { title, body } = data.contentfulBlogPost
  

  return (
    <Layout title={title}>
      <Seo
        title={title}
       
      />
     
        <header>
          <h1 itemProp="headline">{title}</h1>
          <p>{data.contentfulBlogPost.frontmatter}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{__html: body.childMarkdownRemark.html}}
          itemProp="articleBody"
        />
      
        <footer>
          <Bio />
        </footer>
      
     
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`