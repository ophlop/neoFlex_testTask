import React from "react";
import "./CartBuy.css";
import { useState } from "react";
import del from "./content/delete.png";

function CartBuy({ item, name, count, id, setRenderSum, addRenderSet }) {
  const [price, setPrice] = useState(item.price);

  const [quantity, setQuantity] = useState(count);

  const addProduct = () => {
    setQuantity(quantity + 1);
    window.sessionStorage.setItem(
      `${item.name}_${String(item.id)}`,
      String(quantity + 1)
    );
    addRenderSet();
  };

  const minusProduct = () => {
    if (quantity !== 0) {
      setQuantity(quantity - 1);
      window.sessionStorage.setItem(
        `${item.name}_${String(item.id)}`,
        String(quantity - 1)
      );
      addRenderSet();
    } else {
      setQuantity(0);
    }
  };

  const deleteProduct = () => {
    setQuantity(0);
    window.sessionStorage.setItem(`${item.name}_${String(item.id)}`, String(0));
    addRenderSet();
  };

  return (
    <>
      <div>
        <div className="CartToBuy">
          <div className="leftSide">
            <img className="productImg" src={item.photo} alt="product_1" />
            <div className="buttonsBlog">
              <button
                onClick={() => {
                  minusProduct();
                  setRenderSum(price);
                }}
                className="minusBtn"
              >
                -
              </button>
              <h3 className="numberThings">{quantity}</h3>
              <button
                onClick={() => {
                  addProduct();
                  setRenderSum(price);
                }}
                className="plusBtn"
              >
                +
              </button>
            </div>
          </div>
          <div className="middleSide">
            <h3 className="titleProduct">{item.name}</h3>
            <p className="priceProduct">{item.price} ₽</p>
          </div>
          <div className="rightSide">
            <img
              onClick={() => {
                deleteProduct();
                setRenderSum(price);
              }}
              className="deleteBtn"
              src={del}
              alt="delete"
            />
            <p className="priceRight">{price * quantity} ₽</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartBuy;
