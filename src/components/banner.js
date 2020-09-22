import React from "react"
import { Link } from "gatsby"
import "../styles/styles.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"

const Banner = () => {
   return (
       <div className="banner">
           <div className="container">
               <div className="row">
                   <div className="main-text">Drew T. <span className="end-text">Johnson</span></div>
                   <div className="banner-second-color"></div>
                </div>
               <div className="scroll">
                   <Link>Scroll Down <FontAwesomeIcon className="scroll-down-arrow bounce" icon={faArrowDown} size="1x" /></Link>
                </div>
           </div>
       </div>
   )
}

export default Banner