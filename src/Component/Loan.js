import React from 'react'
import './Loan.css';
import { Link } from "react-router-dom";
export default function Loan() {
  return (
    <div className='loanPage'>
      <div className="l-test">
        <h1>Welcome To <span>Loan </span> Section</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, earum quo quae dolore sed est!</p>
        <Link to='/Login'>Login</Link>
      </div>
    </div>
  )
}
