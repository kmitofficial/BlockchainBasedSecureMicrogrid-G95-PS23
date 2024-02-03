import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import myImage from "../images/3.jpg";
import {encryptAES,decryptAES} from "../hooks/encryption"


const RegisterButton = (text, Click) => {
  const [buttonStyles, setButtonStyles] = useState({
    border: 'none',
    width: '200px',
    height: '65px',
    fontWeight: '300',
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
    height: "100vh",
    width: "100vw",
    background: `url(${myImage})`,
    backgroundSize: "cover",
  };
  
  let p={
    fontFamily: 'Poppins',
    color: '#02ffff',
    marginBottom: '0',
    paddingLeft:'30px',
    fontSize:"23px"
  }
  
  let box= {
    backgroundColor: '#001719',
    opacity: '0.9',
    // #001b1e
    width: "60vw",
    borderRadius: '25px',
    padding: '20px'
  }
  
  let input = {
    width: '50vw',
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
    /*paddingLeft: '2.5vw',
    paddingRight: '2.5vw'*/
  }

export default function Signup() {
  const [credentials, setcredentials] = useState({
    name: "",
    password: "",
    designation: "",
  });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    // Synthetic Event
    console.log("Yes");
    e.preventDefault();
    const response = await fetch("/api/ProducerLogIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify({
        name: credentials.name,
        password: credentials.password,
        designation: credentials.designation,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert(
        "Username or Registrant should have atleast 5 characters and Password should have atleast 8 characters"
      );
    }
    if (json.success) {
      localStorage.setItem("producerAuthToken", json.authToken);
      // console.log(decryptAES(encryptAES(json.microGridId)));
      localStorage.setItem("microGridId", encryptAES(String(json.microGridId)));
      console.log(localStorage.getItem("authToken"));
      navigate("/ProducerHome");
    }
  };
  const onChange = (event) => {
    if (event.target) {
      setcredentials({
        ...credentials,
        [event.target.name]: event.target.value,
      });
    }
  };
  return (
    <>
    <div style={{...flexrow, ...div}}>
        <div style={{ ...flexcolumn, gap:'2rem'}}>
          <div style={{...flexrow}}>
            <div style={{...box, ...flexcolumn, gap:'3rem'}}>
              <div style={{ ...flexcolumn, gap:'1rem'}}>
              <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label style={p} htmlFor="Username" className="form-label"> Username
                    </label>
                    <div style={{ ...flexrow}}>
                      <input style={input} type="text" id="Username" className="form-control m-3" name="name" value={credentials.name} onChange={onChange} /></div>
                  </div>
                  <div className="mb-3">
                    <label style={p} htmlFor="exampleInputPassword1" className="form-label">
                      Password
                    </label>
                    <div style={{ ...flexrow}}>
                      <input style={input} type="password" className="form-control m-3"  name="password" value={credentials.password} onChange={onChange}/></div>
                  </div>

                  <div className="mb-3">
                    <label style={p} htmlFor="exampleInputDesignation1" className="form-label mb-3">
                    Designation
                    </label>
                    <div style={{ ...flexrow}}>
                    <select style={input}  className="form-select" name="designation" value={credentials.designation} onChange={onChange}>
                      <option style={input} value="">Select Designation</option><hr/>
                      <option value="Chief Engineer">Chief Engineer</option><hr/>
                      <option value="Superintendent Engineer">
                        Superintendent Engineer
                      </option><hr/>
                      <option value="Divisional Engineer">Divisional Engineer</option><hr/>
                      <option value="Assistant Director">Assistant Director</option><hr/>
                      <option value="Assistant Engineer">Assistant Engineer</option><hr/>
                      <option value="Assistant Sub-Engineer">
                        Assistant Sub-Engineer
                      </option><hr/>
                      <option value="Foreman">Foreman</option><hr/>
                      <option value="Line Inspector">Line Inspector</option><hr/>
                      <option value="Lineman">Lineman</option><hr/>
                      <option value="Junior Lineman">Junior Lineman</option><hr/>
                      <option value="Assistant Lineman">Assistant Lineman</option><hr/>
            
                    </select>
                    </div>
                  </div>


                  <div className="d-flex flex-row justify-content-center">
                    <Link to="/ProducerHome" style={{...flexrow, textDecoration:'none', margin:"3px"}}>{RegisterButton("Submit", handleSubmit)}</Link>
                    </div>
                  </form>
                      
                  </div>
                </div>
              </div>
              
            </div>
        </div>
      {/* <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="Username" className="form-label">
              UserName
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={credentials.name}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={credentials.password}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputDesignation1" className="form-label">
              Designation
            </label>
            <select
              className="form-select"
              name="designation"
              value={credentials.designation}
              onChange={onChange}
            >
              <option value="">Select Designation</option>
              <option value="Chief Engineer">Chief Engineer</option>
              <option value="Superintendent Engineer">
                Superintendent Engineer
              </option>
              <option value="Divisional Engineer">Divisional Engineer</option>
              <option value="Assistant Director">Assistant Director</option>
              <option value="Assistant Engineer">Assistant Engineer</option>
              <option value="Assistant Sub-Engineer">
                Assistant Sub-Engineer
              </option>
              <option value="Foreman">Foreman</option>
              <option value="Line Inspector">Line Inspector</option>
              <option value="Lineman">Lineman</option>
              <option value="Junior Lineman">Junior Lineman</option>
              <option value="Assistant Lineman">Assistant Lineman</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link to="/ProducerSignup" className="m-3 btn btn-danger">
            I'm a new user
          </Link>
        </form>
      </div> */}
    </>
  );
}