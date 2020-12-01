import React from "react"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

// Import Components
import "../styles/index.scss"
import "../styles/variables.scss"

export default function NotFoundPage() {
  const data = useStaticQuery(graphql`
    query {
      NotFoundImage: file(relativePath: { eq: "pensive-404.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>404: Not Found</title>
      </Helmet>
      <div className="not-found">
        <div className="not-found-text">
          Oh dear, we're unable to find that page{" "}
          <span role="img" aria-label="sweat_smile">
            😅
          </span>
        </div>
        <div className="not-found-img">
          <Img fluid={data.NotFoundImage.childImageSharp.fluid} />
        </div>
      </div>
    </div>
  )
}

//export default NotFoundPage
