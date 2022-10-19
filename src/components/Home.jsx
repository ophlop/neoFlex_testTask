import React, { useState } from "react";
import "./Home.css";
import CardProduct from "./CardProduct";
import hp1 from "./dataBase/first_hp.json";
import hp2 from "./dataBase/second_hp.json";

function Home({ addProduct }) {
  console.log(addProduct);

  return (
    <div>
      <div className="firstBlock">
        <h3 className="title headphones">Наушники</h3>
      </div>
      <div className="gridProduct">
        {hp1.map((post, index) => (
          <CardProduct
            className="card"
            addProductSet={addProduct}
            name={post.name}
            post={post}
            id={post.id}
          />
        ))}
      </div>
      <div className="firstBlock">
        <h3 className="title headphones">Беспроводные Наушники</h3>
      </div>
      <div className="gridProduct">
        {hp2.map((post, index) => (
          <CardProduct
            className="card"
            addProductSet={addProduct}
            name={post.name}
            post={post}
            id={post.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
