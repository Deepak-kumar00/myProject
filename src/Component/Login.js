import React, { useState } from "react";
import "./Login.css";

export default function Login() {
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const[loginStatus,setLoginStatus]=useState('');

    const validCredentials=[
        {email:'deepak@gmail.com', password:'123'}
    ];

    const handleLogin=(e)=>{
        e.preventDefault();

        const matchedCredentials = validCredentials.find((cred)=>cred.email===username && cred.password===password);
        if(matchedCredentials){
            setLoginStatus("Login Successfull");
        }
        else{
            setLoginStatus("Incorrect email & Password");
        }
    };
  return (
    <div className="login-container">
        
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            minLength="6"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        
        <button type="submit" className="btn btn-primary my-3">
          Submit
        </button>
        {loginStatus && <p className="toColor">{loginStatus}</p>}
      </form>
      
    </div>
  );
}
