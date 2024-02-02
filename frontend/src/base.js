//base.js

import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import myImage from "./images/3.jpg";
import consumerHomes from "./images/consumerHome.png";
import virtual from "./images/virtualEnvironment.png"
import blockchain from "./images/blockchain.jpg"
import greenEnergy from "./images/addGreenEnergy.png"
import battery from "./images/addBattery.png"
import grid from "./images/addGrid.png"
import load from "./images/addLoad.png"
import microGRID from "./images/addMicrogrid.png"
import consumerHistory from "./images/consumerHistory.png"
import buyPlans from "./images/buyPlans.png"
import prosumerHome from "./images/prosumerHome.png"
import prosumerPlans from "./images/prosumerPlans.png"

const BeautifulButton = (text, to) => {
  const [isHovered, setHovered] = useState(false);

  const buttonStyle = {
    position: "relative",
    display: "inline-block",
    width: "auto",
    marginTop: '20px',
    height: "4rem",
    background: isHovered
      ? "linear-gradient(to bottom, #003939, #005353)"
      : "linear-gradient(to bottom, #003939, #02ffff)",
    border: "none",
    borderRadius: "30px",
    padding: "14px 28px",
    cursor: "pointer",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
    animation: "button-shimmer 2s infinite",
    transition: "all 0.3s ease-in-out",
    transform: isHovered ? "translateY(-2px)" : "translateY(0)",
  };
  let style= {
    color: "white",
    fontFamily: '"Segoe UI", sans-serif',
    letterSpacing: "0.1ch",
    fontWeight: "600",
    fontSize: "1.6rem",
    textDecoration:'none'
  }
  const handleHover = () => {
    setHovered(true);
  };
  const handleLeave = () => {
    setHovered(false);
  };
  return (
    <button
      type="submit"
      style={buttonStyle}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <Link to={to} style={{...style}}>{text}</Link>
    </button>
  );
};


let div = {
  background: `url(${myImage})`,
  backgroundSize: "cover",
};

let flexcolumn = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

let flexrow = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
};

let box = {
  height: "92vh",
  marginTop: "9vh",
  paddingTop: "10vh",
};

let nav = {
  backgroundColor: "rgba(96,255,255, 0.7)",
  width: "45vw",
  borderRadius: "30px",
  height: "58px",
};

let navb = {
  border: "none",
  backgroundColor: "transparent",
  color: "black",
};

let subtitle = {
  textAlign: "center",
  color: "white",
  fontSize: "1.5rem",
  fontFamily: "Montserrat",
};

let image={
  height:'400px',
  objectFit: 'cover'
}

let imageDiv = {
  width: "600px",
  height: "400px",
  backgroundColor: "black",
  borderRadius: "30px",
  overflow:'hidden',
  border: "4px solid #02ffff",
}

let rightDiv={
  width: "600px",
  height: "400px",
  gap: '15px'
}

let rightP = {
  color:"white",
  fontSize: '25px',
  marker: {color:'#02ffff'},
  borderRadius: "30px",
}

let AboutBox={
  height:'400px',
  width:'400px',
  border: "4px solid #02ffff",
  backgroundColor: "black",
  overflow:'hidden',
  borderRadius: "30px",
  padding:'20px'
}

