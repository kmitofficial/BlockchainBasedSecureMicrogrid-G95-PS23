import React, { useState }from 'react'
import myImage from "../images/3.jpg";
import { Link } from "react-router-dom";
import "../consumer/styles.css";


const RegisterButton = (text, Click) => {
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
  
  
  let box= {
    backgroundColor: '#001719',
    opacity: '0.9',
    // #001b1e
    
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

  let h1={
    fontFamily: 'Poppins',
    textAlign: 'center',
    fontSize: '4rem',
    color: 'white'
   
  }
  let p={
    fontFamily: 'Poppins',
    color: '#02ffff',
    marginBottom: '0',
    paddingLeft:'30px'
  }


export default function AddConsumer(props) {
  const [temp, setTemp] = useState('');
  async function callContract(){
    console.log(props.contract)
    let data = await props.contract.addProducer("sai",1);
    let data2=await props.contract.createMicroGrid("sai");
    console.log(data);
  }

  return (

    <>
    <div style={{ ...flexrow, ...div }}>
      <div style={{ ...flexcolumn, gap: '2rem' }}>
      <h1 style={h1}>Add Consumer</h1>

        <div style={{...box, ...flexcolumn, gap:'2rem'}}>
          <div style={{ ...flexcolumn, gap:'1rem'}}>
            <label style={p}  htmlFor="producer-name">ProducerName</label> 
            
            <div style={{ ...flexrow}}>
              <input style={input} type="text" id="producer-name" placeholder="Enter the name" className="form-control m-3" name="gst_number" />
          
            </div>
            <label  style={p} htmlFor="producer-password">Password</label> 
              
            <div style={{ ...flexrow}}>
              <input style={input} type="text" id="producer-password" placeholder="Enter the password" className="form-control m-3" name="gst_number" />
          
            </div>
            <div className="d-flex flex-row gap-3 justify-content-center">
              <Link to="/prosumer/signup" style={{...flexrow, textDecoration:'none', margin:"3px"}}>{RegisterButton("Add Consumer", callContract)}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <input type="text"  id="producer-name"/>
    //     <label htmlFor="">ProducerName</label>
    //     <input type="text"  id="producer-password"/>
    //     <label htmlFor="">Password</label>
    //     {/* <p>{temp}</p> */}
    //     <button onClick={callContract}>button</button>
        

    //   </header>
    // </div>
  );
}