import React from "react"
import '../styles/styles.scss'

// import components

import Header from "../components/header"
import Banner from "../components/banner"
import HomeIntro from "../components/homeIntro"
import HomeSkills from "../components/homeSkills"

const IndexPage = () => {
    return (
  <div>
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <title>Drew T. Johnson</title>
    </Helmet>
      <Header />
      <div className="home-container">
      <Banner />
      <HomeIntro />
      <HomeSkills />
      </div>
    </div>
  )
}
export default IndexPage
