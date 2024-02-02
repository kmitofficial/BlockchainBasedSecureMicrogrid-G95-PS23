import React, { useEffect, useState } from "react";
import ProsumerNavbar from "./navbar.js";
import { decryptAES } from "../hooks/encryption.js";
function ProsumerAllPlans() {
  const [plans, getPlans] = useState([]);
  useEffect(() => {
    const takingPlans = async () => {
      const response = await fetch("/api/getAllPlans", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          microGridId:Number(decryptAES(localStorage.getItem("microGridId")))
        }),
      });
      const data = await response.json();
      console.log(data);
      getPlans(data);
    };
    takingPlans();
  }, []);
  let img = {
    height: "25vh",
    width: "100%",
    backgroundSize: "cover",
    padding: "15px",
    borderRadius: "40px",
  };
  let cardBody = {
    backgroundColor: "#001c20",
    color: "white",
    borderRadius: "20px",
  };
  let rowdiv = {
    margin: "50px 30px 0 30px",
    display: "flex-row !important",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
  };
  let card = {
    backgroundColor: "rgb(0, 28, 32)",
    //boxShadow: '0 0 20px #001c20',
    borderWidth: "4px",
    borderRadius: "20px",
    borderImage: "linear-gradient(45deg, #005d63, #02ffff, #005d63, #005d63) 1",
  };

  const BuyButton = ({ buttonText }) => {
    const [buttonStyles, setButtonStyles] = useState({
      border: "none",
      width: "150px",   
      height: "40px",
      borderRadius: "3em",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "12px",
      background: "#005d63",
      cursor: "pointer",
      transition: "all 450ms ease-in-out",
    });
    const [textStyles, setTextStyles] = useState({
      fontWeight: "600",
      color: "#02ffff",
      fontSize: "medium",
    });
    const handleHover = () => {
      setButtonStyles((prevStyles) => ({
        ...prevStyles,
        background: "linear-gradient(0deg, #02ffff, #005d63)",
        transform: "translateY(-2px)",
      }));
      setTextStyles((prevStyles) => ({
        ...prevStyles,
        color: "white",
      }));
    };
    const handleLeave = () => {
      setButtonStyles((prevStyles) => ({
        ...prevStyles,
        background: "#005d63",
        transform: "translateY(0)",
      }));
      setTextStyles((prevStyles) => ({
        ...prevStyles,
        color: "#02ffff",
      }));
    };
    return (
      <button
        className="btn"
        style={buttonStyles}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <span className="text" style={textStyles}>
          {buttonText}
        </span>
      </button>
    );
  };

  let favIcon = {
    color: "#ffffff",
  };

  let buyCart = {
    height: "6vh",
    width: "40px",
    borderRadius: "25%",
    backgroundColor: "#A6A6A6",
    textAlign: "center",
    padding: "2% 2% 0px 0px",
    margin: "13px 20px 0px auto",
  };
  let style = {
    backgroundColor: "#DAFFFB",
    color: "black",
    fontSize: 20,
    textAlign: "center",
    padding: "2%",
    marginTop: "3%",
    marginLeft: "30%",
    heigth: "70%",
    width: "40%",
    borderRadius: "3%",
  };
  let inputbox = {
    height: 40,
    width: "60%",
    borderRadius: 20,
    backgroundColor: "#9BBEC8",
    margin: 5,
    borderWidth: 0,
    textAlign: "center",
    fontSize: 15,
    marginBottom: 8,
  };
  let myButton = {
    backgroundColor: "#164863",
    color: "#ffffff",
    height: "20%",
    width: "30%",
    borderRadius: 20,
    padding: "2%",
  };
  let flexrow={
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  };
  return (
    <>
    <div style={{ backgroundColor: '#010c0e', width: '100vw' }} >
    <ProsumerNavbar/>
      <div className="d-flex flex-wrap" style={{...rowdiv, display: 'flex', flexDirection: 'row', gap: '9rem'}}>
        <div className="container">
          <div className="row">
        {plans.map((plan) => (
          <div className="col-4 mb-5" style={{...flexrow}}>
          <div className="card" style={{ width: "20vw", ...card }}>
            <img
              style={{ ...img }}
              src="https://www.eclosio.ong/wp-content/uploads/2018/08/default.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body" style={{ ...cardBody }}>
              <h5 className="card-title">Units {plan.units}</h5>
              <p className="card-text">Timespan {plan.timespan}</p>
              <p className="card-text">mobile number {plan.mobile_number}</p>
              <p className="card-text">company name {plan.company_name}
              </p>
            </div>
          </div>
          </div>
        ))}
      </div>
      </div>
       </div>
      </div>
      
    </>
  );
}

export default ProsumerAllPlans;