import React from "react";
import myImage from "../images/3.jpg";




export default function Help(){
    let div = {
        height: '100vh',
        width: '100vw',
        background: `url(${myImage})`,
        backgroundSize: "cover",
      }
      let flexrow={
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }
      let rowdiv = {
        margin: "50px 30px 0 30px",
        display: "flex-row !important",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
      };
      let card = {
        backgroundColor: "rgb(0, 28, 32)",
        //boxShadow: '0 0 20px #001c20',
        borderWidth: "4px",
        borderRadius: "20px",
        borderImage: "linear-gradient(45deg, #005d63, #02ffff, #005d63, #005d63) 1",
        padding: "0px"
      };
      let img = {
        height: "25vh",
        width: "100%",
        backgroundSize: "cover",
        padding: "15px",
        borderRadius: "40px",
      };
    return (
        <>
        <div style={div}>
        {/* <img src="https://as2.ftcdn.net/v2/jpg/04/13/98/99/1000_F_413989940_A4aUIRZetTJ3yRchaDT3TxTflXQOhJMi.jpg" style={{fontSize:"20px", color:'#02ffff', margin:'8px 0 8px 8px', height:"50px", width:"50px"}}/> */}
            <div className="d-flex flex-column justify-content-center align-items-center"  style={{textAlign:"center",  ...flexrow, paddingTop:"40px"}}>
                <h1 style={{fontSize:"35px",fontWeight:"500", color:'#ffffff', margin:'8px 0 8px 8px'}}> How can we help you? </h1>
                <div className="d-flex flex-row justify-content-center" style={{margin:"10px"}}>
                    <input className="form-control me-2" type="search" placeholder="Chat here!!"
                    style={{display:"inline", borderRadius: 20, backgroundColor: "#005d63", border:'none', color: '#02ffff', paddingLeft: '30px', width:"50vw", fontSize:"14px"}}
                    aria-label="Search" />
                    <i className="material-icons" style={{fontSize:"25px", color:'#02ffff', padding:'8px 0 8px 0', display:"inline"}}>search</i>
                </div>
            </div>
            <div className="d-flex flex-wrap" style={{...rowdiv, display: 'flex', flexDirection: 'row', gap: '9rem'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-4 mb-5" style={{...flexrow}}>
                            <div className="card" style={{ width: "20vw", ...card }}>
                                <img
                                style={{ ...img }}
                                src="https://www.mdpi.com/energies/energies-16-01863/article_deploy/html/images/energies-16-01863-g001.png"
                                className="card-img-top"
                                alt="..."
                                />
                                <h1 style={{fontSize:"25px", color:'#ffffff', margin:'8px 0 8px 8px'}}> Get Started</h1>
                                <p style={{fontSize:"15px", color:'#ffffff', margin:'8px 0 8px 8px'}}> Learn how to get started with MicroGrid</p>
                            </div>
                        </div>
                        <div className="col-4 mb-5" style={{...flexrow}}>
                            <div className="card" style={{ width: "20vw", ...card }}>
                                <img
                                style={{ ...img }}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEVvYAXXUn2nAIag6Q0ytVc1ZloYinxt00RJSxVae_5Wjl7Wo2Gbfs_FoeeeULO0m-AyE&usqp=CAU"
                                className="card-img-top"
                                alt="..."
                                />
                                <h1 style={{fontSize:"25px", color:'#ffffff', margin:'8px 0 8px 8px'}}> Safety and Security </h1>
                                <p style={{fontSize:"15px", color:'#ffffff', margin:'8px 0 8px 8px'}}> Learn how to stay safe using MicroGrid</p>
                            </div>
                        </div>
                        <div className="col-4 mb-5" style={{...flexrow}}>
                            <div className="card" style={{ width: "20vw", ...card }}>
                                <img
                                style={{ ...img }}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMJeGW0IvQ1_a9nrLbsjv_Ja0QlSog2Icsng&usqp=CAU"
                                className="card-img-top"
                                alt="..."
                                />
                                <h1 style={{fontSize:"25px", color:'#ffffff', margin:'8px 0 8px 8px'}}> Business Features</h1>
                                <p style={{fontSize:"15px", color:'#ffffff', margin:'8px 0 8px 8px'}}> Learn about MicroGrid's business</p>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
                            
        </div>
        </>
    )
}