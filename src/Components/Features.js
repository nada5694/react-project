import React from 'react'
import './Features.css'

function Features() {
  return (
    <>
    <div class="features" id="features">
      <h2 class="main-title">Features</h2>
      <div class="container">
        <div class="boxs row">
        <div class="box col-lg-4 quality">
          <div class="img-holder"><img src="imgs/features-01.jpg" alt="" /></div>
          <h2>Quality</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
          <a href="#">More</a>
        </div>
        <div class="box col-lg-4 time">
          <div class="img-holder"><img src="imgs/features-02.jpg" alt="" /></div>
          <h2>Time</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
          <a href="#">More</a>
        </div>
        <div class="box col-lg-4 passion">
          <div class="img-holder"><img src="imgs/features-03.jpg" alt="" /></div>
          <h2>Passion</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
          <a href="#">More</a>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Features
