import React from 'react';
import "./about.scss";
import { Icon } from '@iconify/react';


export default function About() {
    return (
        <div className="about" id="about">
            <div class="container">
                <div className="right" >
                    <div className="imgContainer">
                        <img src="image/myoffice.jpeg" alt="" />
                    </div>
                </div>
                <div className="left" 
                >
                    <div className="wrapper">
                        <h2 >About </h2>
                        <p>
                            I am a Junior Web Developer for Frontend & Backend. As new comer into IT industry,
                            I am writing to express my interest in the Web-Developer position
                        </p>
                        <p>
                            My backgroud is that I have been living in Scandinavia and Baltic Countries for the last decade before
                            I moved to Germany in the middle of 2019,
                            Since then I have been learning German (currently B2) language while working in German industry.<br />

                            As a person, I am very easy to communicate. in terms of work attitude,
                            I am fully focused on given task and do it on time.<br />

                            I had the opportunity to become as Fullstack: Web-developer in 2020. since then
                            I have been studying and doing daily exercises in Digital Career Institute here in Düsseldorf.<br />

                            My character include quickly learning new skills and programming languages, problem solving,
                            responsive design principles, website optimisation.<br />

                            So far I have JavaScript, HTML, CSS, jQuery, Bootstrap, and Git/GitHub under my belt.
                            Currently I'm improving in learning React, SQL, Node.JS, MongoDB, and Express.JS.<br />

                            I'm still enthusiastically grabbing onto any other programming languages, frameworks, or principles
                            I can integrate into the coding web in my head.
                        </p>
                    </div>
                </div>
            </div>
            <div className="skills">
                <button><Icon icon="logos:html-5" /><span>HTML5</span></button>
                <button><Icon icon="logos:css-3" /><span>CSS3</span></button>
                <button><Icon icon="vscode-icons:file-type-sass" /><span>SASS</span></button>
                <button><Icon icon="logos:bootstrap" /><span>Bootstrap</span></button>
                <button><Icon icon="logos:javascript" /><span>JavaScript</span></button>
                <button><Icon icon="logos:react" /><span>React</span></button>
                <button><Icon icon="logos:redux" /><span>Redux</span></button>
                <div className="central">
                    <button><Icon icon="logos:nodejs" /><span>Node</span></button>
                    <button><Icon icon="logos:mongodb" /><span>MongoDB</span></button>
                    <button><Icon icon="bx:bx-code-curly" /><span>Express</span></button>
                    <button><Icon icon="fa-brands:git-square" /><span>Git</span></button>
                </div>


            </div>
        </div>
    )
}
