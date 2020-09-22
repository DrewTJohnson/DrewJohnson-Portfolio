import React from "react"
import "../styles/styles.scss"

const HomeDetails = () => {
    return (
        <div className="home-details" id="homeDetailsSection">
           <div className="container">
            <div className="primary-container">
                <div className="secondary-color"></div>

                        <div className="grid-container">
                            <div className="paragraph-header">
                                <h2>Who are you?</h2>
                            </div>
                            <div className="details-paragraph">
                                <p>I am an experienced Front-End Developer with a background in web design. I am currently looking for new roles and constantly adding to my
                                    plethora of knowledge. I'm not only looking for freelance projects, but I'm also looking to find an organization I believe in that I know I can improve
                                    with my jack of all trades background.
                                </p>
                            </div>
                        </div>
                    </div>
            <div className="secondary-container">
                <div className="secondary-color"></div>
                <div className="container">
                    <div className="grid-container">
                        <div className="paragraph-header">
                            <h2>Front-End Development</h2>
                        </div>
                        <div className="work-picture">
                        </div>
                    </div>
                </div>
            </div>
            <div className="final-container">
                <div className="secondary-color"></div>
                <div className="container">
                    <div className="grid-container">
                        <div className="paragraph-header">
                            <h2>Recipes?</h2>
                        </div>
                        <div className="details-paragraph">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default HomeDetails