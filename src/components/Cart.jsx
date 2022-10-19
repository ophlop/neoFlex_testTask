import React, { useState } from "react";
import "./Cart.css";
import CartBuy from "./CartBuy";
import hp1 from "./dataBase/first_hp.json";
import hp2 from "./dataBase/second_hp.json";

function Cart(props) {
  const getItem = (item) =>
    Number(window.sessionStorage.getItem(`${item.name}_${String(item.id)}`));

  const sumFinal = () => {
    const per1 = hp1.map((item) => {
      if (getItem(item)) {
        return getItem(item) * item.price;
      }
      return 0;
    });

    const per2 = hp2.map((item) => {
      if (getItem(item)) {
        return getItem(item) * item.price;
      }
      return 0;
    });

    console.log(per1, per2);

    let sum = 0;
    [...per1, ...per2].forEach((item) => {
      sum = sum + item;
    });
    return sum;
  };
  const [sumRender, setSumRender] = useState(sumFinal());
  const ll = sumFinal();
  console.log("privet", ll);
  const setRenderSum = () => {
    setSumRender(sumFinal());
  };

  const renderItemCartBar = () => {
    const firstMap = hp1.map((item, index) => {
      if (getItem(item)) {
        console.log(item);

        return (
          <CartBuy
            addRenderSet={props.addProduct}
            setRenderSum={setRenderSum}
            item={item}
            count={getItem(item)}
            id={index}
          />
        );
      }
    });

    const secondMap = hp2.map((item, index) => {
      if (getItem(item)) {
        console.log(item);

        return (
          <CartBuy
            addRenderSet={props.addProduct}
            setRenderSum={setRenderSum}
            item={item}
            count={getItem(item)}
            id={index}
          />
        );
      }
    });
    console.log(
      "sumRender",
      firstMap.filter((item) => item),
      secondMap.filter((item) => item)
    );
    return firstMap.filter((item) => item).length ||
      secondMap.filter((item) => item).length ? (
      <>
        {hp1.length ? firstMap : null}

        {hp2.length ? secondMap : null}
      </>
    ) : (
      <div className="firstBlock">
        <h3 className="title headphones emptyCart">Корзина пуста</h3>
      </div>
    );
  };

  console.log("sumRender", sumRender);
  return (
    <div>
      <div className="firstBlock">
        <h3 className="title headphones">Наушники</h3>
      </div>
      {renderItemCartBar()}
      <div className="block">
        <div className="inline-block">
          <div className="gridBlock"></div>
          <div className="CartCheck">
            <div className="CartList">
              <div className="topBlock">
                <h3 className="resultWord">ИТОГО</h3>
                <h3 className="priceToPay">₽ {sumRender}</h3>
              </div>
            </div>
            <button className="CartSubmit">Перейти к оформлению</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
