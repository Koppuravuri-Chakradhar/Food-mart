import React from "react";

const Chocolate =()=>{
    return ( 
    <nav className="Dark_Chocolate">
    <div className="Dark">
    <div>
        <p style={{color:"#ffc53fea",fontFamily:"serif",fontSize:"30px",letterSpacing:"1%",marginLeft:"10%"}}>Upto 25% Off</p>
        <h3 style={{fontSize:"30px",fontFamily:"serif",letterSpacing:"1%",marginLeft:"10%"}}>Luxa Dark Chocolate</h3>
        <p style={{fontSize:"20px",letterSpacing:"1%",marginLeft:"10%"}}>Very tasty & creamy vanilla flavour creamy muffins.</p>
        <button style={{background:"black",color:"white",padding:"15px",borderRadius:"5%",letterSpacing:"1%",marginLeft:"10%"}}>SHOW NOW</button>
        </div>
    <div><img src="ad-image-3.png" alt="" height="200px" style={{marginTop:"50px"}} /></div>
    </div>
    <div className="Chocolate">
    <div>
        <p style={{color:"#ffc53fea",fontFamily:"serif",fontSize:"30px",letterSpacing:"1%",marginLeft:"10%"}}>Upto 25% Off</p>
        <h3 style={{fontSize:"30px",fontFamily:"serif",letterSpacing:"1%",marginLeft:"10%"}}>Creamy Muffins</h3>
        <p style={{fontSize:"20px",letterSpacing:"1%",marginLeft:"10%"}}>Very tasty & creamy vanilla flavour creamy muffins.</p>
        <button style={{background:"black",color:"white",padding:"15px",borderRadius:"5%",letterSpacing:"1%",marginLeft:"10%"}}>SHOW NOW</button>
        </div>
    <div><img src="ad-image-4.png" alt="" height="200px" style={{marginTop:"50px"}} /></div>
    </div>
    </nav>
    )
};

export default Chocolate;