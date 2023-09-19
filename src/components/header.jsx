import React from "react"
import '../styles/header.css'

export default function Header() {
    return(
        <header>
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png" 
                alt="logo marvel "
                className="logomarvel" />
            <h1 className="title">Les personnages</h1>
        </header>
    )
}