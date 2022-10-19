import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import likeImg from "./content/Like.svg";
import cartImg from "./content/Cart.svg";
import hp1 from "./dataBase/first_hp.json";
import hp2 from "./dataBase/second_hp.json";

function NavBar({ countItem }) {
  return (
    <div>
      <div className="header_bar">
        <Link to={"/"}>
          <h1 className="header_logo">QPICK</h1>
        </Link>
        <div className="icon_fav">
          <div className="circle-fav">
            <p className="countNumber">2</p>
          </div>
          <img className="fav" src={likeImg} alt="favorites" />
        </div>
        <div className="icon_cart">
          <div className="circle-cart">
            <p className="countNumber">{countItem}</p>
          </div>
          <Link to={"/cart"}>
            <img className="cart" src={cartImg} alt="cart" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
