import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Buffer } from "buffer";
import CryptoJS from "crypto-js";
import myImage from "../images/3.jpg";

const encryptionKey =
  "00112233445566778899AABBCCDDEEFF00112233445566778899AABBCCDDEEFF";

// Ensure the key is 32 bytes long
if (Buffer.from(encryptionKey, "hex").length !== 32) {
  console.error("Invalid key length. Please use a 32-byte key for AES-256.");
  process.exit(1); // Exit the program due to an error
}

function encryptAES(text) {
  const encrypted = CryptoJS.AES.encrypt(text, encryptionKey).toString();
  return encrypted;
}

function decryptAES(encryptedText) {
  const decrypted = CryptoJS.AES.decrypt(encryptedText, encryptionKey).toString(
    CryptoJS.enc.Utf8
  );
  return decrypted;
}

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
  if (Click!==0){
    return <button className="btn" style={buttonStyles} onMouseEnter={handleHover} onMouseLeave={handleLeave} onClick={Click}>
    <span className="text" style={textStyles}>{text}</span>
  </button>
  }
  else{
    return <button className="btn" style={buttonStyles} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
    <span className="text" style={textStyles}>{text}</span>
  </button>
  }
  }
  export default RegisterButton;
  
  
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
  
  let h1={
    fontFamily: 'Poppins',
    textAlign: 'center',
    fontSize: '4rem',
    color: 'white'
    /*paddingLeft: '2.5vw',
    paddingRight: '2.5vw'*/
  }
  
  let h1login={
    fontFamily: 'Poppins',
    textAlign: 'center',
    color: 'white',
    fontSize: '3rem'
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

function ConsumerAuthentication(){
    return(
        <div style={{...flexrow, ...div}}>
            {/* <div style={{...authdiv2, ...flexcolumn}}></div> */}
            <div style={{ ...flexcolumn, gap:'3.5rem'}}>
              <h1 style={h1}>Welcome to our services!</h1>
              <div style={{...flexrow}}>
                <div style={{...box, ...flexcolumn, gap:'3rem'}}>
                  <div style={{ ...flexcolumn, gap:'1rem'}}>
                    <p style={p}>do not have an accout?</p>
                    <a href="/consumer/registration" style={{...flexrow, textDecoration:'none'}}>{RegisterButton("Register Now", 0)}</a>
                  </div>
                  <div style={{...flexcolumn, gap:'1rem'}}>
                  <p style={p}>already have an accout?</p>
                    <a href="/consumer/login" style={{...flexrow, textDecoration:'none'}}> {RegisterButton("Login Now", 0)}</a>
                  </div>
                </div>
              </div>
              
            </div>
        </div>
    )
}
function ConsumerLogin(){
    const history = useNavigate();
    const [text, setText] = useState("");
    
    const sendDataToServer = async () => {
      console.log("hi")
        let inputValue = document.getElementById("microid").value;
        try {
          // ... (your existing code for sending data to the server)
          const encrypted_inputValue = encryptAES(inputValue);
          // console.log(encrypted_inputValue,"encrypted value")
          const response = await fetch('/api/loginConsumer', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "microid": inputValue }),
          });
    
          const responseData = await response.json(); // Await the response text
          console.log('Server response:',responseData,inputValue);
        
          if(responseData.success===true){
            console.log("done",responseData);

            localStorage.setItem("consumerAuthToken", responseData.consumerAuthToken);
            localStorage.setItem("microGridId", encryptAES(String(responseData.microGridId)));
            localStorage.setItem("micrometerid",encrypted_inputValue);
            history('/consumer/home');
          }
          // Redirect to "/login" after successful data submission
          else{
            console.log("invalid")
            history("/consumer/login");
            setText("INVALID")
        setTimeout(()=>{
            setText("");
         },3000);
          }
        } catch (error) {
          console.error('Error sending data to the server:', error);
          // Handle errors, e.g., show an error message to the user
        }
      };
    return(
      <div style={{...div, ...flexrow}}>
      <div style={{...flexcolumn, gap:'1rem'}}>
        <h1 style={h1login}>Enter your micro ID</h1>
        <div style={{...flexcolumn, gap:'1rem'}}>
          <label htmlFor="microid"></label>
          <div style={{ ...flexrow}}><input style={input} type="text" id="microid" className="m-3"/></div>
          
          <div style={{ ...flexrow}}>
          {RegisterButton("Confirm",sendDataToServer)}
            <p>{text}</p>
          </div>
        </div>
      </div> 
    </div>
    )
}

export {ConsumerAuthentication,ConsumerLogin}