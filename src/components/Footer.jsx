import React from "react";
import "./Footer.css";
import vk from "./content/VK.png";
import tg from "./content/Telegram.png";
import wU from "./content/Whatsapp.png";
import group from "./content/Group.png";

export default function Footer() {
  return (
    <div>
      <div className="footer_block">
        <div className="grid_footer">
          <h1 className="logo">QPICK</h1>
          <ul className="footer_nav">
            <li>
              <p>Избранное</p>
            </li>
            <li>
              <p>Корзина</p>
            </li>
            <li>
              <p>Контакты</p>
            </li>
          </ul>
          <div className="footer_menu">
            <p>Условия сервиса</p>
            <div className="language_menu">
              <img src={group} alt="lang_icon" />
              <p className="langBtn">Рус</p>
              <p className="langBtn">Eng</p>
            </div>
          </div>
          <div className="social_links">
            <img className="vk" src={vk} alt="vk_icon" />
            <img className="tg" src={tg} alt="telegram_icon" />
            <img className="wU" src={wU} alt="whatsUp_icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
