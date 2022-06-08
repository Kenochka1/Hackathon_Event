import React from "react";
import "./Navbar.css";
import logo from "../../Assets/images/logo.PNG";
import lupa from "../../Assets/images/lupa.svg";
import user from "../../Assets/images/user.svg";
import heart from "../../Assets/images/heart.svg";
import music from "../../Assets/music/sugar.mp3";
import { NavLink } from "react-router-dom";
import { Form, FormControl } from "react-bootstrap";
import LiveSearch from "../LiveSearch/LiveSearch";
import { Button } from "@mui/material";

const Navbar = () => {
  return (
    <div className="container-header">
      <div className="container-navbar">
        <div className="navbar-text">
          <NavLink to="/">
            <p className="navbar-text-p">Главная</p>
          </NavLink>
          <NavLink to="/list">
            <p className="navbar-text-p">Услуги</p>
          </NavLink>
          <NavLink to="/aboutUs">
            <p className="navbar-text-p">О нас</p>
          </NavLink>
          <NavLink to="/add">
            <p className="navbar-text-p">Добавить</p>
          </NavLink>
        </div>
        <img id="logo" src={logo} alt="logo" />
        <div className="navbar-controllers">
          <img id="lupa" src={lupa} alt="lupa" />

          <LiveSearch />
          <NavLink to="/login">
            <p id="vhod">Вход / Регистрация</p>
          </NavLink>
          <img id="user" src={user} alt="user" />
          <img id="heart" src={heart} alt="heart" />
        </div>
      </div>
      <div className="container-home">
        <h3>Cобытие | Ателье | Сервис</h3>
        <button>НАЧАТЬ СЕЙЧАС</button>
        <audio src={music}></audio>

        <audio id="music" controls>
          <source src={music} type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
};

export default Navbar;
