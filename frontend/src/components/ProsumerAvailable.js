import React, { useEffect, useState } from "react";
import ConnectToMetaMask from "../hooks/MetaMaskConnection";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const flatted = require("flatted");

function ProsumerAvailable() {
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
        onClick={connect}
      >
        <span className="text" style={textStyles}>
          {buttonText}
        </span>
      </button>
    );
  };

  const handleOnCart = () => {
    setColor("#B6D8EB");
  };

  const [color, setColor] = useState("#DDF2FD");

  const navigate = useNavigate();
  const [tem, setTem] = useState("");
  const [microGridData, setMicroGridData] = useState(null);
  const [meta, setmeta] = useState("");

  async function connect() {
    const { sendDataContract, metaMaskAddress } = await ConnectToMetaMask();
    setTem(sendDataContract);
    setmeta(metaMaskAddress);
  }

  const addProsumerToThisMicrogrid = async (id) => {
    // e.preventDefault();

    const data1 = await tem.addProsumerToMicroGrid(id, meta);
    // console.log(e.microgridKey,typeof())
    navigate("/prosumer/login");
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/simulation/MicrogridData", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setMicroGridData(data);
      } catch (err) {
        console.log("Something went wrong error: ", err);
      }
    }

    fetchData(); // Call the async function inside useEffect
  }, []); // Empty dependency array to run once on mount

  return (
    <div>
      {microGridData === null ? (
        <p>
          No Microgrids are available. Be the first person to create a
          microgrid!
        </p>
      ) : (
        <div class="microgrid-card-details">
          {Object.entries(microGridData).map(
            ([microgridKey, microgridValue]) => (
              <div
                onClick={() => addProsumerToThisMicrogrid(microgridKey)}
                className="micro-grid"
              >
                <Card
                  key={microgridKey}
                  style={{ width: "18rem", marginBottom: "20px" }}
                >
                  <Card.Body>
                    <Card.Title>Microgrid: {microgridKey}</Card.Title>
                    {Object.entries(microgridValue).map(([key, value]) => (
                      <Card.Text key={key}>
                        {key}: {Object.keys(value).length}
                      </Card.Text>
                    ))}
                  </Card.Body>
                </Card>
              </div>
            )
          )}
          {/* <button onClick={connect}>Connect</button> */}
          <BuyButton buttonText="Connect" style={{ margin: "10px" }} />
        </div>
      )}
    </div>
  );
}

export default ProsumerAvailable;

// setMicroGridData({
//   0: {
//     battery: {
//       0: {
//         charge: 100,
//         efficiency: 0.7,
//         max_Charge: 100,
//         charge_per_unit: 10,
//       },
//       1: {
//         charge: 100,
//         efficiency: 0.7,
//         max_Charge: 100,
//         charge_per_unit: 10,
//       },
//     },
//     green_energy: {
//       0: {
//         charge_produced: 100,
//         charge_per_unit: 10,
//         max_Charge: 1000,
//       },
//       1: {
//         charge_produced: 100,
//         charge_per_unit: 10,
//         max_Charge: 1000,
//       },
//     },
//     grid: {
//       0: {
//         charge: 1000,
//         max_export: 1000,
//         max_import: 500,
//       },
//       1: {
//         charge: 700,
//         max_export: 900,
//         max_import: 500,
//       },
//     },
//     load: {
//       0: { energyRequired: 0 },
//     },
//   },
//   1: {
//     battery: {
//       0: {
//         charge: 100,
//         efficiency: 0.7,
//         max_Charge: 100,
//         charge_per_unit: 10,
//       },
//       1: {
//         charge: 100,
//         efficiency: 0.7,
//         max_Charge: 100,
//         charge_per_unit: 10,
//       },
//     },
//     green_energy: {
//       0: {
//         charge_produced: 100,
//         charge_per_unit: 10,
//         max_Charge: 1000,
//       },
//       1: {
//         charge_produced: 100,
//         charge_per_unit: 10,
//         max_Charge: 1000,
//       },
//     },
//     grid: {
//       0: {
//         charge: 1000,
//         max_export: 1000,
//         max_import: 500,
//       },
//       1: {
//         charge: 700,
//         max_export: 900,
//         max_import: 500,
//       },
//     },
//     load: {
//       0: { energyRequired: 0 },
//     },
//   },
// });
