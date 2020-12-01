import React from "react"
import { Helmet } from "react-helmet"

// Import Components
import Header from "../components/header"
import Banner from "../components/banner"
import "../styles/index.scss"

const IndexPage = () => (
  <html lang="en">
    {/*This is a comment btw*/}
    <section>
      <div>
        <meta charset="utf-8" />
        <meta name="theme-color" content="#f2f4f5" />
        <meta name="og:title" content="Black Frog Studios" />
        <meta
          name="twitter:description"
          content="Black Frog Studios is a small video game development team founded in 2019. We have developed hits such as the Franklin franchise and Super Aleksandr Jones and the Round World. We focus on making titles with stunning stories and gameplay, as well as game assets and other media."
        />
        <meta
          name="og:image"
          content="https://github.com/ANF-Studios/Black-Frog2.github.io/blob/main/src/images/bfs-logo.png"
        />
        <Helmet>
          <title>Home | Black Frog Studio</title>
        </Helmet>
        <Header />
        <Banner />
      </div>
    </section>
  </html>
)

export default IndexPage
// https://github.com/wrongakram/odunsi-starter

/*
<main>
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Black Frog Studios</title>
      </Helmet>
      <body>
        <p>
          Hello World from <a href="/">Home</a>!
        </p>
      </body>
    </div>
    <div>
      <p align="down">Hello</p>
    </div>
  </main>
*/
