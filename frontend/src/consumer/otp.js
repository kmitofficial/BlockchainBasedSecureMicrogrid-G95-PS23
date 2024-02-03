import React, { useState } from 'react';
import axios from 'axios';
import { Link ,useNavigate} from "react-router-dom";
import myImage from "../images/3.jpg";

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

let authdiv3 ={
  width: '50vw',
  padding: '0 2.5vw 0 2.5vw'
}
let div = {
  height: '100vh',
  width: '100vw',
  background: `url(${myImage})`,
  backgroundSize: "cover",
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
let h1={
  fontFamily: 'Poppins',
  textAlign: 'center',
  color: 'white',
  fontSize: '3rem'
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
    return <button className="btn btn-success" onClick={Click} style={buttonStyles} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
    <span className="text" style={textStyles}>{text}</span>
  </button>
  }
/*let h1={
  fontFamily: 'Poppins',
  textAlign: 'center',
  fontSize: '1.5rem',
  width: '45vw',
  marginBottom: '0',
  marginRight: '1.75vw',
  marginLeft: '1.75vw'
  /*paddingLeft: '2.5vw',
  paddingRight: '2.5vw'
}*/

let item1= {
  margin: '10px 15px 10px 15px'
}

let resend = {
  borderColor: '#164863',
  borderRadius: '5px',
  backgroundColor: '#9bbec8',
  fontFamily: 'Roboto',
  color: '#164863',
  fontWeight: 'bold',
  marginRight: '20px'
}


const message = Math.floor(Math.random() * 900000).toString();
const Otp = () => {
  const navigate = useNavigate();
  //const [phoneNum, setPhoneNumber] = useState('12');
  const [buttonText, setButtonText] = useState("Send OTP");
  
  console.log("This is message" + message)
//   const [message, setMessage] = useState(otp);
  const [text, setText] = useState("");
  const handleSendSMS = async () => {

    try {
      setButtonText("Resend OTP");
      // Replace with your Twilio Account SID, Auth Token, and Twilio phone number
      const accountSid = "AC6dcf4a7b062f0004ffcd12d40270c2f6";
      const authToken = "6402e2d634b3e691dffd5dcf33373ad5";
      //async ()=>{setPhoneNumber(await document.getElementById("mobileNumber"));}
      console.log(document.getElementById("mobileNumber").value)
      const response = await axios.post(
        `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
        {
          To: "+91" + document.getElementById("mobileNumber").value,
          From: "+16592186375",
          Body: message,
        },
        {
          headers: {
            Authorization: `Basic ${btoa(`${accountSid}:${authToken}`)}`,

            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      // console.log(response.data);
    } catch (error) {
      console.error('Error sending SMS:', error);
    }
  };
  const handleOnSubmit = () =>{
    let inputValue = document.getElementById("otpNumber").value;
    if (message === inputValue){
        console.log("Yes, It's correct");
        navigate("/consumer/microid");

    }
    else{
        console.log("Wrong otp");
        navigate("");
        setText("Incorrect OTP. Please Try Again");
        setTimeout(()=>{
            setText("/consumer/otp");
         },3000);
        
    }
  }

  return (
    <div className="conatiner" style={{...flexcolumn, ...div}}>
      <div style={{...flexcolumn, ...authdiv3}}></div>
      <h1 style={{...h1}}>Confirm OTP!</h1>
        <div style={{...flexcolumn, height:'400px', alignItems:'center'}}>

          <label htmlFor="otpNumber"></label>
            <input style={{...item1, ...input}} type="text" id="mobileNumber" className="m-3" placeholder='Enter Mobile Number'/>

          <label htmlFor="otpNumber"></label>
            <input style={{...item1, ...input}} type="text" id="otpNumber" className="m-3" placeholder='Enter OTP'/>
          <div style={{...flexrow, width: '40vw', justifyContent: 'flex-end'}}>
            <button style={resend} onClick={handleSendSMS} className='m-3 btn btn-primary'>{buttonText}</button>
          </div>
          {/* <div style={{...flexrow, ...item1}}><Link style={{...button}} className="btn btn-success" onClick={handleOnSubmit}> Submit </Link></div> */}
          {RegisterButton("Submit", handleOnSubmit)}
          <p style={{color:"red"}}> {text}</p>
      </div>
      </div>
      
  );
};

export default Otp;



// Smitha T1KZHJENLBEDUWBAPE2A16XX