import React from "react"
import cart from "../assets/Icons/shopping-cart.png"
import secure from "../assets/Icons/security.png"
import quality from "../assets/Icons/quality.png"
import savings from "../assets/Icons/savings.png"
import offer from "../assets/Icons/gift.png"
const Delivery=()=>{
    return <nav style={{marginLeft:"3%",marginTop:"8%",display:"flex",gap:"2%"}}>
        <div style={{display:"flex",gap:"2%"}}>
            <div><img src={cart} alt=""  height="30px"/></div>
            <div style={{display:"block",fontFamily:"calibri",fontSize:"20px"}}><h3>Free delivery</h3><p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p></div>
        </div>

        <div style={{display:"flex",gap:"2%"}}>
            <div><img src={secure} alt=""  height="30px"/></div>
            <div style={{display:"block",fontFamily:"calibri",fontSize:"20px"}}><h3>100% secure payment</h3><p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p></div>
        </div>

        <div style={{display:"flex",gap:"2%"}}>
            <div><img src={quality} alt=""  height="30px"/></div>
            <div style={{display:"block",fontFamily:"calibri",fontSize:"20px"}}><h3>Quality guarantee</h3><p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p></div>
        </div>

        <div style={{display:"flex",gap:"2%"}}>
            <div><img src={savings} alt=""  height="30px"/></div>
            <div style={{display:"block",fontFamily:"calibri",fontSize:"20px"}}><h3>guaranteed savings</h3><p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p></div>
        </div>

        <div style={{display:"flex",gap:"2%"}}>
            <div><img src={offer} alt=""  height="30px"/></div>
            <div style={{display:"block",fontFamily:"calibri",fontSize:"20px"}}><h3>Daily offers</h3><p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p></div>
        </div>

    </nav>
}




export default Delivery;