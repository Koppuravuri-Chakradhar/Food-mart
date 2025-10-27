import React from "react";
 
 const CategoryCards = () => {
  const data = [
    {
      image:
        "https://food-mart-template.vercel.app/images/icon-vegetables-broccoli.png",
      title: "Fruits & Veges",
    },
    {
      image:
        "https://food-mart-template.vercel.app/images/icon-bread-baguette.png",
      title: "Breads & Sweets",
    },

    {
      image:
        "https://food-mart-template.vercel.app/images/icon-soft-drinks-bottle.png",
      title: "Fruits & Veges",
    },
    
    {
      image:
        "https://food-mart-template.vercel.app/images/icon-wine-glass-bottle.png",
      title: "Fruits & Veges",
    },
    {
      image:
        "https://food-mart-template.vercel.app/images/icon-animal-products-drumsticks.png",
      title: "Fruits & Veges",
    },
    {
      image:
        "https://food-mart-template.vercel.app/images/icon-bread-herb-flour.png",
      title: "Fruits & Veges",
    },
  ];
  return (
    <div>
      <h3 style={{fontSize:"30px",marginBottom:"60px",fontFamily:"sans-serif",letterSpacing:"1px",marginLeft:"1%"}} >Category</h3>
      <div className="parent-card-container">
        {data.map((value, index) => (
          <div key={index} className="child-card-container">
            <img src={value.image} alt={value.image} />
            <h5>{value.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCards;