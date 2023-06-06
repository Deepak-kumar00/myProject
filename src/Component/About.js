import React from 'react'
import './About.css';
import key from './board.jpg';
import { Link } from "react-router-dom"
export default function About() {
  return (
    <section className="about-us">
      <div className="containers">
        <div className="img-section">
          <img src={key} alt=''></img>
        </div>
        <div className="content-section">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Quo mollitia unde nobis eos, ex officia impedit velit et non 
            autem itaque repellat modi, sit obcaecati voluptatum. 
            Autem laudantium quas natus eius sequi, ratione similique aspernatur.
            </p>
            <Link to="/Home" className="btn" >Read More</Link>
        </div>
      </div>
    </section>
  )
}