const ScrollSpyExample = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Adjust these values according to your layout
      const section1Offset = document.getElementById('section1').offsetTop;
      const section2Offset = document.getElementById('section2').offsetTop;

      if (scrollPosition >= section1Offset && scrollPosition < section2Offset) {
        setActiveSection('section1');
      } else if (scrollPosition >= section2Offset) {
        setActiveSection('section2');
      } else {
        setActiveSection(null);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const containerStyle = {
    height: '300px',
    width:'600px',
    overflowY: 'auto',
    scrollbarColor: 'rgba(255, 255, 255, 0.5) rgba(0, 0, 0, 0.3)', // For Firefox
    WebkitOverflowScrolling: 'touch',
    scrollbarWidth: 'thin',
    MsOverflowStyle: 'none', // Hide scrollbar for IE and Ed
    '&::-webkit-scrollbar': {
      width: '5px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#02ffff',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: '#000a0b',
    },
  };

  const sectionStyle = {
    height: '300px',
    padding:'3%',
    backgroundColor:'#001a1c',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    color: "#02ffff"
    // color: activeSection === 'section1' ? 'white' : 'black',
  };

  const activeSectionStyle = {
    ...sectionStyle,
    backgroundColor:'#001a1c'
  };

  return (
    <div style={containerStyle}>
      <div id="section1" style={activeSection === 'section1' ? activeSectionStyle : sectionStyle}>
        <h2 style={{textAlign:'center',margin:'25px 0 30px 0', fontSize:'35px'}}>Smart Controller</h2>
        <ul style={{color:'white',fontSize:'20px'}}>
          <li>Add MicroGrids</li>
          <li>Add Batteries</li>
          <li>Add Prosumers</li>
          <li>Check the performance of MicroGrids</li>
        </ul>
      </div>
      <div id="section2" style={activeSection === 'section2' ? activeSectionStyle : sectionStyle}>
        <h2 style={{textAlign:'center',margin:'0 0 30px 0', fontSize:'35px'}}>User-Friendly Interface</h2>
        <ul style={{color:'white',fontSize:'20px'}}>
            <li>Easy to Navigate</li>
            <li>Multiple Controlling Options</li>
            <li>Decent Color Palette</li>
            <li>Easily Understandable</li>
          </ul>
      </div>
      <div id="section3" style={activeSection === 'section3' ? activeSectionStyle : sectionStyle}>
      <h2 style={{textAlign:'center',margin:'0 0 30px 0', fontSize:'35px'}}>Secured and Reliable</h2>
        <ul style={{color:'white',fontSize:'20px'}}>
            <li>Cyber-Security enabled Microgrid</li>
            <li>Advanced Encryption Standard</li>
            <li>Transactions through Smart Contracts</li>
            <li>Continuous Monitoring</li>
          </ul>
      </div>
      {/* Add more sections as needed */}
    </div>
  );
};

