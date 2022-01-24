import React from "react"

import logo from "../images/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav className="nav">
            <img src={logo} alt="logo" className="nav__logo" />
        </nav>
    )
}