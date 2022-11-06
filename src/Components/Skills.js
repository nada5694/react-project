import React from 'react';
import './Skills.css';




function Skills() {
  return (
    <div class="our-skills" id="our-skills">
      <h2 class="main-title">Our Skills</h2>
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <img src="imgs/skills.png" alt="" />
          </div>          
            <div class="skills col-lg-6">
              <div class="skill">
                <h3>HTML <span>80%</span></h3>
                <div class="the-progress">
                <span id='spa1' data-width="80%"></span>
                </div>
              </div>
              <div class="skill">
                <h3>CSS <span>85%</span></h3>
                <div class="the-progress">
                <span id="spa2" data-width="85%"></span>
                </div>
              </div>
              <div class="skill">
                <h3>JavaScript <span>70%</span></h3>
                <div class="the-progress">
                <span id="spa3" data-width="70%"></span>
                </div>
              </div>
              <div class="skill">
                <h3>Python <span>80%</span></h3>
                <div class="the-progress">
                <span id="spa4" data-width="80%"></span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

let progressSpans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");
let started = false; // Function Started ? No

window.onscroll = function () {
  // Skills Animate Width
  if (window.scrollY >= section.offsetTop - 250) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};

export default Skills