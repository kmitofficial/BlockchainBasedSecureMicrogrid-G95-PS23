import React, { useState } from "react";
import ProsumerNavbar from "./navbar.js";
import myImage from "../images/3.jpg";

export default function ProsumerHome() {
  const [isHovered, setHovered] = useState(false);
  let img = {
    // https://img.freepik.com/free-photo/abstract-digital-grid-black-background_53876-97647.jpg?w=996&t=st=1704914203~exp=1704914803~hmac=dba82b1193632cb3c2991420cf2ad657d5dd2d3dc6454b1e163c26d62dbf42ad
    backgroundImage: `url(${myImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  let top = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  let button = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "15rem",
    overflow: "hidden",
    height: "3.5rem",
    backgroundSize: "300% 300%",
    backdropFilter: "blur(1rem)",
    borderRadius: "5rem",
    transition: "0.5s",
    border: "double 4px #001214",
    backgroundImage:
      "linear-gradient(#212121, #212121), linear-gradient(137.48deg, #ffdb3b 10%, #FE53BB 45%, #8F51EA 67%, #0044ff 87%)",
    backgroundOrigin: "border-box",
    transform: isHovered ? "scale(1.1)" : "scale(1)",
  };
  let strong = {
    zIndex: "2",
    fontFamily: "Mukta",
    fontSize: "20px",
    letterSpacing: "5px",
    color: "#FFFFFF",
    // textShadow: '0 0 4px white'
  };
  let glow = {
    position: "absolute",
    display: "flex",
    width: "12rem",
  };
  let circle = {
    width: "100%",
    height: "30px",
    filter: "blur(2rem)",
    zIndex: "-1",
  };
  return (
      <div style={{ ...img, minHeight: "100vh", width:'100vw',display:'flex', flexDirection:'column'}}>
        <ProsumerNavbar />
        <div style={{ ...top, flex:'1' }}>
          <h1
            style={{
              textAlign: "center",
              fontSize: "50px",
              fontFamily: "Mukta",
              margin: "0",
              color: "white",
              display: "block",
            }}
          >
            Get Started with MicroWEB
          </h1>
          <p
            style={{
              fontSize: "18px",
              margin: "0 0 40px 0",
              textAlign: "center",
              color: "white",
            }}
          >
            Get more from less - with our smartGrids
          </p>
          <a href="/prosumer/createcontract" style={{ textDecoration: "none" }}>
            <button
              style={{ ...button }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onMouseDown={() => setHovered(false)}
              className="btn"
              type="button"
            >
              <strong style={{ ...strong }}>Create</strong>
              <div style={{ ...glow }} id="glow">
                <div
                  style={{ ...circle, background: "#003337" }}
                  className="circle"
                ></div>
                <div
                  style={{ ...circle, background: "#02fffd" }}
                  className="circle"
                ></div>
              </div>
            </button>
          </a>
        </div>
      </div>
  );
}