import React, { useState } from "react";
import connectToMetaMask from "../hooks/MetaMaskConnection";
import { useNavigate, useParams } from "react-router-dom";
// import AddLoad from "./components/AddLoad";
import myImage from "../images/3.jpg";
import { Link } from "react-router-dom";

const RegisterButton = (text, Click) => {
  const [buttonStyles, setButtonStyles] = useState({
    border: "none",
    width: "60%",
    height: "55px",
    borderRadius: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "12px",
    background: "#005d63",
    cursor: "pointer",
    transition: "background 0.3s ease-in-out",
  });
  const [textStyles, setTextStyles] = useState({
    fontWeight: "400",
    color: "white",
    fontSize: "x-large",
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
      color: "white", // Set the original color here
    }));
  };
  if (Click !== 0) {
    return (
      <button
        className="btn"
        style={buttonStyles}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        onClick={Click}
      >
        <span className="text" style={textStyles}>
          {text}
        </span>
      </button>
    );
  } else {
    return (
      <button
        className="btn"
        style={buttonStyles}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <span className="text" style={textStyles}>
          {text}
        </span>
      </button>
    );
  }
};
export { RegisterButton };

let flexrow = {
  display: "flex",
  flexDirection: "row",
  alignContent: "center",
  justifyContent: "center",
};

let flexcolumn = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
};

let div = {
  height: "100vh",
  width: "100vw",
  background: `url(${myImage})`,
  backgroundSize: "cover",
};

let box = {
  backgroundColor: "#001719",
  opacity: "0.9",
  // #001b1e

  borderRadius: "25px",
  padding: "20px",
};

let input = {
  width: "30vw",
  height: "55px",
  borderColor: "#02ffff",
  borderWidth: "2px",
  backgroundColor: "rgb(0, 28, 32)",
  padding: "0 50px 0 50px",
  borderRadius: "5px",
  fontSize: "20px",
  color: "#02ffff",
};

let h1 = {
  fontFamily: "Poppins",
  textAlign: "center",
  fontSize: "4rem",
  color: "white",
};

function AddAnotherProsumer(props) {
  const [send, setSend] = useState("");
  const [get, setGet] = useState("");
  const [meta, setmeta] = useState("");
  // const [send, setSend] = useState("");
  const {ProsumerName} = useParams();

  const navigate = useNavigate();
  async function connect() {
    const { sendDataContract, metaMaskAddress, getDataContract } =
      await connectToMetaMask();
    setSend(sendDataContract);
    setGet(getDataContract);
    setmeta(metaMaskAddress);
  }

  async function addAnotherProsumerToMicrogrid() {
    let MicroGridID = document.getElementById("MicroGridID").value;
    let anotherProsumerAddress = document.getElementById(
      "anotherProsumerAddress"
    ).value;
    const data = await send.addProsumerToMicroGrid(
      Number(MicroGridID),
      anotherProsumerAddress
    );
    const response = await fetch("/api/updateProsumer", {
      method: "POST",
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify({ update: { "microGridId": MicroGridID }, filter: { "gst_number": ProsumerName } })
    })
    navigate("/producerHome");
  }

  return (
    <>
      <div style={{ ...flexrow, ...div }}>
        <div style={{ ...flexcolumn, gap: "2rem" }}>
          <h1 style={h1}>Add Prosumer To MicroGrid</h1>
          <div style={{ ...box, ...flexcolumn, gap: "2rem" }}>
            <div style={{ ...flexcolumn, gap: "1rem" }}>
              <div style={{ ...flexrow }}>
                <input
                  style={input}
                  type="text"
                  id="MicroGridID"
                  placeholder="Enter the MicroGrid ID"
                  className="form-control m-3"
                  name="gst_number"
                />
              </div>
              <div style={{ ...flexrow }}>
                <input
                  style={input}
                  type="text"
                  id="anotherProsumerAddress"
                  placeholder="Prosumer Address"
                  className="form-control m-3"
                />
              </div>
              <Link
                style={{ ...flexrow, textDecoration: "none", margin: "3px" }}
              >
                {RegisterButton("Connect MetaMask", connect)}
              </Link>

              <Link
                style={{ ...flexrow, textDecoration: "none", margin: "3px" }}
              >
                {RegisterButton("Submit", addAnotherProsumerToMicrogrid)}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddAnotherProsumer; // Export the correct component
