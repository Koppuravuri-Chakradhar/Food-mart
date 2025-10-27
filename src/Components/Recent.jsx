import React from "react";
const Recent=()=> {
    return <nav style={{marginBottom:"10%"}}>
    <h3 style={{fontSize:"30px",marginBottom:"70px",fontFamily:"sans-serif",letterSpacing:"1px",marginLeft:"1%"}}>Our Recent Blog</h3>
    <div style={{display:"flex",gap:"1%",marginLeft:"2%"}}>
    <div style={{boxShadow:"0px 0px 4px beige"}}>
        <img src="post-thumb-1.jpg" alt="" height="360px" style={{borderRadius:"2%"}} />
        <h3 style={{fontSize:"30px",fontFamily:"calibri"}}>Top 10 casual look ideas to dress up your kids</h3>
        <p style={{fontSize:"20px",fontFamily:"calibri"}}>Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...</p>
    </div>
    <div style={{boxShadow:"0px 0px 4px beige"}}>
        <img src="post-thumb-2.jpg" alt="" height="360px" style={{borderRadius:"2%"}} />
        <h3 style={{fontSize:"30px",fontFamily:"calibri"}}>Latest trends of wearing street wears supremely</h3>
        <p style={{fontSize:"20px",fontFamily:"calibri"}}>Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...</p>
    </div>
    <div style={{boxShadow:"0px 0px 4px beige"}}>
        <img src="post-thumb-3.jpg" alt="" height="360px" style={{borderRadius:"2%"}}/>
        <h3 style={{fontSize:"30px",fontFamily:"calibri"}}>10 Different Types of comfortable clothes ideas for women</h3>
        <p style={{fontSize:"20px",fontFamily:"calibri"}}>Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...</p>
    </div>
    </div>

</nav>
}
export default Recent;