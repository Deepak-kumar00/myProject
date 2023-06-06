import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className='homePage'>
      <div className="h-test">
        <h1>Welcome To <span>MyProject</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi laudantium natus corrupti non veritatis sapiente alias accusamus labore, illo quidem!</p>
        <Link to='/Login'>Login</Link>
        <Link to='/'>Portfolio</Link>
      </div>
    </div>
  )
}
