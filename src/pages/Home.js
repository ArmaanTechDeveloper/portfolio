import React from 'react'
import './pagesCss/Home.css'
export default function Home() {
  return (
    <>
    <div id="heroSection">
        <h1>Welcome To ArmaanTechDeveloper</h1>
        <p>Get to know everything about me , my works , my social handles and also to contact me whenever you need</p>
        <div>
            <button>Hire me !</button>
            <button className="green">Download CV</button>
        </div>
    </div>

    <div id="users">
        <div>
            <h3>Users Visited</h3>
            <p>1000</p>
        </div>
        <div>
            <h3>Users Registered</h3>
            <p>3000</p>
        </div>
    </div>

    <div id="aboutme" >
        <div className="aboutmeborder">
            <h2>About me</h2>
            <div className="aboutmeborder">
                <p>Hello! My name is Armaan and I enjoy creating things that live on the internet. My interest in web development started back in 2020 when I decided to try something contributing to the web — Followed a course some documentation and build some amazing clones and websites , taught me great about HTML and CSS</p>
                <p>Fast forward to today , I graduated my high school and currently i am learning REACT and EXPRESS js to turn my awesome projects into some awesome contributing , fast , reliable websites. My main focus these days is to learn and build accessible , inclusive products and try getting some experience in the actual work field</p>
            </div>
            <div id="skills">
                <div className="skills">HTML 5</div>
                <div className="skills">CSS</div>
                <div className="skills">JAVASCRIPT</div>
                <div className="skills">REACT</div>
                <div className="skills">EXPRESS</div>
            </div>
        </div>
        <div>
            <img src="https://armaantechdeveloper.github.io/Website/photo.jpg" alt="" />
        </div>
    </div>
    </>
  )
}

// FrontEnd JavaScript
// let usersVisited = 10000;
// let usersRegistered = 1000;
// let i = 0;
// let j = 0;
// let skip = 25;
// const fori = setInterval(() => {
//     const uservisit = document.querySelector('#users > div:nth-child(1) > p');
//     uservisit.innerHTML = i;
//     i = i+skip;
//     if(i>usersVisited){
//         clearInterval(fori);
//     }
// }, 0.001);
// const forj = setInterval(() => {
//     const uservisit = document.querySelector('#users > div:nth-child(2) > p');
//     uservisit.innerHTML = j;
//     j = j+10;
//     if(j>usersRegistered){
//         clearInterval(forj);
//     }
// }, 0.001);