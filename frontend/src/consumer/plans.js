import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import ConsumerNavbar from "./navbar.js";
import { ethers } from 'ethers';
import {decryptAES} from "../hooks/encryption.js"
export default function ConsumerPlans(props) {
  const [plans,setPlans] = useState([]);
      let cardBody={
        backgroundColor:'#001c20', 
        color: 'white',
        borderRadius: '20px'
      }
      let rowdiv={
        margin: '50px 30px 0 30px',
        display: 'flex-row !important',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem'
      }
      let flexrow={
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }
      let card={
        backgroundColor: 'rgb(0, 28, 32)',
        //boxShadow: '0 0 20px #001c20',
        borderWidth: '4px',
        borderRadius: '20px',
        borderImage: 'linear-gradient(45deg, #005d63, #02ffff, #005d63, #005d63) 1',
      }
    
      const BuyButton = ({ buttonText }) => {
        const [buttonStyles, setButtonStyles] = useState({
          border: 'none',
          width: '150px',
          height: '40px',
          borderRadius: '3em',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '12px',
          background: '#005d63',
          cursor: 'pointer',
          transition: 'all 450ms ease-in-out',
        });
        const [textStyles, setTextStyles] = useState({
          fontWeight: '600',
          color: '#02ffff',
          fontSize: 'medium',
        });
        const handleHover = () => {
          setButtonStyles((prevStyles) => ({
            ...prevStyles,
            background: 'linear-gradient(0deg, #02ffff, #005d63)',
            transform: 'translateY(-2px)',
          }));
          setTextStyles((prevStyles) => ({
            ...prevStyles,
            color: 'white',
          }));
        };
        const handleLeave = () => {
          setButtonStyles((prevStyles) => ({
            ...prevStyles,
            background: '#005d63',
            transform: 'translateY(0)',
          }));
          setTextStyles((prevStyles) => ({
            ...prevStyles,
            color: '#02ffff',
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
      
        
        const handleOnCart = () => {
          setColor("#B6D8EB");
        };
        
        const [color, setColor] = useState("#DDF2FD");
    async function sendDataToServer(name, microid, units, amount,microGridId) {
        try {
            // ... (your existing code for sending data to the server)
            const response = await fetch('/api/createTransactionBills', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "name": name, "microid": microid, "units": units, "amount": amount ,"microGridId":microGridId}),
            });
            
            const responseData = await response.json(); // Await the response text
            const simulationResponse = await fetch("/api/simulation/requireUser", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "userName": responseData._id, "energyRequired": units, "microGridId": microGridId })
            })
            console.log('Server response:', responseData);
        } catch (error) {
            console.error('Error sending data to the server:', error);
            // Handle errors, e.g., show an error message to the user
        }
    };

    async function purchaseEnergy(microGridId,value) {
        // console.log(props)
        try{
          console.log(typeof(microGridId),microGridId)
        const producers = await props.connect.showAllProducers(Number(microGridId));
        const prosumers = await props.connect.showAllProsumer(microGridId);
          console.log(producers,prosumers)
        const bigValue = ethers.BigNumber.from(value.toString());
        const multiplier = ethers.BigNumber.from("4334633723450368");
        const Both = bigValue.mul(multiplier);
        const ProducerAmount = Both.div(10);

        // console.log(amount)
        
        const data1 = await props.connect.purchaseEnergy_to_Producer(producers[0],{value:ProducerAmount}) 
        const data2 = await props.connect.purchaseEnergy_to_Prosumer(prosumers[0],{value:Both.sub(ProducerAmount)}) 

        const view = await props.connect.address_Consumer(props.metaMaskAddress)
        console.log("microid", 1)
        console.log(view[2].toNumber())
        console.log(view[3].toNumber())
        sendDataToServer(view[0], view[1], value, Both,microGridId );
        // sendDataToServer("rama","0426ELUZ7164",12,23);
        }catch(err){
            console.log(err)
        }
    }
    useEffect(() => {
        const fetchData = async (microGridId) => {
          try {
            const response = await fetch("/api/getAllPlans", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({"microGridId":microGridId})
            });
      
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
      
            const data = await response.json(); // await the promise resolution
            console.log("Data from server:", data);
            setPlans(data); // assuming 'data' is the array of plans
          } catch (error) {
            console.error("Error fetching plans:", error);
            // Handle errors, e.g., show an error message to the user
          }
        };
      
        fetchData(decryptAES(localStorage.getItem("microGridId")));
      }, []);
      
    return (
        <>
            <div style={{ backgroundColor: '#010c0e', width: '100vw' }} >
                <ConsumerNavbar/>
                <div style={{ padding: 10 }}>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search for electric plans..." style={{ borderRadius: 20, backgroundColor: "#DDF2FD" }} aria-label="Search" />
                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#ffffff", paddingTop: "1%", marginRight: "1%" }} />
                        <div onChange={handleOnCart} style={{ backgroundColor: { color }, height: "6vh", width: "3%", textAlign: "center", borderRadius: "100%", padding: "6px" }} >
                            <Link to="/carts"><FontAwesomeIcon icon={faCartShopping} style={{ color: "#ffffff", paddingTop: "1%" }} /></Link>
                        </div>
                    </form>
                </div>
                <div style={{...rowdiv, display: 'flex', flexDirection: 'row', gap: '9rem'}}>
                    <div className="container">
                        <div className="row">
                            {plans.map((plan, index) => (
                            <div className="col-4 mb-5" style={{...flexrow}}>
                                <div className="card" style={{width: '18rem', ...card, objectFit:"Fill"}}>
                                    <div key={index} style={{ width: "20vw", margin: "3%", marginRight: 0 }}>
                                        <img src="" alt="" />
                                        <div className="card-body" style={{ ...cardBody }}>
                                            <h1>{plan.units}</h1>
                                            <p className="card-text">Timespan {plan.timespan}</p>
                                            <p className="card-text">mobile number {plan.mobile_number}</p>
                                            <p className="card-text">company name {plan.company_name} </p>
                                            <div className = "d-flex flex-row gap-2">
                                               <div onClick={()=>purchaseEnergy(plan.microGridId,plan.units)} > <BuyButton  buttonText="Buy Now" /></div>
                                                <BuyButton buttonText="Add to Cart" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            ))}
                        </div>
                    </div>
                </div>  
                {/* <div style={{...rowdiv, display: 'flex', flexDirection: 'row', gap: '9rem'}}>
                    <div className="container">
                       <div className="row">
                        {plans.map((plan)=>(
                        <div className="col-4 mb-5" style={{...flexrow}}>
                            <div className="card" style={{width: '18rem', ...card, objectFit:"Fill"}}>
                                <img style={{...img}} src="https://www.eclosio.ong/wp-content/uploads/2018/08/default.png" className="card-img-top" alt="..."/>
                                <div className="card-body" style={{...cardBody}}>
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <BuyButton buttonText="Buy Now" />
                                </div>
                            </div>
                         </div>
                        ))}
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    );
}