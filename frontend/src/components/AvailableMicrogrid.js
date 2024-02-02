import React, { useEffect, useState } from "react";
import ConnectToMetaMask from "../hooks/MetaMaskConnection";
import { Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
const flatted = require('flatted');

function AvailableMicrogrid() {
  const navigate = useNavigate()
  const [tem, setTem] = useState("");
  const [meta, setmeta] = useState("");
  const [microGridData, setMicroGridData] = useState(null);
  async function connect() {
    const { sendDataContract, metaMaskAddress } = await ConnectToMetaMask();
    setTem(sendDataContract);
    setmeta(metaMaskAddress);
  }
  const addProducerToThisMicrogrid = async(id) => {
    // e.preventDefault();
    console.log("data",tem)
    const data1 =  await tem.addProducerToMicroGrid(id , meta);
    // console.log(e.microgridKey,typeof())
    navigate("/producer/login")

  }
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "/api/simulation/MicrogridData",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setMicroGridData(data);
      } catch (err) {
        console.log("Something went wrong error: ", err);
      }
    }

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

    fetchData(); // Call the async function inside useEffect
  }, []); // Empty dependency array to run once on mount


  return (
    <div>
      {microGridData === null ? (
        <p>No Microgrids are available. Be the first person to create a microgrid!</p>
      ) : (
        <div class="microgrid-card-details"  >
          {Object.entries(microGridData).map(([microgridKey, microgridValue]) => (
            <div onClick={() => addProducerToThisMicrogrid(microgridKey)} className="micro-grid">
              <Card key={microgridKey} style={{ width: '18rem', marginBottom: '20px' }}>
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
          ))}
          <button onClick={connect}>Connect</button>
        </div>
      )}
    </div>
  );
}

export default AvailableMicrogrid;