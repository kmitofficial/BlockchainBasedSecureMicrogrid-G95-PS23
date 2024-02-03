import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConnectToMetaMask from "./hooks/MetaMaskConnection.js";
import Base from "./base.js"
//consumer Imports
import {ConsumerAuthentication,ConsumerLogin} from "./consumer/authentication.js";
import ConsumerFaceAuthentication from "./consumer/registration.js";
import ConsumerOtp from "./consumer/otp.js";
import ConsumerMicroid from "./consumer/microid.js";
import ConsumerProfile from "./consumer/profile.js";
import ConsumerHome from "./consumer/home.js";
import ConsumerPlans from "./consumer/plans.js";
import ConsumerHistory from "./consumer/history.js";
import Form from "./consumer/Form.js";
import AddConsumer from "./components/AddConsumer.js";
import Help from "./consumer/help.js";
import IsAuthenticated from "./hooks/IsAuthenticated.js";
import AvailableMicroGridConsumer from "./consumer/AvailableMicroGridConsumer.js";

// Producer ImportsA
import ProducerHome from "./pages/ProducerHome.js";
import ProducerNavbar from "./pages/ProducerNavbar.js";
import ProducerLogIn from "./pages/ProducerLogin.js";
import ProducerSignup from "./pages/ProducerSignUp.js";
import AddMicrogrid from "./components/AddMicrogrid.js";
import AddBattery from "./components/AddBattery.js";
import AddLoad from "./components/AddLoad.js";
import AddGreenEnergy from "./components/AddGreenEnergy.js";
import AddGrid from "./components/AddGrid.js";
import AddProducer from "./components/AddProducer.js";
import JoinOrCreateMicroGrid from "./pages/JoinOrCreateMicroGrid.js";
import Test from "./components/Test.js"
import AvailableMicrogrid from "./components/AvailableMicrogrid.js";
import AddAnotherProducerToMg from "./pages/addAnotherProducerToMicrogrid.js";

//prosumer Imports
import ProsumerLogin from "./prosumer/login.js";
import ProsumerSignUp from "./prosumer/signup.js";
import ProsumerJoinMicroGrid from "./prosumer/joinmicrogrid.js"
import ProsumerHome from "./prosumer/home.js";
import ProsumerMyContracts from "./prosumer/mycontracts.js";
import ProsumerAllPlans from  "./prosumer/allplans.js";
import ProsumerHelp from "./prosumer/help.js";
import ProsumerHistory from "./prosumer/history.js";
import ProducerCreateContract from "./prosumer/createcontract.js";
import AddProsumer from "./components/AddProsumer.js";
import AddAnotherProsumerToMg from "./pages/addAnotherProsumerToMicrogrid.js";
import ProsumerProfile from "./prosumer/profile.js";

// import { VariableProvider } from './Context/metaContext.js';

