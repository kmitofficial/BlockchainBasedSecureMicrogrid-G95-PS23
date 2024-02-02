import React, { useState } from "react";
import myImage from "../images/3.jpg";
import "../consumer/styles.css";
import { Link } from "react-router-dom";
import ProsumerAvailable from "../components/ProsumerAvailable";



function ProsumerJoinMicroGrid() {

  let h1={
    fontFamily: 'Poppins',
    textAlign: 'center',
    fontSize: '4rem',
    color: 'white'
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
    height: "100vh",
    width: "100vw",
    background: `url(${myImage})`,
    backgroundSize: "cover",
    textAlign: "center",
  };
  
  
  let box= {
    backgroundColor: '#001719',
    opacity: '0.9',
    width: "50vw",  
    height:"40vh",  
    borderRadius: '25px',
    padding: '20px',
    textAlign:"center"
  }
 
  

  
  return (
    <>
      <div style={{ ...flexrow, ...div }}>
      <div style={{ ...flexcolumn, gap: '2rem' }}>
        <div className="d-flex flex-row align-items-center" style={{...box, ...flexcolumn, gap:'1rem'}}>
          <div>
            <h1 style={h1}>Join</h1>
            <Link className="removeDash"> 
            <ProsumerAvailable />
            </Link>
          </div>
          
        </div>
      </div>
    </div>
    </>
    
  );
}

export default ProsumerJoinMicroGrid;