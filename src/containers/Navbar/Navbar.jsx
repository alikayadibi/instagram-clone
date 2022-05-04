import React from "react";
import { GrHomeRounded } from "react-icons/gr";
import { RiMessengerLine } from "react-icons/ri";
import { FiPlusSquare } from "react-icons/fi";
import { ImCompass2 } from "react-icons/im";
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

import "./Navbar.scss";

const Header = () => {
   return (
      <div className="app__navbar__container app__flex">
         <div className="app__navbar app__flex">
            <div className="app__navbar-logo app__flex">
               <img
                  src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                  alt="logo"
               />
            </div>

            <div className="app__navbar-search-container app__flex">
               <div className="app__navbar-search app__flex">
                  <input type="text" placeholder="🔎 Search" />
               </div>
            </div>

            <div className="app__navbar-btns-container app__flex">
               <div className="app__navbar-btns app__flex">
                  <div className="app__navbar-btns-item app__flex">
                     <GrHomeRounded fill="#000" />
                  </div>
                  <div className="app__navbar-btns-item app__flex">
                     <RiMessengerLine />
                  </div>
                  <div className="app__navbar-btns-item app__flex">
                     <FiPlusSquare />
                  </div>
                  <div className="app__navbar-btns-item app__flex rotate">
                     <ImCompass2 />
                  </div>
                  <div className="app__navbar-btns-item app__flex">
                     <FaRegHeart />
                  </div>
                  <div className="app__navbar-btns-item app__flex">
                     <CgProfile />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header;
