import React from "react"
import ReactDOM from "react-dom"
import About from "./Components/About"
import Info from "./Components/Info"
import Interests from "./Components/Interests"
import Footer from "./Components/Footer"

export default function App () {
    return (
        <div className= "Maindiv"> 
            <Info />
            <About />
            <Interests />
            <Footer />      
        </div>
    )
}