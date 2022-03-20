import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"



const BlogIndex = ({ data, location }) => {
  const siteTitle = "X-Files Blog";
  

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Home" />
      <Bio />
       <ul>
    {
      data.allContentfulBlogPost.edges.map(edge => (
        <li>
          <Link to={edge.node.slug} key={edge.node.id}>{edge.node.title}</Link>
          <div>
            
          </div>
          <div>
            {edge.node.body.childMarkdownRemark.excerpt}
          </div>
        </li>
      ))
    }
    </ul>
       
      
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
{  
allContentfulBlogPost {
    edges {
      node {
        id
        title
        slug
        body {
          childMarkdownRemark {
            excerpt
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  }
}
`
