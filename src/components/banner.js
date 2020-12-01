import React from "react"
//import { useStaticQuery, graphql } from "gatsby"
//import ImgGI from "gatsby-imageimport
import Logo from "../images/bfs-logo-transparent.png"
import "../styles/index.scss"

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="main-text" draggable="false">
            Welcome to Black Frog Studios
          </div>
          <div className="main-image">
            <img className="main-image" src={Logo} alt="" draggable="false" />
          </div>
        </div>
      </div>
    </div>
  )
}

/*
const Banner = () => {
    const data = useStaticQuery(graphql`
    query {
        BFSLogo: file(relativePath: { eq: "bfs-logo-dark.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="main-text">Welcome to Black Frog Studio</div>
                    <div className="main-image">
                      <Img fluid={data.BFSLogo.childImageSharp.fluid} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export defaultt n*/
export default Banner
