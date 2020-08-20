// Challenge #2
// Objective 
// 1. Set up the basic React code from scratch
// 2. Create a functional component called MyInfo that returns the following UI:
// a. A h1 with my name
// b. A paragraph with a blurb of myself
// c. An unordered or ordered list of the top vacation spot I'd like to visit
// 3. Render and instance of that functional component to the browser
// Extra challenge: learn on your my own (Google) how I can add some style to the page.

import React from "react"
import ReactDOM from "react-dom"

function MyInfo() {
    return (
        <div>
            <h3>Andile Jaden Mbele</h3>
            <p>Hello Future, my name is Andile. I am an awesome guy, I like tech, code and reading. My role models are Elon Musk and Jay-Z</p>
            <ul>
                <h4>Top Vacation Spots</h4>
                <li>Singapore</li>
                <li>Paris</li>
                <li>Mountain View, California</li>
            </ul>
        </div>
    )
}

export default MyInfo