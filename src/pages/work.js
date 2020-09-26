import React from "react"
import '../styles/styles.scss'
import Helmet from "react-helmet"

// import components
import Layout  from "../components/layout"
import Header from "../components/header"

const workPage = () => {
    return (
        <div>
        <Layout>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <title>Drew T. Johnson</title>
        </Helmet>
        <Header />
        <div className="work-container">
            <h1>COMING SOON!</h1>
        </div>
        </Layout>
        </div>
    )
}

export default workPage