export default function Base() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };
  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };
  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };
  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };
  const handleMouseEnter3 = () => {
    setIsHovered3(true);
  };
  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };

  return (
    <div style={{ width: "99vw", backgroundColor:"#000a0b" }}>
      <header
        classNameName="fixed-navbar"
        style={{
          position: "fixed",
          zIndex:'1',
          ...flexrow,
          width: "99vw",
          height: "8.5vh",
          marginTop: "10px",
        }}
      >
        <nav style={{ ...nav, ...flexrow, gap: "2.5rem" }}>
          <button
            style={{ ...navb }}
            onClick={() => scrollToSection("section1")}
          >
            Introduction
          </button>
          <button
            style={{ ...navb }}
            onClick={() => scrollToSection("section2")}
          >
            Consumer
          </button>
          <button
            style={{ ...navb }}
            onClick={() => scrollToSection("section3")}
          >
            Prosumer
          </button>
          <button
            style={{ ...navb }}
            onClick={() => scrollToSection("section4")}
          >
            Producer
          </button>
          <button
            style={{ ...navb }}
            onClick={() => scrollToSection("section5")}
          >
            About Us
          </button>
        </nav>
      </header>
      <div
        style={{ height: "100vh", width: "99vw", ...div, paddingTop: "20vh" }}
      >
        <h1
          style={{
            // textAlign: "center",
            padding: "15vh 0 10vh 30vw",
            fontSize: "8rem",
            fontWeight: "bold",
            fontFamily: "'Mukta', san-serif",
            margin: "0",
            color: "white",
            display: "block",
            float: "left",
            position:'relative'
          }}
        >
          MicroWEB
        </h1>
          <p style={{ ...subtitle, color: "#02ffff",position:'absolute', top:'53vh',left:'42vw' }}>Be Smart - Live Smart</p>
      </div>
      <section id="section1">
        <div style={{ ...box }}>
          <h1
            style={{
              fontSize: "60px",
              color: "#02ffff",
              fontWeight: "bold",
              textAlign: "center",}}
          >
            Leading the Way in Microgrid Testing
          </h1>
          <div style={{...flexrow, gap:'3rem',paddingTop:'0',marginTop:'0',height:'80vh'}}>
            <div style={{...AboutBox, display:'flex', flexDirection:'column', alignItems:'center', gap:'2.5rem'}}>
              <div>
              <h1 style ={{color:'white',textAlign:'center',marginTop: "40px"}}>Consumer</h1>
              <h3 style ={{color:'#02ffff',marginTop:'50px',padding:'0 0 0 20px'}}>"Buy electricity online from our website Instantly"</h3>
              <hr style={{width:'200px', border:'3px solid #02ffff', color:'#02ffff',margin:'10px 0 0 20px'}} />
              </div>
            </div>

            <div style={{...AboutBox, display:'flex', flexDirection:'column', alignItems:'center', gap:'2.5rem'}}>
              <div>
                <h1 style ={{color:'white',textAlign:'center',marginTop: "40px"}}>Prosumer</h1>
                <h3 style ={{color:'#02ffff',marginTop:'50px',padding:'0 0 0 20px'}}>"Get Benefitted by selling Renewable energy from Home"</h3>
                <hr style={{width:'200px', border:'3px solid #02ffff', color:'#02ffff',margin:'10px 0 0 20px'}} />
              </div>
              
            </div>

            <div style={{...AboutBox, display:'flex', flexDirection:'column', alignItems:'center', gap:'2.5rem'}}>
              <div>
              <h1 style ={{color:'white',textAlign:'center',marginTop: "40px"}}>Producer</h1>
              <h3 style ={{color:'#02ffff',marginTop:'40px',padding:'0 0 0 20px'}}>"Smart Controller with Virtual ENV to manage Microgrid Technology"</h3>
              <hr style={{width:'200px', border:'3px solid #02ffff', color:'#02ffff',margin:'20px 0 0 20px'}} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section2">
        <div style={{ ...box}}>
          <h1
            style={{
              fontSize: "60px",
              color: "#02ffff",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "30px",}}
          >
            Smart homes for smart people
          </h1>
          <div style={{ ...flexrow, alignItems: 'center', gap: "12vw", height: '70vh', marginLeft:'5vw'}}>
            <div
              style={{...imageDiv, transition: 'transform 0.3s ease', transformOrigin: 'center center', transform: isHovered1? 'scale(1.1)' : 'scale(1)'}} 
                onMouseEnter={handleMouseEnter1} 
                onMouseLeave={handleMouseLeave1}
              >
              <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={consumerHomes}
                      className="d-block w-100"
                      alt="Consumer Home"
                      style = {{...image}}
                    />
                  </div>
                  <div className="carousel-item">
                    <img style= {{...image}} src={buyPlans} className="d-block w-100" alt="buy plans" />
                  </div>
                  <div className="carousel-item">
                    <img style= {{...image}} src={consumerHistory} className="d-block w-100" alt="Transaction History" />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <div
              style={{...rightDiv, ...flexcolumn,alignItems:'center'}}
            >
              <ul style={{listStyleColor: '#02ffff'}}>
                <li style={{...rightP}}>Purchase and use energy according to the microgrid plans</li>
                <li style={{...rightP}}>Secured and Reliable transactions</li>
                <li style={{...rightP}}>Easy access of your Transaction History</li>
              </ul>              
              {/* <Link to="/consumer">Consumer</Link> */}
              {BeautifulButton("Register Now", "/consumer")}
            </div>
          </div>
        </div>
      </section>
      <section id="section3">
        <div style={{ ...box }}>
          <h1
             style={{
              fontSize: "60px",
              color: "#02ffff",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "30px",}}
          >
            Get more from less - with our smartGrids
          </h1>
          <div style={{ ...flexrow, alignItems: 'center', gap: "8vw", height: '70vh', marginRight:'5vw'}}>
            <div style={{...rightDiv, ...flexcolumn,alignItems:'center'}} >
              <ul style={{listStyleColor: '#02ffff'}}>
                <li style={{...rightP}}>Create your own microgrid plans</li>
                <li style={{...rightP}}>Get benefitted from easy Transactions</li>
                <li style={{...rightP}}>Get to know your progress</li>
              </ul>  
              {/* <Link to="/prosumer">Prosumer</Link> */}
              {BeautifulButton("Get Started", "/prosumer/login")}
            </div>

            <div
              style={{...imageDiv, transition: 'transform 0.3s ease', transformOrigin: 'center center', transform: isHovered2 ? 'scale(1.1)' : 'scale(1)'}} 
                onMouseEnter={handleMouseEnter2} 
                onMouseLeave={handleMouseLeave2}
              >
              <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img style= {{...image}} src={prosumerHome} className="d-block w-100" alt="Prosumer Home" />
                  </div>
                  <div className="carousel-item">
                    <img style= {{...image}} src={prosumerPlans} className="d-block w-100" alt="Prosumer Plans" />
                  </div>
                  <div className="carousel-item">
                    <img style= {{...image}} src={consumerHistory} className="d-block w-100" alt="Prosumer History" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section4">
        <div style={{ ...box }}>
        <h1
            style={{
              fontSize: "60px",
              color: "#02ffff",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "30px",}}
          >
            Smart Controller
          </h1>
          <div style={{ ...flexrow, alignItems: 'center', gap: "9vw", height: '70vh', marginLeft:'5vw'}}>
            <div
              style={{...imageDiv, transition: 'transform 0.3s ease', transformOrigin: 'center center', transform: isHovered3? 'scale(1.1)' : 'scale(1)'}} 
                onMouseEnter={handleMouseEnter3} 
                onMouseLeave={handleMouseLeave3}
              >
              <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img style= {{...image}} src={microGRID} class="d-block w-100" alt="add Microgrid" />
                    <div class="carousel-caption d-none d-md-block">
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img style= {{...image}} src={battery} class="d-block w-100" alt="add battery" />
                    <div class="carousel-caption d-none d-md-block">
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img style= {{...image}} src={greenEnergy} class="d-block w-100" alt="Add GreenEnergy" />
                    <div class="carousel-caption d-none d-md-block">
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img style= {{...image}} src={grid} class="d-block w-100" alt="Add Grid" />
                    <div class="carousel-caption d-none d-md-block">
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img style= {{...image}} src={load} class="d-block w-100" alt="add load" />
                    <div class="carousel-caption d-none d-md-block">
                    </div>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>


            <div
                style={{...rightDiv, ...flexcolumn,alignItems:'center'}}
              >
                {ScrollSpyExample()}
                {/* <ul style={{listStyleColor: '#02ffff'}}>
                  <li style={{...rightP}}>Purchase and use energy according to the microgrid plans</li>
                  <li style={{...rightP}}>Secured and Reliable transactions</li>
                  <li style={{...rightP}}>Easy access of your Transaction History</li>
                </ul>               */}
              {/* <Link to="/producer">Producer</Link> */}
              {BeautifulButton("Get Started", "/producer/login")}
            </div>
          </div>
        </div>
      </section>
      <section id="section5">
        <div style={{ ...box, ...flexrow, gap:'3rem'}}>
          <div style={{...AboutBox,...flexcolumn, alignItems:'center', gap:'1rem'}}>
            <div>
              <h2 style ={{color:'#02ffff',textAlign:'center', fontSize:'25px'}}>Virtual Environment</h2>
              <h2 style ={{color:'#02ffff',textAlign:'center',fontSize:'25px'}}>for MicroGrid Simulation</h2>
            </div>
            <img src={virtual} style={{width:'350px', height:'300px', objectFit:'cover'}}/>
          </div>

          <div style={{...AboutBox, display:'flex', flexDirection:'column', alignItems:'center', gap:'2.5rem'}}>
            <h2 style ={{color:'#02ffff',textAlign:'center',marginTop: "40px"}}>Presented By</h2>
            <ul style={{listStyleType:'none',marginRight:'10px',color:'white',fontSize:'20px',fontFamily:'Montserrat'}}>
              <li>Leena Sanjana</li>
              <li>Rakshitha Reddy</li>
              <li>Sreehari Smitha</li>
              <li>Srija Midipelli</li>
              <li>Sai Sharan</li>
              <li>Netaji Reddy</li>
            </ul>
          </div>

          <div style={{...AboutBox, ...flexcolumn, alignItems:'center', gap:'1rem'}}>
            <div>
                <h2 style ={{color:'#02ffff',textAlign:'center', fontSize:'25px'}}>Data Security using</h2>
                <h2 style ={{color:'#02ffff',textAlign:'center', fontSize:'25px'}}>Blockchain</h2>
              </div>
              <img src={blockchain} style={{width:'350px', height:'300px', objectFit:'cover'}}/>
            </div>
        </div>
      </section>
         
    </div>
  );
}