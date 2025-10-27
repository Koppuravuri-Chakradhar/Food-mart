import React from "react";
import logo from "../assets/Images/logo.png";
import search from "../assets/Icons/search.png";
import user from "../assets/Icons/user.png";
import like from "../assets/Icons/like-heart-outline-symbol.png";

class Header extends React.Component {
  render() {
    return (
      <nav
        style={{
          height: "50px",
          gap: "10%",
          backgroundColor: "white",
          marginBottom: "60px",
          color: "black",
          display: "flex",
          padding: "0px 20px",
          marginTop: "20px",
          alignItems: "center",
        }}
      >
        <div>
          <img src={logo} alt="logo" style={{ height: "40px" }} />
        </div>

        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            gap: "40px",
            fontSize: "18px",
            letterSpacing: "1%",
            fontFamily: "calibri",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 0,
            padding: 0,
          }}
        >
          <li>All Categories</li>

          {/* ✅ Search input with placeholder */}
          <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <input
              type="text"
              placeholder="Search more than 2000 products"
              style={{
                padding: "8px 12px",
                borderRadius: "20px",
                border: "1px solid #ccc",
                outline: "none",
                width: "250px",
              }}
            />
            <img src={search} alt="search" style={{ height: "20px", cursor: "pointer" }} />
          </li>

          <li>For support?</li>
          <li>
            <img src={user} alt="user" style={{ height: "20px" }} />
          </li>
          <li>
            <img src={like} alt="like" style={{ height: "20px" }} />
          </li>
          <li>Your cart</li>
        </ul>
      </nav>
    );
  }
}

export default Header;
