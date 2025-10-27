import React from "react";
import logo from "../assets/Images/logo.png"
import facebook from "../assets/Icons/facebook.png"
import twitter from "../assets/Icons/twitter-sign.png"
import youtube from "../assets/Icons/video.png"
import Insta from "../assets/Icons/instagram.png"
import amazon from "../assets/Icons/social.png"
class Component extends React.Component{
    render(){
        return <nav style={{display:"flex",gap:"5%",marginTop:"8%",fontSize:"20px"}}>
            <div >
            <div style={{marginLeft:"3%"}}><img src={logo} alt="" /></div><br /><br /><br />
                <div style={{display:"flex",gap:"15px",marginLeft:"3%"}}>
                <img src={facebook} alt="" height="30px" />
                <img src={twitter} alt="" height="30px" />
                <img src={youtube} alt=""  height="30px"/>
                <img src={Insta} alt=""  height="30px"/>
                <img src={amazon} alt="" height="30px" />
                </div>
            </div>

            <div style={{display:"block"}}>
                <h3>Ultras</h3>
                <p>About us</p>
                <p>Conditions</p>
                <p>Our Journals</p>
                <p>Careers</p>
                <p>Affiliate Programme</p>
                <p>Ultras Press</p>
            </div>

            <div style={{display:"block"}}>
                <h3>Customer Service</h3>
                <p>FAQ</p>
                <p>Contact</p>
                <p>Privacy Policy</p>
                <p>Returns & Refunds</p>
                <p>Cookie Guidelines</p>
                <p>Delivery Information</p>
            </div>

            <div style={{display:"block"}}>
                <h3>Customer Service</h3>
                <p>FAQ</p>
                <p>Contact</p>
                <p>Privacy Policy</p>
                <p>Returns & Refunds</p>
                <p>Cookie Guidelines</p>
                <p>Delivery Information</p>
            </div>

            <div style={{display:"block"}} >
                <h3>Subscribe Us</h3>
                <p>Subscribe to our newsletter to get updates about our grand offers.</p>
                <input type="text" placeholder="Email Address" style={{fontSize:"20px",padding:"2%"}} /><button style={{backgroundColor:"black",color:"white",padding:"2%",fontSize:"20px",borderRadius:"5%"}}>Subscribe</button>
            </div>
        </nav>
    }
}

export default Component;
