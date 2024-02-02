import React, { useState } from "react";
import connectToMetaMask from "../hooks/MetaMaskConnection";
import { Link , useNavigate, useParams } from "react-router-dom";
import myImage from "../images/3.jpg";


const RegisterButton = (text, Click) => {
  const [buttonStyles, setButtonStyles] = useState({
    border: 'none',
    width: '60%',
    height: '55px',
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
    background:`url(${myImage})`,
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
  

function AddProducer(props) {

  const [redirect, setRedirect] = useState(false); 
  const [tem, setTem] = useState("");
  const navigate = useNavigate()
  const {ProducerName} = useParams()
  async function connect() { 
    const { sendDataContract } = await connectToMetaMask();
    setTem(sendDataContract);
  }

  async function addProducer() {
    let uniqueID = document.getElementById("uniqueID").value;
    let name = document.getElementById("name").value;
    if(props.anotherProducer){
      const anotherProducerAddress = document.getElementById("anotherProducerAddress").value;
      const data = await tem.addAnotherProducer(name, Number(uniqueID),anotherProducerAddress);
   
      console.log("another producer",ProducerName)
      navigate(`/producer/AddToMicrogrid/${ProducerName}`)
    }else{
      const data = await tem.addProducer(name, Number(uniqueID))
      setRedirect(true); // Set redirection to true after MetaMask action is confirmed
    }
  }
  // ... (rest of your code remains unchanged)

  // Redirect to the specified page when redirect is true
  if (redirect) {
    navigate("/JoinOrCreateMicroGrid");
  }

  

  return (
    <>
      <div style={{ ...flexrow, ...div }}>
        <div style={{ ...flexcolumn, gap: "2rem" }}>
          <h1 style={h1}>Add Producer</h1>

          <div style={{ ...box, ...flexcolumn, gap: "2rem" }}>
            <div style={{ ...flexcolumn, gap: "1rem" }}>
              <div style={{ ...flexrow }}>
                <input
                  style={input}
                  type="text"
                  id="uniqueID"
                  placeholder="Enter the uniqueID"
                  className="form-control m-3"
                />
              </div>

              <div style={{ ...flexrow }}>
                <input
                  style={input}
                  type="text"
                  id="name"
                  placeholder="Enter the name"
                  className="form-control m-3"
                />
              </div>
              {props.anotherProducer? <div style={{ ...flexrow }}>
                <input
                  style={input}
                  type="text"
                  id="anotherProducerAddress"
                  placeholder="Another Producer Address"
                  className="form-control m-3"
                />
              </div>:<>  </>}

              {/* <div style={{ ...flexrow}}>
              <input style={input} type="text" id="energyRequired" placeholder="Enter the energyRequired" className="form-control m-3" name="gst_number" />
            </div> */}
              <Link
                style={{ ...flexrow, textDecoration: "none", margin: "3px" }}
              >
                {RegisterButton("Connect MetaMask", connect)}
              </Link>

              <Link
                
                style={{ ...flexrow, textDecoration: "none", margin: "3px" }}
              >
                {RegisterButton("Add Producer", addProducer)}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="welcomeContainer shadow" style={style}>
        <h1>Add producer</h1>
        <br />
        <input type="text" id="uniqueID" placeholder="uniqueID" style={inputbox} />
        <br />
        <input type="text" id="name" placeholder="name" style={inputbox} />
        <br />
        {/* <input type="text" id="energyRequired" placeholder="energyRequired" style={inputbox} />
        <br /> */}
      {/* <button className="btn" style={myButton} onClick={addProducer}>
          Add producer
        </button>
        <button className="btn" style={myButton} onClick={connect}>
          Connect MetaMask
        </button>
      </div> */}
      {/* Uncomment and implement the producer component */}
      {/* <Producer /> */}
      {/* <AddLoad />*/}
    </>
  );
}

export default AddProducer;