export default function App() {
  const [getContract, setGetContract] = useState("");
  const [sendContract, setSendContract] = useState("");
  const [metaMaskAddress, setMetaMaskAddress] = useState("");

  //const producerAuthentic=IsAuthenticated("producerAuthToken")
  const consumerAuthentic=IsAuthenticated("consumerAuthToken")
  useEffect(() => {
    async function fetchData() {
      try {
        const { sendDataContract, getDataContract, metaMaskAddress } = await ConnectToMetaMask();
        console.log(sendDataContract, getDataContract,metaMaskAddress);

        // Set state with received data
        setGetContract(getDataContract);
        setSendContract(sendDataContract);
        setMetaMaskAddress(metaMaskAddress);
      } catch (error) {
        // Handle errors
        console.error("Error:", error);
      }
    }

    fetchData(); // Invoke the fetchData function when the component mounts
  }, []);
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Base />} />
          <Route path="/consumer" element={<ConsumerAuthentication />} />
          <Route
            path="/consumer/registration"
            element={<ConsumerFaceAuthentication />}
          />
          <Route path="/consumer/profile" element={<ConsumerProfile />}/>
          <Route path="/consumer/otp" element={<ConsumerOtp />} />
          <Route path="/consumer/microid" element={<ConsumerMicroid />} />
          <Route
            path="/consumer/form"
            element={<Form connect={sendContract} />}
          />
          <Route path="/consumer/login" element={<ConsumerLogin />} />
          <Route path="/consumer/home" element={<ConsumerHome />} />
          <Route
            path="/consumer/plans"
            element={
              <ConsumerPlans
                connect={sendContract}
                metaMaskAddress={metaMaskAddress}
              />
            }
          />
          <Route path="/consumer/history" element={<ConsumerHistory />} />
          <Route
            path="/addConsumer"
            element={<AddConsumer connect={sendContract} />}
          />
          <Route path="/consumer/help" element={<Help />} />
          <Route
            path="/consumer/AvailableMicrogrid"
            element={<AvailableMicroGridConsumer   getContract={getContract}
            sendContract={sendContract}
            metaMaskAddress={metaMaskAddress} />}
          />
          {/* Producer Routes */}
          <Route path="/producer/signup" element={<ProducerSignup />} />
          <Route path="/producer/login" element={<ProducerLogIn />} />
          <Route path="/producer/anotherProducersignup" element={<ProducerSignup anotherProducer={true}/>} />
          <Route
            path="/ProducerHome"
            element={
              <ProducerHome
                getContract={getContract}
                sendContract={sendContract}
                metaMaskAddress={metaMaskAddress}
              />
            }
          />
          <Route
            path="/addProducer"
            element={
              <AddProducer
                getContract={getContract}
                sendContract={getContract}
                metaMaskAddress={metaMaskAddress}
              />
            }
          />
          <Route
            path="/addAnotherProducer/:ProducerName"
            element={
              <AddProducer
                anotherProducer = {true}
                getContract={getContract}
                sendContract={getContract}
                metaMaskAddress={metaMaskAddress}
              />
            }
          />
          <Route
          path="/producer/AddToMicrogrid/:ProducerName" element={
            <AddAnotherProducerToMg/>
          }/>
          <Route
          path="/prosumer/AddToMicrogridPros/:ProsumerName" element={
            <AddAnotherProsumerToMg/>
          }/>
          <Route
            path="/addMicrogrid"
            element={
              <AddMicrogrid
                getContract={getContract}
                sendContract={getContract}
                metaMaskAddress={metaMaskAddress}
              />
            }
          />
          <Route
            path="/AddBattery"
            element={
              <AddBattery
                getContract={getContract}
                sendContract={getContract}
                metaMaskAddress={metaMaskAddress}
              />
            }
          />
          <Route
            path="/AddLoad"
            element={
              <AddLoad
                getContract={getContract}
                sendContract={getContract}
                metaMaskAddress={metaMaskAddress}
              />
            }
          />
          <Route
            path="/AddGreenEnergy"
            element={
              <AddGreenEnergy
              getContract={getContract}
              sendContract={getContract}
              metaMaskAddress={metaMaskAddress}
              />
            }
          />
          <Route
            path="/AddGrid"
            element={
              <AddGrid
                getContract={getContract}
                sendContract={getContract}
                metaMaskAddress={metaMaskAddress}
              />
            }
          />
          <Route
            path="/JoinOrCreateMicroGrid"
            element={
              <JoinOrCreateMicroGrid
                getContract={getContract}
                sendContract={getContract}
                metaMaskAddress={metaMaskAddress}
              />
            }
          />
          
          <Route path="/ShowMicroGrid" element={<AvailableMicrogrid />} />
          <Route
            path="/test"
            element={
              <Test
                getContract={getContract}
                sendContract={getContract}
                metaMaskAddress={metaMaskAddress}
              />
            }
          />
          {/*ProsumerRoutes*/}
          <Route path="/prosumer/login" element={<ProsumerLogin />} />
          <Route path="/prosumer/home" element={<ProsumerHome />} />
          <Route
            path="/prosumer/mycontracts"
            element={
              <ProsumerMyContracts
                connect={sendContract}
                metaMaskAddress={metaMaskAddress}
              />
            }
          />
          <Route
            path="/prosumer/allplans"
            element={
              <ProsumerAllPlans
                connect={sendContract}
                metaMaskAddress={metaMaskAddress}
              />
            }
          />
          <Route path="/prosumer/profile" element={< ProsumerProfile/>} />
          <Route path="/prosumer/help" element={<ProsumerHelp />} />
          <Route path="/prosumer/history" element={<ProsumerHistory />} />,
          <Route
            path="/prosumer/createcontract"
            element={<ProducerCreateContract />}
          />
          <Route path="/prosumer/signup" element={<ProsumerSignUp />} />
          <Route path="/prosumer/AnotherProsumerSignup" element={<ProsumerSignUp anotherProsumer={true} />} />
          <Route
            path="/prosumer/joinmicrogrid"
            element={<ProsumerJoinMicroGrid />}
          />
          <Route
            path="/addProsumer"
            element={<AddProsumer connect={sendContract} />}
          />
          <Route
            path="/addAnotherProsumer/:ProsumerName"
            element={<AddProsumer connect={sendContract} anotherProsumer = {true} />}
          />
        </Routes>
      </div>
    </Router>
  );
}
