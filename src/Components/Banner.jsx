import React from "react";
import thumb from "../assets/Images/product-thumb-1.png"
import image1 from "../assets/Images/ad-image-1.png"
import image2 from "../assets/Images/ad-image-2.png"
 
const Bannner = () => {
    return (
    <nav>
      <div className="container">
    <div className="Banner">
      <div style={{display:"block",marginTop:"10%",marginLeft:"5%"}}>
        <h3 style={{color:"#ffc53fea",fontFamily:"serif",fontSize:"40px",letterSpacing:"1%"}}>100% Natural</h3>
        <h1 style={{fontFamily:"calibri",fontSize:"50px",letterSpacing:"1%"}}>Fresh Smoothie & Summer Juice</h1>
        <p style={{fontSize:"20px",fontFamily:"calibri",letterSpacing:"1%"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dignissim massa diam elementum.</p><br />
        <button style={{padding:"15px",borderRadius:"7%",letterSpacing:"1%",backgroundColor:"rgba(135, 207, 235, 0.07)"}}>SHOP NOW</button><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
        <div><img src={thumb} alt="" style={{marginTop:"90px",height:"500px"}} /></div>
   </div>
   <div className="full_banner">
     <div className="Banner1">
      <div style={{display:"block",marginTop:"1%",marginLeft:"5%",fontFamily:"calibri",letterSpacing:"1%"}}>
        <p style={{fontSize:"35px"}}>20% Off</p>
        <p style={{fontSize:"20px"}}>______ S A L E</p>
        <h3 style={{fontSize:"35px"}}>Fruits & Vegetables</h3>
        <p style={{fontSize:"20px"}}>Shop Collection &#8594;</p>
        </div>
        <div>
        <img src={image1} alt="" style={{marginTop:"35%"}} />
        </div>
     </div><br /><br />
      <div className="Banner2">
        <div style={{display:"block",marginTop:"3%",marginLeft:"5%",fontFamily:"calibri",letterSpacing:"1%"}}>
        <p style={{fontSize:"35px"}}>15% Off</p>
        <p style={{fontSize:"20px"}}>______ S A L E</p>
        <h5 style={{fontSize:"35px"}}>Baked Products</h5>
        <p style={{fontSize:"20px"}}>Shop Collection &#8594;</p>
        </div>
        <div>
        <img src={image2} alt="" style={{marginTop:"35%"}} />
        </div>
     </div>
     </div>
      </div>
    </nav>
    ) 
};

export default Bannner;