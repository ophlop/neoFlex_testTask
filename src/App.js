import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import hp1 from "./components/dataBase/first_hp.json";
import hp2 from "./components/dataBase/second_hp.json";

function App() {
  const getItem = (item) =>
    Number(window.sessionStorage.getItem(`${item.name}_${String(item.id)}`));

  const countFinally = () => {
    const per1 = hp1.map((item) => {
      if (getItem(item)) {
        return getItem(item);
      }
      return 0;
    });

    const per2 = hp2.map((item) => {
      if (getItem(item)) {
        return getItem(item);
      }
      return 0;
    });

    let count = 0;
    [...per1, ...per2].forEach((item) => {
      count = count + item;
    });

    return count;
  };

  const [valueItem, setValueItem] = useState(countFinally());

  const countRenderSum = () => {
    setValueItem(countFinally());
  };

  return (
    <BrowserRouter>
      <NavBar countItem={valueItem} />
      <Routes>
        <Route path="/" element={<Home addProduct={countRenderSum} />} />
        <Route path="/cart" element={<Cart addProduct={countRenderSum} />} />
      </Routes>
      <Footer className="footer" />
    </BrowserRouter>
  );
}

export default App;
