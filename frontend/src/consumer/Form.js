import React from "react";
import { useNavigate } from "react-router-dom";
import myImage from "../images/3.jpg";
import RegisterButton from "./authentication";

function Form(props) {
  const navigate = useNavigate()
  async function Add(){
    const cName = document.getElementById("cName").value;
    const cMMID = document.getElementById("cMMID").value;

    console.log(cName);
    console.log(cMMID);
  
    const k= await props.connect.addConsumer(cName,cMMID,0)
    // const data= await props.connect.address_Consumer("0x5c4813250dd228f7b94DFaeB315aEA66C66bBEA4")
    // console.log(data);
    navigate("/consumer/AvailableMicrogrid")
    alert("SUCCESSFULLY ADDED");
  }
  
  
  let inputbox ={
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
  

  let div = {
    height: '100vh',
    width: '100vw',
    background: `url(${myImage})`,
    backgroundSize: "cover",
  }
  let h1={
    fontFamily: 'Poppins',
    textAlign: 'center',
    color: 'white',
    fontSize: '3rem'
  }
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
    alignItems: 'center'
  }

return (
<div style={{...div,...flexrow}}>
  <div style={{...flexcolumn, gap:'0.25rem'}}>
    <h1 style={{...h1}}> Consumer Form! </h1><br/>
    <input type= "text" id="cName" placeholder="Enter Your Name" style={inputbox}/><br/>
    <input type="text" id="cMMID" placeholder="Enter Your Micro Meter ID" style={inputbox}/><br/>
    {RegisterButton("Confirm", Add)}
  </div>
</div>
  );
}

export default Form;