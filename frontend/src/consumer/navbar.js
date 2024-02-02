import { Link } from "react-router-dom";
import React from "react";
import logo from "../images/logo2.jpeg"
//import "./styles.css";

export default function ConsumerNavbar() {
  let img = {
    height: "30px",
    width: "auto",
    margin: "1px 0px 0px 10px",
  };
  let myStyle = {
    left: "auto",
    right: "0",
  };
  let navItem = {
    margin: "5px 30px 0px 30px",
    fontFamily: "Poppins",
    display: "inline",
    color: "#ffffff",
  };
  let person = {
    height: "40px",
    width: "40px",
    borderRadius: "25px",
    margin: "1px 0px 0px 10px",
    backgroundColor: "#9BBEC8",
    textAlign: "center",
  };
  let navItemDrop = {
    margin: "5px 30px 0px 30px",
    fontFamily: "Poppins",
    display: "inline",
    color: "#ffffff",
  };

  let navLink = {
    color: "#ffffff",
    textDecoration: "none",
  };

  return (
      <div style={{width:'100vw', position:'fixed',zIndex:'1'}}>
        <div className="header">
          <nav
            className="navbar navbar-expand-lg navbar-light"
            style={{ backgroundColor: "#000a0b" }}
          >
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                <img
                  src={logo}
                  alt="Icon"
                  style={img}
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse d-flex flex-row justify-content-end"
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  <li className="nav-item" style={navItem}>
                    <Link
                      className="nav-link"
                      aria-current="page"
                      style={{ ...navLink }}
                      to="/consumer/home"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item" style={{ ...navItem }}>
                    <Link
                      className="nav-link"
                      style={navLink}
                      to="/consumer/plans"
                    >
                      Buy Plans
                    </Link>
                  </li>
                  <li className="nav-item" style={navItem}>
                    <Link
                      className="nav-link"
                      style={navLink}
                      to="/consumer/history"
                    >
                      Transaction History
                    </Link>
                  </li>
                  <li className="nav-item" style={navItem}>
                    <Link
                      className="nav-link"
                      style={navLink}
                      to="/consumer/help"
                    >
                      Help
                    </Link>
                  </li>
                  <li className="nav-item dropdown" style={navItemDrop}>
                    <a
                      className="nav-link"
                      href="/"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                      drop="left"
                      style={person}
                    >
                      <i
                        className="material-icons"
                        style={{ color: "#ffffff", marginRight: "auto" }}
                      >
                        &#xe7fd;
                      </i>
                    </a>
                    <div>
                      
                    </div>
                    <ul
                      className="dropdown-menu "
                      style={{...myStyle, backgroundColor:'#006f79', marginTop: '5px'}}
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <li>
                        <a style={{backgroundColor:'#006f79', color:'white'}} className="dropdown-item" href="/consumer/profile">Personal Details</a>
                      </li>
                      <li>
                        <a style={{backgroundColor:'#006f79', color:'white'}} className="dropdown-item" onClick={()=>{localStorage.clear()}} href="/">
                          Log Out
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
  );
}


// import {Link} from "react-router-dom";
// import React from "react";


// export default function Navbar(){
//   let img={
//     height:"15%",
//     width:"15%",
//     borderRadius:"45%"
//   }
  
//    return  ( 
//     <>
//     <div>
//     <div className="header" style={{backgroundColor: "#164863"}}>
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="/consumer/home">
//       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMB8cCp__yOIsNq2QWPruTIU6aagud-FNcCA&usqp=CAU" alt="Icon" style={img}/>
//     </a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNav">
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <Link className="nav-link" aria-current="page" to="/consumer/home">Home</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/consumer/plans">Buy Plans</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/history" >Transaction History</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/consumer/help">Help</Link>
//         </li>
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown link
//           </a>
//           <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//             <li><a className="dropdown-item" href="/">Personal Details</a></li>
//             <li><a className="dropdown-item" href="/">Another action</a></li>
//             <li><a className="dropdown-item" href="/">Log Out</a></li>
//           </ul>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
// </div>
// </div>
//     </>
//   )
// }