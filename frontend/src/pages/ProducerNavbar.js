import Container from "react-bootstrap/Container";
import IsAuthenticated from "../hooks/IsAuthenticated.js";
import { Link, useNavigate } from "react-router-dom";
import ConnectToMetaMask from "../hooks/MetaMaskConnection";
import logo from "../images/logo2.jpeg"

const flatted = require("flatted");
function BasicExample(props) {
  let img = {
    height: "30px",
    width: "auto",
    margin: "1px 0px 0px 10px",
  };
  let myStyle = {
    left: "auto",
    right: "0",
  };
  let navItem = {
    margin: "5px 30px 0px 30px",
    fontFamily: "Poppins",
    display: "inline",
    color: "#ffffff",
  };
  let person = {
    height: "40px",
    width: "40px",
    borderRadius: "25px",
    margin: "1px 0px 0px 10px",
    backgroundColor: "#9BBEC8",
    textAlign: "center",
  };
  let navItemDrop = {
    margin: "5px 30px 0px 30px",
    fontFamily: "Poppins",
    display: "inline",
    color: "#ffffff",
  };

  let navLink = {
    color: "#ffffff",
    textDecoration: "none",
  };


  const navigate = useNavigate();
  const isAuthenticated = IsAuthenticated(); // Call the function to get the authentication status
  console.log("render of navbar");
  const connectMetaMask = async () => {
    const { sendDataContract, getDataContract, metaMaskAddres } =
      await ConnectToMetaMask();
    localStorage.setItem("SendContract", flatted.stringify(sendDataContract));
    localStorage.setItem("GetContract", flatted.stringify(getDataContract));
    localStorage.setItem("metaMaskAddres", metaMaskAddres);
    const data = flatted.parse(localStorage.getItem("SendContract"));
    console.log(data);
  };
  const LogOut = () => {
    // localStorage.removeItem("producerAuthToken");
    localStorage.clear();
    navigate("/Producer/Login");
  };
  return (
      <div style={{ width: "100vw", position:'fixed',zIndex:'1' }}>
        <div className="header">
          <nav
            className="navbar navbar-expand-lg navbar-light"
            style={{ backgroundColor: "#000a0b" }}
          >
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                <img
                  src={logo}
                  alt="Icon"
                  style={img}
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse d-flex flex-row justify-content-end"
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  <li className="nav-item" style={navItem}>
                    <Link
                      className="nav-link"
                      aria-current="page"
                      style={{ ...navLink }}
                      to="/ProducerHome"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item dropdown" style={navItemDrop}>
                    <a
                      className="nav-link"
                      href="/"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                      drop="left"
                      style={navLink}
                    >
                      Microgrid
                    </a>
                    <div></div>
                    <ul
                      className="dropdown-menu "
                      style={{
                        ...myStyle,
                        backgroundColor: "#006f79",
                        marginTop: "5px",
                      }}
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <li>
                        <Link
                          to="/addMicrogrid"
                          style={{ backgroundColor: "#006f79", color: "white" }}
                          className="dropdown-item"
                        >
                          Add Microgrid
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/addBattery"
                          style={{ backgroundColor: "#006f79", color: "white" }}
                          className="dropdown-item"
                        >
                          Add Battery
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/addGreenEnergy"
                          style={{ backgroundColor: "#006f79", color: "white" }}
                          className="dropdown-item"
                          href="/"
                        >
                          Add GreenEnergy
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/addLoad"
                          style={{ backgroundColor: "#006f79", color: "white" }}
                          className="dropdown-item"
                          href="/"
                        >
                          Add Load
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/addGrid"
                          style={{ backgroundColor: "#006f79", color: "white" }}
                          className="dropdown-item"
                          href="/"
                        >
                          Add Grid
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown" style={navItemDrop}>
                    <a
                      className="nav-link"
                      href="/"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                      drop="left"
                      style={navLink}
                    >
                      Registeration
                    </a>
                    <div></div>
                    <ul
                      className="dropdown-menu "
                      style={{
                        ...myStyle,
                        backgroundColor: "#006f79",
                        marginTop: "5px",
                      }}
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <li>
                        <Link
                          to="/producer/anotherProducersignup"
                          style={{ backgroundColor: "#006f79", color: "white" }}
                          className="dropdown-item"
                        >
                          Add Producer
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/prosumer/AnotherProsumerSignup"
                          style={{ backgroundColor: "#006f79", color: "white" }}
                          className="dropdown-item"
                        >
                          Add Prosumer
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item" style={navItem}>
                    {IsAuthenticated ? (
                      <div
                        className="nav-link"
                        style={navLink}
                        onClick={LogOut}
                      >
                        Log Out
                      </div>
                    ) : (
                      <Link
                        className="nav-link"
                        style={navLink}
                        onClick={connectMetaMask}
                      >
                        Log in
                      </Link>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    // <Navbar expand="lg" className="bg-body-tertiary">
    //   <Container>
    //     <Navbar.Brand>
    //       <Link to="/ProducerHome" style={textDeco}>
    //         Home
    //       </Link>
    //     </Navbar.Brand>

    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link>
    //           <Link to="/" style={textDeco}>
    //             Link
    //           </Link>
    //         </Nav.Link>

    //         <NavDropdown title="Microgrid" id="basic-nav-dropdown">
    //           <NavDropdown.Item>
    //             <Link to="/addMicrogrid" style={textDeco}>
    //               AddMicrogrid
    //             </Link>
    //           </NavDropdown.Item>

    //           <NavDropdown.Item>
    //             <Link to="/addBattery" style={textDeco}>
    //               Add Battery
    //             </Link>
    //           </NavDropdown.Item>

    //           <NavDropdown.Item>

    //             <Link to="/addGreenEnergy" style={textDeco}>
    //               Add GreenEnergy
    //             </Link>
    //        </NavDropdown.Item>

    //           {/* <NavDropdown.Divider /> */}

    //           <NavDropdown.Item>
    //             <Link to="/addLoad" style={textDeco}>
    //               Add Load
    //             </Link>
    //           </NavDropdown.Item>

    //           <NavDropdown.Item>

    //             <Link to="/addGrid" style={textDeco}>
    //               Add Grid
    //             </Link>
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //       </Nav>
    //       <Nav.Link onClick={connectMetaMask}>connect</Nav.Link>
    //       {IsAuthenticated ? (
    //         <Nav.Link onClick={LogOut}>Log out</Nav.Link>
    //       ) : (
    //         <Nav.Link>Log in</Nav.Link>
    //       )}
    //       {/* <Nav.Link o>Login</Nav.Link> */}
    //       {/* <Nav.Link>Link</Nav.Link> */}
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
}

export default BasicExample;
