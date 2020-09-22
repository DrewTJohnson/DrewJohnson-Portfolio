import React from "react"
import '../styles/styles.scss'

// import components

import Header from "../components/header"
import Banner from "../components/banner"
import HomeDetails from "../components/homeDetails"

const IndexPage = () => (
  <div>
    <Header />
    <div className="home-container">
    <Banner />
    <HomeDetails />
    </div>
  </div>
)

export default IndexPage
