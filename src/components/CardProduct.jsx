import React from "react";
import { useState } from "react";
import "./CardProduct.css";
import star from "./content/star.png";

function CardProduct(props) {
  const [count, setCount] = useState(
    window.sessionStorage.getItem(`${props.name}_${String(props.id)}`)
      ? Number(
          window.sessionStorage.getItem(`${props.name}_${String(props.id)}`)
        )
      : 0
  );

  const addProduct = () => {
    setCount(count + 1);
    window.sessionStorage.setItem(
      `${props.name}_${String(props.id)}`,
      String(count + 1)
    );
    props.addProductSet();
  };

  return (
    <div>
      <div className="card_block">
        <img
          className="titlePicture"
          src={props.post.photo}
          alt="headphones_1"
        />
        <div className="grid_card">
          <h3 className="titleName">{props.post.name}</h3>
          <div className="rating">
            <div>
              <img className="star" src={star} alt="star" />
              <p className="ratingGrade">{props.post.rating}</p>
            </div>
          </div>
          <p className="price">{props.post.price}</p>
          <p className="oldPrice">{props.post.oldPrice}</p>
          <button onClick={addProduct} className="buyBtn">
            Купить
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
