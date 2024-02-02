import React, { useState } from 'react';
import Compare from "./webcam.js"
import myImage from "../images/3.jpg";

const RegisterButton = (text) => {
  const [buttonStyles, setButtonStyles] = useState({
    border: 'none',
    width: '200px',
    height: '65px',
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
    fontWeight: '600',
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
  const handleOnClick = ()=>{
    console.log("Button clicked");
  };
    return <button className="button" type='submit' style={buttonStyles} onMouseEnter={handleHover} onMouseLeave={handleLeave} onClick={handleOnClick}>
    <span className="text" style={textStyles}>{text}</span>
  </button>
  }

let div = {
  height: '100vh',
  width: '100vw',
  backgroundImage:` url(${myImage})`,
  backgroundSize: "cover",
}
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

let authdiv2 = {
  height: '100vh',
  width: '50vw',
}

let authdiv3 ={
  height:'100vh',
  width: '50vw',
}

let box={
  height: '300px',
  padding: '0 3rem 0 3rem'
}

let h1={
  fontFamily: 'Poppins',
  textAlign: 'center',
  fontSize: '2.5rem',
  color: 'white'
  /*paddingLeft: '2.5vw',
  paddingRight: '2.5vw'*/
}

let input = {
  width: '40vw',
  height: '55px',
  borderColor: '#02ffff',
  borderWidth: '2px',
  backgroundColor: 'rgb(0, 28, 32)',
  padding: '0 50px 0 50px',
  borderRadius: '5px',
  fontSize: '20px',
  color: '#02ffff',
}

let item1= {
  padding: '15px 15px 15px 15px'
}

function FaceAuthentication() {
  const [aadharNumber, setAadharNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic for handling the submitted Aadhar Number here
    console.log('Aadhar Number submitted:', aadharNumber);
    // Redirect to /camera or perform other actions as needed
  };

  const handleInputChange = (event) => {
    setAadharNumber(event.target.value);
  };

  return (
    <div style={{...div}}>
      <form onSubmit={handleSubmit}>
        <div style={{float: 'left',...authdiv2, ...flexcolumn}} className='abcd'>
          <Compare aadhar={aadharNumber}/>
        </div>
        <div style={{float:'right',...authdiv3, ...flexcolumn}}>
          <div style={{...flexcolumn, ...box, alignItems: 'center', gap:'2rem'}}>
              <h1 style={h1}>Enter your Aadhar Number</h1>
              <input style={input} type="text" value={aadharNumber} onChange={handleInputChange} />
            <div style={{...flexrow, ...item1}}>
              {/* <button style={button} className="button" type="submit">Submit</button> */}
              {RegisterButton("Submit")}
            </div>
            
          </div>
          
        </div>
      </form>
    </div>
  );
}

export default FaceAuthentication;