// import React from 'react'
// import ProsumerNavbar from "./navbar.js";
// export default function ProsumerHistory() {
//   return (
//     <>
//     <ProsumerNavbar/>
//     <div>login</div></>
//   )
// }



import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myImage from "../images/3.jpg";

import {encryptAES,decryptAES} from "../hooks/encryption"


const RegisterButton = (text, Click) => {
  const [buttonStyles, setButtonStyles] = useState({
    border: 'none',
    width: '200px',
    height: '65px',
    fontWeight: '300',
    borderRadius: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px',
    background: '#005d63',
    cursor: 'pointer',
    transition: 'background 0.3s ease-in-out',
  });
  const [textStyles, setTextStyles] = useState({
    fontWeight: '400',
    color: 'white',
    fontSize: 'x-large',
  });
  const handleHover = () => {
    setButtonStyles((prevStyles) => ({
      ...prevStyles,
      background: 'linear-gradient(0deg, #02ffff, #005d63)',
      transform: 'translateY(-2px)',
    }));
    setTextStyles((prevStyles) => ({
      ...prevStyles,
      color: 'white',
    }));
  };
  const handleLeave = () => {
    setButtonStyles((prevStyles) => ({
      ...prevStyles,
      background: '#005d63',
      transform: 'translateY(0)',
    }));
    setTextStyles((prevStyles) => ({
      ...prevStyles,
      color: 'white', // Set the original color here
    }));
  };
  if (Click !== 0) {
    return (
      <button className="btn" style={buttonStyles} onMouseEnter={handleHover} onMouseLeave={handleLeave} onClick={Click}>
        <span className="text" style={textStyles}>{text}</span>
      </button>
    );
  } else {
    return (
      <button className="btn" style={buttonStyles} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
        <span className="text" style={textStyles}>{text}</span>
      </button>
    );
  }
  }
  export { RegisterButton };
  
  
  let flexrow = {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center'
  }
  
  let flexcolumn = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center'
  }
  
  let div = {
    height: '100vh',
    width: '100vw',
    background: `url(${myImage})`,
    backgroundSize: "cover",
  }
  
  let p={
    fontFamily: 'Poppins',
    color: '#02ffff',
    marginBottom: '0',
    paddingLeft:'30px'
  }
  
  let box= {
    backgroundColor: '#001719',
    opacity: '0.9',
    // #001b1e
    height: '350px',
    width: '45vw',
    borderRadius: '25px',
    padding: '20px'
  }
  
  let input = {
    width: '30vw',
    height: '55px',
    borderColor: '#02ffff',
    borderWidth: '2px',
    backgroundColor: 'rgb(0, 28, 32)',
    padding: '0 50px 0 50px',
    borderRadius: '5px',
    fontSize: '20px',
    color: '#02ffff',
  }

function ProsumerLogin() {
  const [credentials, setcredentials] = useState({
    gst_number: "",
    password: "",
  });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    // Synthetic Event
    e.preventDefault();
    const response = await fetch("/api/ProsumerLogIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        gst_number: credentials.gst_number,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert(
        "Registrant should have atleast 5 characters, GST Number should have atleast 14 characters and Password should have atleast 8 characters"
      );
    }
    if (json.success) {
      localStorage.setItem("prosumerAuthToken", json.authToken);
      localStorage.setItem("microGridId", encryptAES(String(json.microGridId)));
      localStorage.setItem("gstNumber",encryptAES(credentials.gst_number) );
      console.log(localStorage.getItem("authToken"));
      navigate("/Prosumer/home");
    }
  };
  const onChange = (event) => {
    if (event.target) {
      setcredentials({
        ...credentials,
        [event.target.name]: event.target.value,
      });
    }
  };
  return (
    <>
       <div style={{...flexrow, ...div}}>
            <div style={{ ...flexcolumn, gap:'3.5rem'}}>
              {/* <h1 style={h1}>Welcome to our services!</h1> */}
              <div style={{...flexrow}}>
                <div style={{...box, ...flexcolumn, gap:'3rem'}}>
                  <div style={{ ...flexcolumn, gap:'1rem'}}>
                  <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label style={p} htmlFor="gst_number" className="form-label"> GST Number
                        </label>
                        <div style={{ ...flexrow}}>
                          <input style={input} type="text" id="microid" className="form-control m-3" name="gst_number" value={credentials.gst_number} onChange={onChange} /></div>
                      </div>
                      <div className="mb-3">
                        <label style={p} htmlFor="exampleInputPassword1" className="form-label">
                          Password
                        </label>
                        <div style={{ ...flexrow}}>
                          <input style={input} type="password" className="form-control m-3"  name="password" value={credentials.password} onChange={onChange}/></div>
                      </div>
                      <div className="d-flex flex-row justify-content-center">
                        <Link to="/prosumer/signup" style={{...flexrow, textDecoration:'none', margin:"3px"}}>{RegisterButton("Submit", handleSubmit)}</Link>  
                      </div>
                  </form>
                      
                  </div>
                </div>
              </div>
              
            </div>
        </div>
    </> 
  );
}

export default ProsumerLogin;