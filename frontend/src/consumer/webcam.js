/*import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';

function ShowImage({ webRef,aadharnumber,history}) {
  const [imageInBase64, setImageInBase64] = useState("");
  const [faceMatched, setFaceMatched] = useState("wait");
  const [showWebcam, setShowWebcam] = useState(true);

  const captureImage = () => {
    const base64Data = webRef.current.getScreenshot();
    setImageInBase64(base64Data);
    setShowWebcam(false); // Hide webcam after capturing image
  };

  const sendDataToServer = async () => {
    try {
      // ... (your existing code for sending data to the server)
      const response = await fetch('/api/aadharDatabase', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "imagedata": imageInBase64,"aadharnumber":aadharnumber }),
      });
  
      if (!response.ok) {
        throw new Error('Netawork response was not ok');
      }
  
      const responseData = await response.text(); // Await the response text
      console.log('Server response:', responseData);

      // Assuming there's a variable in the server response indicating face match status
      const isFaceMatched = responseData === "True";
      setFaceMatched(isFaceMatched ? "True" : "False");
    } catch (error) {
      console.error('Error sending data to server:', error);
      // Handle errors, e.g., show an error message to the user
    }
  };

  return (
    <div>
      <p>{aadharnumber}</p>
      {showWebcam ? (
        <>
          <Webcam ref={webRef} />
          <button onClick={captureImage}>Capture Photo</button>
        </>
      ) : (
        <>
          {imageInBase64 === "" ? (
            <p>No image captured</p>
          ) : (
            <>
              <img src={imageInBase64} alt="Captured" />
              <button className="button" onClick={sendDataToServer}>
                Compare
              </button>
            </>
          )}
        </>
      )}
      <br />
      {faceMatched === "True" ? (<button onClick={() => history('/consumer/otp')}>GET OTP</button> ): (
        <p>Invalid</p>
      )}
    </div>
  );
}

function Compare({aadhar}) {
  const webRef = useRef(null);
  const history = useNavigate();
  return (
    <div className="App">
      <ShowImage webRef={webRef} aadharnumber={aadhar} history={history} />
    </div>
  );
}


export default Compare;*/

import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';

const CapturePhotoButton = (text, click) => {
  const [isHovered, setIsHovered] = useState(false);
  const buttonStyles = {
    alignItems: 'center',
    backgroundImage: 'linear-gradient(144deg, #02ffff, #005b60 50%, #00DDEB)',
    border: '0',
    borderRadius: '10px',
    boxSizing: 'border-box',
    color: '#FFFFFF',
    display: 'flex',
    fontSize: 'large',
    justifyContent: 'center',
    lineHeight: '1em',
    maxWidth: '100%',
    minWidth: '140px',
    padding: '3px',
    textDecoration: 'none',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    touchAction: 'manipulation',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    transition: 'all .3s',
    background:  'linear-gradient(144deg, #02ffff, #005b60 50%, #00DDEB)',
    outline: '0',
    transform: isHovered ? 'scale(0.99)' : 'scale(1)',
  };

  const spanStyles = {
    background: isHovered ? 'linear-gradient(144deg, #02ffff, #005056, #005b60 50%, #00DDEB)': '#001317',
    padding: '16px 24px',
    borderRadius: '6px',
    width: '100%',
    height: '100%',
    transition: '300ms',
  };

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };
  return (
    <button
      style={buttonStyles}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      onClick={click}
    >
      <span style={spanStyles} className="text">
        {text}
      </span>
    </button>
  );
};

export {CapturePhotoButton};
let flexcolumn = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center'
}

let authdiv2 = {
  height: '65vh',
}
let divwebcam={
  alignItems:'center', 
  gap: '2rem', 
  backgroundColor: '#001317', 
  boxShadow: '0 0 4px #02ffff',
  margin: '0 2rem 0 2rem',
  padding: '2rem 2rem 2rem 2rem',
  borderRadius: '20px'
}

function ShowImage({ webRef,aadharnumber,navigate}) {
  const [imageInBase64, setImageInBase64] = useState("");
  const [faceMatched, setFaceMatched] = useState("wait");
  const [showWebcam, setShowWebcam] = useState(true);

  const captureImage = () => {
    const base64Data = webRef.current.getScreenshot();
    setImageInBase64(base64Data);
    setShowWebcam(false); // Hide webcam after capturing image
  };

  const sendDataToServer = async () => {
    try {
      // ... (your existing code for sending data to the server)
      const response = await fetch('/api/aadharDatabase', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "imagedata": imageInBase64,"aadharnumber":aadharnumber }),
      });
  
      if (!response.ok) {
        throw new Error('Netawork response was not ok');
      }
  
      const responseData = await response.text(); // Await the response text
      console.log('Server response:', responseData);

      // Assuming there's a variable in the server response indicating face match status
      if (responseData === "True"){
        navigate("/consumer/otp")
      }
    } catch (error) {
      console.error('Error sending data to server:', error);
      // Handle errors, e.g., show an error message to the user
    }
  };

  return (
    <div>
      {showWebcam ? (
        <>
          <div style={{...flexcolumn, ...divwebcam}}>
            <Webcam style={{float: 'left',...authdiv2}} ref={webRef} />
            {/* <button style={button} onClick={captureImage}>Capture Photo</button> */}
            {CapturePhotoButton("Capture Photo", captureImage)}
          </div>
        </>
      ) : (
        <>
          {imageInBase64 === "" ? (
            <p>No image captured</p>
          ) : (
            <>
            <div style={{...flexcolumn, ...divwebcam}}>
              <img style={{float: 'left',...authdiv2}} src={imageInBase64} alt="Captured" />
              {/* <button style={{...button}} className="button" onClick={sendDataToServer}>
                Compare
              </button> */}
              {CapturePhotoButton("Compare Photo", sendDataToServer)}
            </div>
              
            </>
          )}
        </>
      )}
      <br />
       {/* {faceMatched === "True" ? (<button onClick={() => navigate('/otp')}>GET OTP</button> ): (
        <p>Invalid</p>
      )}  */}
    </div>
  );
}

function Compare({aadhar}) {
  const webRef = useRef(null);
  const navigate = useNavigate();
  return (
    <div className="App">
      <ShowImage webRef={webRef} aadharnumber={aadhar} navigate={navigate} />
    </div>
  );
}


export default Compare;


