import React from "react";
import myImage from "../images/3.jpg"

const containerStyle = {
    width: '100vw',
    height: '100vh',
    position: 'relative'
  };

  const divStyle = {
    width: '100vw',
    height: '50vh',
    background: 'blue', // Adjust the background color as needed
  };
  let div2={
    width:'100vw',
    height:'50vh',
    backgroundColor:'#010c0e'
  }
  const circleStyle = {
    position: 'absolute',
    top: '50vh',
    left: '20vw',
    transform: 'translate(-50%, -50%)',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    backgroundColor:'blue',
    border:'3px solid #02ffff',
    overflow:'hidden'
  };
  let flexrow = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
  let img = {
    // https://img.freepik.com/free-photo/abstract-digital-grid-black-background_53876-97647.jpg?w=996&t=st=1704914203~exp=1704914803~hmac=dba82b1193632cb3c2991420cf2ad657d5dd2d3dc6454b1e163c26d62dbf42ad
    backgroundImage: `url(${myImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  let dp={
    height:'300px',
    width:'auto'
  }
  let h1={
    color:'white',
    fontSize:'60px',
    position:'absolute',
    left:'35vw',
    top:'40vh',
    display:'inline'
  }
  let gst={
    position:'relative',
    left:'45vw',
    top:'1vh',
    color:'#02ffff',
    fontSize:'25px',
    display:'inline'
  }
  let p={
    color:'white',
    fontWeight:'bold',
    fontSize:'20px'
  }
  let p2={
    color:'#02ffff',
    fontSize:'20px'
  }

export default function ProsumerProfile(){
    
      return (
        <div style={{...containerStyle}}>
          <div style={{...divStyle,...img}}><h1 style={{...h1}}>Prosumer username</h1></div>
          <div style={{...div2}}>
            <p style={{...gst}}>GST Number</p>
            <div style={{...flexrow, width:'65vw',height:'20vh',position:'absolute',left:'25vw',top:'65vh',gap:'8vw'}}>
                <div><p style={{...p}}>Aadhar Number</p><p style={{...p2}}>4556789087654</p></div>
                <div><p style={{...p}}>Mobile Number</p><p style={{...p2}}>1234567890</p></div>
                <div><p style={{...p}}>Email</p><p style={{...p2}}>hdcfvhnjb@gmail.com</p></div>
            </div>
          </div>
          <div style={{...circleStyle}}><img style={{...dp}}src={myImage}/></div>
        </div>
      );
    };