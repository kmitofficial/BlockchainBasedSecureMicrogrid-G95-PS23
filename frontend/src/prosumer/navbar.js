import { Link } from "react-router-dom";
import React from "react";
import logo from "../images/logo2.jpeg"
//import "./styles.css";

export default function ProsumerNavbar() {
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
    <>
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
                      to="/prosumer/home"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item" style={{ ...navItem }}>
                    <Link
                      className="nav-link"
                      style={navLink}
                      to="/prosumer/mycontracts"
                    >
                      MyContracts
                    </Link>
                  </li>
                  <li className="nav-item" style={{ ...navItem }}>
                    <Link
                      className="nav-link"
                      style={navLink}
                      to="/prosumer/allplans"
                    >
                     All Plans
                    </Link>
                  </li>
                  <li className="nav-item" style={navItem}>
                    <Link
                      className="nav-link"
                      style={navLink}
                      to="/prosumer/history"
                    >
                      History
                    </Link>
                  </li>
                  <li className="nav-item" style={navItem}>
                    <Link
                      className="nav-link"
                      style={navLink}
                      to="/prosumer/help"
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
                        <a style={{backgroundColor:'#006f79', color:'white'}} className="dropdown-item" href="/prosumer/profile">Personal Details</a>
                      </li>
                      <li>
                        <a style={{backgroundColor:'#006f79', color:'white'}} className="dropdown-item" onClick={()=>{localStorage.clear();}} href="/">
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
    </>
  );
}