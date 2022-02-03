import React from "react"

export default function Info () {
    return(
        <div className = "Info">
            <img src = "pic1.jpeg" className = "Mainpic"></img>
            <h2>Krishna Chaitanya Dutt M</h2>
            <h3>Blockchain Developer/ Data Scientist</h3>
            <h4>KCDUTT.com</h4>
            <div className = "Buttonmain">
                <input type="button" className="Email" value="Email"></input>
                <input type="button" className="Linkdin" value="Linkedin"></input>
            </div>
        </div>
    )
}