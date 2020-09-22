import React from "react"
import '../styles/styles.scss'

// import components

import Header from "../components/header"
import Banner from "../components/banner"
import HomeIntro from "../components/homeIntro"
import HomeSkills from "../components/homeSkills"

const IndexPage = () => (
  <div>
    <Header />
    <div className="home-container">
    <Banner />
    <HomeIntro />
    <HomeSkills />
    </div>
  </div>
)

export default IndexPage
