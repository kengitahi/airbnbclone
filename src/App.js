import React from "react"

// styles
import "./style.css"

// Components
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

//Data
import data from "./data.js"

export default function App() {
    const cards = data.map(item => {
        return <Card
            key={item.id}
            {...item}
        />
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards">
                {cards}
            </section>

        </div>

    )
}