import React,{useState} from "react";
import "../style/nav.scss";
import { FaBars } from "react-icons/fa";
import Category from "./category";
import Country from "./country";
import { Link } from "react-router-dom";



const Nav = () => {
const [menu,setMenu]=useState(false);
const[contry,setContry]=useState(false);
const[about,setAbout]=useState(false);

const menuState= () => {
  setMenu(!menu);
  setContry(false);
}

const contryState= () => {
  setContry(!contry);
  setMenu(false);
}

const abautState= () => {
  setAbout(!about);
}
  
  return (
    <div className="nav-container">
      <nav className="nav-list">
        <div className="brand-list">
          <span>Brand</span>
        </div>
        <div className="menu-list">
          <div className="subnav">
            <button className="subnavbtn" ><Link to="/">Home</Link></button>
          </div>
          <div className={menu ? "subnavactive":"subnav"}>
            <button className="subnavbtn" onClick={() => menuState()}>Menu</button>
            <div className={menu ? "menubar" : "submenu"}>
              <Category/>
            </div> 
          </div>
          <div className={contry ? "subnavactive":"subnav"}>
            <button className="subnavbtn" onClick={() => contryState()}>Country Food</button>
            <div className={contry ? "menubar" : "submenu"}>
              <Country/>
            </div>
          </div>
          <div className="subnav">
            <button className="subnavbtn" onClick={() => abautState()}><Link to="about">About</Link></button>
          </div>
        </div>
        <div className="login-list">
          <span >Login</span>
        </div>
        <div className="menu-icon">
          <span>
            <FaBars />
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
