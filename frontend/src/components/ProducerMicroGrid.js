import React, { useEffect, useState } from "react";
import ConnectToMetaMask from "../hooks/MetaMaskConnection";
import { Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import {encryptAES,decryptAES} from "../hooks/encryption.js"
const flatted = require('flatted');

function AvailableMicrogrid() {
  const navigate = useNavigate()
  const [tem, setTem] = useState("");
  const [microGridData, setMicroGridData] = useState(null);
  async function connect() {
    const { sendDataContract } = await ConnectToMetaMask();
    setTem(sendDataContract);
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
                setMicroGridData(data[Number(decryptAES(localStorage.getItem("microGridId")))]|| data);
                console.log(data)
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
    
            fetchData(); 
      }, []);
    

  return (
    <div>
      {((microGridData===null)||(0 === Object.keys(microGridData).length)  )? (
        <p>No Microgrids are available. Be the first person to create a microgrid!</p>
      ) : (
        <div class = "microgrid-card-details"  >
          {Object.entries(microGridData).map(([microgridKey, microgridValue]) => (
            <Card key={microgridKey} style={{ width: '18rem', marginBottom: '20px' }}>
              <Card.Body>
                <Card.Title>Microgrid: {microgridKey}</Card.Title>
                {Object.entries(microgridValue).map(([key, value]) => (
                  <Card.Text key={key}>
                    {/* {key}: {Object.keys(value).length} */}
                    {key}: {JSON.stringify(value)}
                  </Card.Text>
                ))}
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default AvailableMicrogrid;
