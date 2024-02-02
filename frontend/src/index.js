import React from 'react';
import ReactDOM from 'react-dom/client';
// import {Authentication,Login} from './authentication.js'
// import Credits from './registration.js';
// import Otp from './otp.js'
// import Microid from './microid.js'
// import Home from './consumer/home.js'
// import Plans from './consumer/plans.js'
// import History from './consumer/history.js'
// import Navbar from './consumer/navbar.js';
import App from "./App.js";

// import { createBrowserRouter,RouterProvider} from 'react-router-dom';
// const myrouter=createBrowserRouter([

//   {path:"/",element:<Authentication/>},
//   {path:"/Navbar",element:<Navbar/>},
//   {path:"/registration",element:<Credits/>},
//   {path:"/registration/otp",element:<Otp/>},
//   {path:"/registration/success",element:<Microid/>},
//   {path:"/login",element:<Login/>},
//   {path:"/consumer/home",element:<Home/>},
//   {path:"/consumer/plans",element:<Plans/>},
  // {path:"/history",element:<History/>}


// ])

// const root=ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <RouterProvider router={myrouter}/>
// )

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// connectToContract();
