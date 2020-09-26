import React from "react"
import '../styles/styles.scss'

// import components

import Header from "../components/header"

const contactPage = () => {
     
     return (
        <div>
            <Header />
            <div className="contact-container">
                <h1>CONTACT</h1>
            <form action="https://getform.io/f/64e0d7cf-a3af-4b79-b5e6-b52f2e507882" method="POST">
                <label>
                    Name
                    <input type="text" name="name" />
                </label>
                <label>
                    Email
                    <input type="email" name="email" />
                </label>
                <label>
                    Message
                    <textarea type="text" name="message" />
                </label>
                <button type="submit">Send</button>
            </form>
            </div>
        </div>
    )
}

export default contactPage