import React from "react"

export default function Main(){
    return(
        <main>
            <h1>Giovanni Toledo</h1>
            <h3>Front End Developer</h3>
            <h4>giovanni.toledo.website</h4>
            <div className="btn-container">
                <button type="button" className="email-btn" href="geotoledo805@gmail.com" target="_blank"> 
                    <i className="fa fa-envelope"></i> Email
                </button>
                <button type="button" className="linkedin-btn" href="hhttps://www.linkedin.com/in/giovanni-toledo1/" target="_blank">
                   <i className="fa-brands fa-linkedin"></i> LinkedIn
                </button>
            </div>
            <h2 className="about">About</h2>
            <p>Dedicated front-end developer driven by a love for learning and a passion for crafting exceptional digital experiences. I'm here to turn ideas into reality and embark on coding adventures. Let's create something extraordinary together! 🌟</p>
            <h2 className="interests">Interests</h2>
            <p>I'm a Warhammer 40k strategist, passionate about fitness, a gaming aficionado, and a front-end development explorer. I love the thrill of diverse worlds! 🚀💪🎮</p>
        </main>
    )
}