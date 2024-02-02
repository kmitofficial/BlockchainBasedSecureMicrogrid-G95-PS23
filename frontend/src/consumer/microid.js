import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory from react-router-dom
import { Buffer } from "buffer";
import CryptoJS from "crypto-js";
import myImage from "../images/3.jpg"
import RegisterButton from "./authentication";

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

let h1login={
  fontFamily: 'Poppins',
  textAlign: 'center',
  color: 'white'
}

let p={
  fontFamily: 'Poppins',
  padding: '0 10px 0 10px',
  margin: 0
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


const encryptionKey = "00112233445566778899AABBCCDDEEFF00112233445566778899AABBCCDDEEFF";

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

const message = Math.floor(Math.random() * 9000).toString();

function Microid() {
  const navigate = useNavigate(); // Get the history object

  const micrometerid =`0426ELUZ${message}`;
  const encryptedId = encryptAES(micrometerid);
  localStorage.setItem("micrometerid",encryptedId);

  const sendDataToServer = async () => {

    try {
      // ... (your existing code for sending data to the server)
      const response = await fetch('/api/createConsumer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "microid": micrometerid }),
      });

      const responseData = await response.text(); // Await the response text
      console.log('Server response:', responseData);

      // Redirect to "/login" after successful data submission
      navigate('/consumer/form');
    } catch (error) {
      console.error('Error sending data to the server:', error);
      // Handle errors, e.g., show an error message to the user
    }
  };

  return (
    <div style={{...div, ...flexrow}}>
      <div style={{width:'50vw', ...flexcolumn, gap:'3rem'}}>
        <h1 style={h1login}>Registration successful!</h1>

        <div style={{...flexcolumn, gap:'2rem', alignItems:'center'}}>
            <div style={{...input, ...flexrow, alignItems:'center'}}>
              <p style={p}>Your Micro ID:</p><p style={p}>{micrometerid}</p>
            </div>
            {RegisterButton("Confirm", sendDataToServer)}
          {/* <button style={button} onClick={sendDataToServer}>Confirm</button> */}
        </div>

      </div>
    </div>  );
}

export default Microid;