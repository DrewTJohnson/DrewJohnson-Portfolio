import React from "react"
import { Link } from "gatsby"
import "../styles/styles.scss"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import HTML from "../images/html5.svg"
import CSS from "../images/css3.svg"
import JS from "../images/javascript.svg"
import BOOTSTRAP from "../images/bootstrap.svg"
import RUBY from "../images/ruby.svg"
import RAILS from "../images/rails.svg"
import GIT from "../images/git.svg"
import GATSBY from "../images/gatsby-icon.png"
import KOTLIN from "../images/Kotlin.svg"
import REACT from "../images/react.svg"

const homeSkills = () => {
    return (
        <div className="home-skills">
            <div className="container">
                <div className="first-container">
                <div className="flex-grid">
                    <div className="col">
                        <div className="image-container">
                            <Link to="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank">
                                <img src={HTML} title="HTML 5" alt="HTML 5 Logo, links to MDN docs." />
                                <div className="popup" id="popup1">HTML5</div>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="image-container">
                            <Link to="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                                <img src={CSS} title="CSS 3" alt="CSS3 Logo, links to MDN docs." />
                                <div className="popup" id="popup2">CSS3</div>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="image-container">
                            <Link to="https://www.javascript.com/" target="_blank">
                                <img src={JS} title="JavaScript" alt="JavaScript Logo, links to JavaScript website." />
                                <div className="popup" id="popup3">JavaScript</div>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="image-container">
                            <Link to="https://getbootstrap.com/" target="_blank">
                                <img src={BOOTSTRAP} title="Bootstrap" alt="Bootstrap Logo, links to Bootstrap website." />
                                <div className="popup" id="popup4">Bootstrap</div>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="image-container">
                            <Link to="https://www.gatsbyjs.com/" target="_blank">
                                <img src={GATSBY} title="GatsbyJS" alt="GatsbyJS Logo, links to GatsbyJS webiste." />
                                <div className="popup" id="popup5">GatsbyJS</div>
                            </Link>
                        </div>
                    </div>
                    </div>
                    </div>
                    <div className="second-container">
                        <div className="flex-grid">
                    <div className="col">
                        <div className="image-container">
                            <Link to="https://www.ruby-lang.org/en/" target="_blank">
                                <img src={RUBY} title="Ruby" alt="Ruby Logo, links to Ruby website." />
                                <div className="popup" id="popup6">Ruby</div>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="image-container">
                            <Link to="https://rubyonrails.org/" target="_blank">
                                <img src={RAILS} title="Rails" alt="Rails Logo, links to Ruby on Rails website." />
                                <div className="popup" id="popup7">Rails</div>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="image-container">
                            <Link to="https://reactjs.org/" target="_blank">
                                <img src={REACT} title="ReactJS" alt="ReactJS Logo, links to ReactJS website." />
                                <div className="popup" id="popup8">ReactJS</div>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="image-container">
                            <Link to="https://kotlinlang.org/" target="_blank">
                                <img src={KOTLIN} title="Kotlin" alt="Kotlin Logo, links to Kotlin webiste." />
                                <div className="popup" id="popup9">Kotlin</div>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="image-container">
                            <Link to="https://git-scm.com/" target="_blank">
                                <img src={GIT} tite="Git" alt="Git Logo, links to Git website." />
                                <div className="popup" id="popup10">GIT</div>
                            </Link>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default homeSkills