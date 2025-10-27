import React from "react";
class Discount extends React.Component{
    render(){
        return <nav>
            <div className="Discount"> 
            <div>
                <span style={{fontSize:"50px",fontFamily:"calibri",letterSpacing:"1%"}}>Get </span>
                <span style={{color:"orange",fontSize:"50px",fontFamily:"calibri",letterSpacing:"1%"}}>25% Discount</span>
                <span style={{fontSize:"50px",fontFamily:"calibri",letterSpacing:"1%"}}> on your first</span>
                <span style={{fontSize:"50px",fontFamily:"calibri",letterSpacing:"1%"}}> purchase</span><br /><br />
                <span style={{fontFamily:"calibri",letterSpacing:"1%",fontSize:"30px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst</span>  
                <span style={{fontFamily:"calibri",letterSpacing:"1%",fontSize:"30px"}}>amet, metus, sit massa posuere maecenas. At tellus ut nunc amet vel</span> 
                <span style={{fontFamily:"calibri",letterSpacing:"1%",fontSize:"30px"}}>egestas.</span>
            </div>
            <div>
                <label htmlFor="" style={{fontSize:"20px"}}>Name</label><br /><br />
                <input type="text" id="username" placeholder="Name" style={{padding:"5%",height:"20px",width:"350px",borderRadius:"5px",fontSize:"25px"}}/><br></br><br />
                <label htmlFor="gmail" style={{fontSize:"20px"}}>Gmail:</label><br /><br />
                <input type="text" patterns="[a-z]+@gmail.com" placeholder="abc@mail.com" style={{padding:"5%",height:"20px",width:"350px",borderRadius:"5px",fontSize:"25px"}}/><br></br><br />
                <input type="checkbox"   />Subscribe to the newsletter  <br /><br />
                <button style={{fontSize:"25px",padding:"1%",height:"60px",width:"390px",borderRadius:"5px",backgroundColor:"black",color:"white",letterSpacing:"1%"}}>Submit</button>
            </div>
            </div>
        </nav>
        
    }
}

export default Discount;