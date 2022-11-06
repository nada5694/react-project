import React from 'react';
import './Testimonials.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfAlt } from "@fortawesome/free-regular-svg-icons";

function Testimonials() {
  return (
    <div class="testimonials" id="testimonials">
      <h2 class="main-title">Testimonials</h2>
      <div class="container">
          <div class="boxs row">
          <div class="box col-lg-3 col-md-6 col-md-12">
          <img src="imgs/avatar-01.png" alt="" />
          <h3>Mohamed Farag</h3>
          <span class="title">Full Stack Developer</span>
          <div class="rate">
            <FontAwesomeIcon className="icon" icon={faStar} />
            <FontAwesomeIcon className="icon" icon={faStar} />
            <FontAwesomeIcon className="icon" icon={faStar} />
            <FontAwesomeIcon className="icon" icon={faStar} />
            <FontAwesomeIcon className="icon" icon={faStarHalfAlt} />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
            quaerat ducimus
          </p>
        </div>
        <div class="box col-lg-3 col-md-6 col-md-12">
          <img src="imgs/avatar-02.png" alt="" />
          <h3>Mohamed Ibrahim</h3>
          <span class="title">Full Stack Developer</span>
          <div class="rate">
            <FontAwesomeIcon className="icon" icon={faStar} />
            <FontAwesomeIcon className="icon" icon={faStar} />
            <FontAwesomeIcon className="icon" icon={faStar} />
            <FontAwesomeIcon className="icon" icon={faStar} />
            <FontAwesomeIcon className="icon" icon={faStarHalfAlt} />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
            quaerat ducimus
          </p>
        </div>
        <div class="box col-lg-3 col-md-6 col-md-12">
          <img src="imgs/avatar-03.png" alt="" />
          <h3>Shady Nabil</h3>
          <span class="title">Full Stack Developer</span>
          <div class="rate">
            <FontAwesomeIcon className="icon" icon={faStar} />
            <FontAwesomeIcon className="icon" icon={faStar} />
            <FontAwesomeIcon className="icon" icon={faStar} />
            <FontAwesomeIcon className="icon" icon={faStar} />
            <FontAwesomeIcon className="icon" icon={faStarHalfAlt} />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
            quaerat ducimus
          </p>
        </div>
        <div class="box col-lg-3 col-md-6 col-md-12">
          <img src="imgs/avatar-04.png" alt="" />
          <h3>Amr Hendawy</h3>
          <span class="title">Full Stack Developer</span>
          <div class="rate">
            <FontAwesomeIcon className="icon" icon={faStar} />
            <FontAwesomeIcon className="icon" icon={faStar} />
            <FontAwesomeIcon className="icon" icon={faStar} />
            <FontAwesomeIcon className="icon" icon={faStar} />
            <FontAwesomeIcon className="icon" icon={faStar} />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
            quaerat ducimus
          </p>
        </div>
        <div class="box col-lg-3 col-md-6 col-md-12">
          <img src="imgs/avatar-05.png" alt="" />
          <h3>Sherief Ashraf</h3>
          <span class="title">Full Stack Developer</span>
          <div class="rate">
            <FontAwesomeIcon className="icon" icon={faStar} />
            <FontAwesomeIcon className="icon" icon={faStar} />
            <FontAwesomeIcon className="icon" icon={faStar} />
            <FontAwesomeIcon className="icon" icon={faStar} />
            <FontAwesomeIcon className="icon" icon={faStarHalfAlt} />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
            quaerat ducimus
          </p>
        </div>
        <div class="box col-lg-3 col-md-6 col-md-12">
          <img src="imgs/avatar-06.png" alt="" />
          <h3>Osama Mohamed</h3>
          <span class="title">Full Stack Developer</span>
          <div class="rate">
            <FontAwesomeIcon className="icon" icon={faStar} />
            <FontAwesomeIcon className="icon" icon={faStar} />
            <FontAwesomeIcon className="icon" icon={faStar} />
            <FontAwesomeIcon className="icon" icon={faStar} />
            <FontAwesomeIcon className="icon" icon={faStarHalfAlt} />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
            quaerat ducimus
          </p>
        </div>
      </div>
          </div>
        
    </div>
  )
}

export default Testimonials