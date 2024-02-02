import React, { useState } from "react";
import AvailableMicrogrid from "../components/AvailableMicrogrid";
import "../consumer/styles.css"
import { useNavigate , Link } from 'react-router-dom';
import myImage from "../images/3.jpg";



function JoinOrCreateMicroGrid() {
  let h1={
    fontFamily: 'Poppins',
    textAlign: 'center',
    fontSize: '4rem',
    color: 'white'
  }
  let createHeading={
    fontFamily: 'Poppins',
    textAlign: 'center',
    fontSize: '2rem',
    color: 'white',
    textDecoration: "none"
  }
  let para = {
    fontFamily: 'Poppins',
    textAlign: 'center',
    fontSize: '1rem',
    color: 'white',
    textDecoration: "none"
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
  
  let div = {
    height: '100vh',
    width: '100vw',
    background: `url(${myImage})`,
    backgroundSize: "cover",
    textAlign:"center"

  }
  
  
  let box= {
    backgroundColor: '#001719',
    opacity: '0.9',
    width: "50vw",  
    height:"40vh",  
    borderRadius: '25px',
    padding: '20px',
    textAlign:"center"
  }
  let verticalLine = {
    borderLeft: "3px solid #002233",
    height: "100px",
  }
  
  const BuyButton = ({ buttonText }) => {
    const [buttonStyles, setButtonStyles] = useState({
      border: 'none',
      width: '150px',
      height: '40px',
      borderRadius: '3em',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '12px',
      background: '#005d63',
      cursor: 'pointer',
      transition: 'all 450ms ease-in-out',
    });
    const [textStyles, setTextStyles] = useState({
      fontWeight: '600',
      color: '#02ffff',
      fontSize: 'medium',
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
        color: '#02ffff',
      }));
    };
    return (
        <button
          className="btn"
          style={buttonStyles}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          onClick={handleClick}
        >
          <span className="text" style={textStyles}>
            {buttonText}
          </span>
        </button>
      );
    };
  
    
    const handleOnCart = () => {
      setColor("#B6D8EB");
    };
    
    const [color, setColor] = useState("#DDF2FD");
  const navigate = useNavigate();

  const handleClick = () => {
    // Redirect to another page and pass the prop as state
    navigate('/addMicrogrid', { state: { redirectLogIn: true } });
  };
  return (
    <>
    <div style={{ ...flexrow, ...div }}>
      <div style={{ ...flexcolumn, gap: '2rem' }}>
        <div className="d-flex flex-row align-items-center" style={{...box, ...flexcolumn, gap:'1rem'}}>
          <div>
            <h1 style={h1}>Join</h1>
            <Link className = "removeDash"> 
              <AvailableMicrogrid />
            </Link>
          </div>
          <h1 style={{...verticalLine, margin:"10px"}}></h1>
          <div>
            <h1 style={createHeading}>Create</h1>
              <p style={para}>Create Your Own Microgrid </p>
            <BuyButton buttonText="here" style={{margin:"10px"}}/>
          </div>
        </div>
      </div>
    </div>
    </>
    // <div>
    //   

    //   
      // <Link className = "removeDash">
      //   <h1>Create</h1>
      //   <p>Create Your Own Microgrid</p>
      //   <AddMicrogrid redirectLogIn={true}/>
      // </Link>
    // </div>
  );
}

export default JoinOrCreateMicroGrid;