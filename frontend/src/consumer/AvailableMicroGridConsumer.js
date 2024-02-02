import React, { useEffect, useState } from "react";
import ConnectToMetaMask from "../hooks/MetaMaskConnection";
import { Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { decryptAES, encryptAES } from "../hooks/encryption";
import ConsumerNavbar from "./navbar";
const flatted = require('flatted');

  let flexrow = {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center'
  }
  let card={
    backgroundColor: 'rgb(0, 28, 32)',
    //boxShadow: '0 0 20px #001c20',
    // borderWidth: '4px',
    // 
    border:'4px solid #02ffff',
    borderImage: 'linear-gradient(45deg, #005d63, #02ffff, #005d63, #005d63) 1',
  }
  let div={
    display: 'flex-row !important',
    justifyContent: 'center',
    alignItems: 'center',
    width:'100vw',
    padding:'130px 0 30px 0'
  }
  let cardBody={
    backgroundColor:'#001c20', 
    color: 'white',
    borderRadius: '20px'
  }

function AvailableMicrogrid(props) {
  const navigate = useNavigate()
  const [microGridData, setMicroGridData] = useState(null);

  const addConsumerToMicroGrid = async(id) => {
    console.log("add consumer to Microgrid",id,props.metaMaskAddress)
    const data1 = await props.sendContract.addConsumerToMicroGrid(Number(id),props.metaMaskAddress);
    try {
      const response = await fetch(
        "/api/UpdateConsumer",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "microid":decryptAES(localStorage.getItem("micrometerid")),
            "microGridId":Number(id)
          })
        }
      );
      const data = await response.json();
      console.log(microGridData)
      setMicroGridData(data);
    } catch (err) {
      console.log("Something went wrong error: ", err);
    }
    
    navigate("/consumer/login")
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
        console.log(microGridData)
        // setMicroGridData(data);
      } catch (err) {
        console.log("Something went wrong error: ", err);
      }
    }

    setMicroGridData({
      0: {
        battery: {
          0: {
            charge: 100,
            efficiency: 0.7,
            max_Charge: 100,
            charge_per_unit: 10,
          },
          1: {
            charge: 100,
            efficiency: 0.7,
            max_Charge: 100,
            charge_per_unit: 10,
          },
        },
        green_energy: {
          0: {
            charge_produced: 100,
            charge_per_unit: 10,
            max_Charge: 1000,
          },
          1: {
            charge_produced: 100,
            charge_per_unit: 10,
            max_Charge: 1000,
          },
        },
        grid: {
          0: {
            charge: 1000,
            max_export: 1000,
            max_import: 500,
          },
          1: {
            charge: 700,
            max_export: 900,
            max_import: 500,
          },
        },
        load: {
          0: { energyRequired: 0 },
        },
      },
      1: {
        battery: {
          0: {
            charge: 100,
            efficiency: 0.7,
            max_Charge: 100,
            charge_per_unit: 10,
          },
          1: {
            charge: 100,
            efficiency: 0.7,
            max_Charge: 100,
            charge_per_unit: 10,
          },
        },
        green_energy: {
          0: {
            charge_produced: 100,
            charge_per_unit: 10,
            max_Charge: 1000,
          },
          1: {
            charge_produced: 100,
            charge_per_unit: 10,
            max_Charge: 1000,
          },
        },
        grid: {
          0: {
            charge: 1000,
            max_export: 1000,
            max_import: 500,
          },
          1: {
            charge: 700,
            max_export: 900,
            max_import: 500,
          },
        },
        load: {
          0: { energyRequired: 0 },
        },
      },
      2: {
        battery: {
          0: {
            charge: 100,
            efficiency: 0.7,
            max_Charge: 100,
            charge_per_unit: 10,
          },
          1: {
            charge: 100,
            efficiency: 0.7,
            max_Charge: 100,
            charge_per_unit: 10,
          },
        },
        green_energy: {
          0: {
            charge_produced: 100,
            charge_per_unit: 10,
            max_Charge: 1000,
          },
          1: {
            charge_produced: 100,
            charge_per_unit: 10,
            max_Charge: 1000,
          },
        },
        grid: {
          0: {
            charge: 1000,
            max_export: 1000,
            max_import: 500,
          },
          1: {
            charge: 700,
            max_export: 900,
            max_import: 500,
          },
        },
        load: {
          0: { energyRequired: 0 },
        },
      },
      3:{
        battery: {
          0: {
            charge: 100,
            efficiency: 0.7,
            max_Charge: 100,
            charge_per_unit: 10,
          },
          1: {
            charge: 100,
            efficiency: 0.7,
            max_Charge: 100,
            charge_per_unit: 10,
          },
        },
        green_energy: {
          0: {
            charge_produced: 100,
            charge_per_unit: 10,
            max_Charge: 1000,
          },
          1: {
            charge_produced: 100,
            charge_per_unit: 10,
            max_Charge: 1000,
          },
        },
        grid: {
          0: {
            charge: 1000,
            max_export: 1000,
            max_import: 500,
          },
          1: {
            charge: 700,
            max_export: 900,
            max_import: 500,
          },
        },
        load: {
          0: { energyRequired: 0 },
        },
      },
      4:{
        battery: {
          0: {
            charge: 100,
            efficiency: 0.7,
            max_Charge: 100,
            charge_per_unit: 10,
          },
          1: {
            charge: 100,
            efficiency: 0.7,
            max_Charge: 100,
            charge_per_unit: 10,
          },
        },
        green_energy: {
          0: {
            charge_produced: 100,
            charge_per_unit: 10,
            max_Charge: 1000,
          },
          1: {
            charge_produced: 100,
            charge_per_unit: 10,
            max_Charge: 1000,
          },
        },
        grid: {
          0: {
            charge: 1000,
            max_export: 1000,
            max_import: 500,
          },
          1: {
            charge: 700,
            max_export: 900,
            max_import: 500,
          },
        },
        load: {
          0: { energyRequired: 0 },
        },
      },
      5:{
        battery: {
          0: {
            charge: 100,
            efficiency: 0.7,
            max_Charge: 100,
            charge_per_unit: 10,
          },
          1: {
            charge: 100,
            efficiency: 0.7,
            max_Charge: 100,
            charge_per_unit: 10,
          },
        },
        green_energy: {
          0: {
            charge_produced: 100,
            charge_per_unit: 10,
            max_Charge: 1000,
          },
          1: {
            charge_produced: 100,
            charge_per_unit: 10,
            max_Charge: 1000,
          },
        },
        grid: {
          0: {
            charge: 1000,
            max_export: 1000,
            max_import: 500,
          },
          1: {
            charge: 700,
            max_export: 900,
            max_import: 500,
          },
        },
        load: {
          0: { energyRequired: 0 },
        },
      },
      6:{
        battery: {
          0: {
            charge: 100,
            efficiency: 0.7,
            max_Charge: 100,
            charge_per_unit: 10,
          },
          1: {
            charge: 100,
            efficiency: 0.7,
            max_Charge: 100,
            charge_per_unit: 10,
          },
        },
        green_energy: {
          0: {
            charge_produced: 100,
            charge_per_unit: 10,
            max_Charge: 1000,
          },
          1: {
            charge_produced: 100,
            charge_per_unit: 10,
            max_Charge: 1000,
          },
        },
        grid: {
          0: {
            charge: 1000,
            max_export: 1000,
            max_import: 500,
          },
          1: {
            charge: 700,
            max_export: 900,
            max_import: 500,
          },
        },
        load: {
          0: { energyRequired: 0 },
        },
      },
      7:{
        battery: {
          0: {
            charge: 100,
            efficiency: 0.7,
            max_Charge: 100,
            charge_per_unit: 10,
          },
          1: {
            charge: 100,
            efficiency: 0.7,
            max_Charge: 100,
            charge_per_unit: 10,
          },
        },
        green_energy: {
          0: {
            charge_produced: 100,
            charge_per_unit: 10,
            max_Charge: 1000,
          },
          1: {
            charge_produced: 100,
            charge_per_unit: 10,
            max_Charge: 1000,
          },
        },
        grid: {
          0: {
            charge: 1000,
            max_export: 1000,
            max_import: 500,
          },
          1: {
            charge: 700,
            max_export: 900,
            max_import: 500,
          },
        },
        load: {
          0: { energyRequired: 0 },
        },
      }
    });

    fetchData(); // Call the async function inside useEffect
  }, []); // Empty dependency array to run once on mount


  return (
    <div style={{minHeight:'100vh',width:'100vw',backgroundColor: '#010c0e'}}>
      <ConsumerNavbar />
      <div style={{...div}}>
        {(microGridData===null || Object.keys(microGridData).length===0)? (
          <p>Sorry Microgrid are not Available  !</p>
        ) : (
            <div className="container-fluid" style={{width:'100vw'}} >
              <div className="row" style={{...flexrow,gap:'5rem',width:'100vw'}} >
              {/* <button onClick={connect}>Connect</button> */}
            {Object.entries(microGridData).map(([microgridKey, microgridValue]) => (
              <div key = {microgridKey}onClick={() => addConsumerToMicroGrid(microgridKey)} className="micro-grid col-3" style={{...card,width:'12rem'}}>
                <div key={microgridKey}>
                  <div  style={{ ...cardBody }}>
                    <h2 style={{marginBottom:'16px'}}>Microgrid: {microgridKey}</h2>
                    {Object.entries(microgridValue).map(([key, value]) => (
                      <p key={key}>
                        {key}: {Object.keys(value).length}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        )}
      </div>
    </div>
    
  );
}

export default AvailableMicrogrid;