import React from "react";

class New_Arrivals extends React.Component {
    data=[
        { image:"https://food-mart-template.vercel.app/images/product-thumb-11.jpg",
          title:"Amber Jar",
          description:"Honey best nectar you wish to get"
    },
    { image:"https://food-mart-template.vercel.app/images/product-thumb-12.jpg",
          title:"Amber Jar",
          description:"Honey best nectar you wish to get"
    },
    { image:"https://food-mart-template.vercel.app/images/product-thumb-13.jpg",
          title:"Amber Jar",
          description:"Honey best nectar you wish to get"
    },
    { image:"https://food-mart-template.vercel.app/images/product-thumb-14.jpg",
          title:"Amber Jar",
          description:"Honey best nectar you wish to get"
    },
]
   render(){
    return (
        <div>
        <h3 style={{fontSize:"30px",marginBottom:"70px",fontFamily:"sans-serif",letterSpacing:"1px",marginLeft:"1%"}}>Newly Arrived Products</h3>
         <div className="new_arrival"> 
            {this.data.map((value,index,array)=>(
                <div key={index} className="new">
                    <img src={value.image} alt=""  style={{borderRadius:"4%",height:"100px",width:"100px"}}/>
                   <div className="arrival">
                   <p>{value.title}</p>
                   <p style={{fontSize:"18px"}}>{value.description}</p>
                   </div>
                </div>
            ))}
         </div>
        </div>
        
    );

   
   }
}
    
    

export default New_Arrivals;