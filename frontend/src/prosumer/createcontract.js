import React from "react";
import { decryptAES } from "../hooks/encryption";
 function ProducerCreateContract() {
  async function add() {
    const gstNumber = decryptAES(localStorage.getItem("gstNumber"));
    // const amount = document.getElementById("amount").value;
    const units = document.getElementById("units").value;
    const timespan = document.getElementById("timespan").value;
    console.log(units,timespan)

    const dataAbtgst = await fetch('/api/getGst',{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "gst_number":gstNumber
      })


    })
    const dataAbtGstResponse = await dataAbtgst.json()
    console.log(dataAbtGstResponse)
      const response = await fetch("/api/addPlan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          gst_number: gstNumber,
          microGridId: Number(decryptAES(localStorage.getItem("microGridId"))),
          units: Number(units),
          timespan: Number(timespan),
          mobile_number: Number(dataAbtGstResponse.phone_number),
          company_name: dataAbtGstResponse.company_name,
        }),
      });
      alert("SuccessFully Created an plan")
            console.log(await response.json())

  }
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
  return (
    <>
      <div className="welcomeContainer shadow" style={style}>
        <h1> Create Plan! </h1>
        <br />
        {/* <input
          type="text"
          id="getNumber"
          placeholder="Enter Your gst_number"
          style={inputbox}
        /> */}
        <br />
        {/* <input
          type="text"
          id="amount"
          placeholder="Enter Amount"
          style={inputbox}
        /> 
        <br />*/}
        <input
          type="text" inputMode="numeric" pattern="[0-9]*" title="Please enter only numeric values" 
          id="units"
          placeholder="Enter units"
          style={inputbox}
        />
        <br />
        <input
          type="number"
          id="timespan"
          placeholder="Enter timespan(Enter a number)"
          style={inputbox}
        />
        <br />
        <button className="btn" style={myButton} onClick={add}>
          Add
        </button>
      </div>
    </>
  );
}

export default ProducerCreateContract;