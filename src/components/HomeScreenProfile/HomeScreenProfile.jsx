import React from "react";
import { CgProfile } from "react-icons/cg";

import "./HomeScreenProfile.scss";

const suggestions = [
   {
      icon: <CgProfile />,
      userName: "username",
   },
   {
      icon: <CgProfile />,
      userName: "username",
   },
   {
      icon: <CgProfile />,
      userName: "username",
   },
   {
      icon: <CgProfile />,
      userName: "username",
   },
   {
      icon: <CgProfile />,
      userName: "username",
   },
];

const footerList = [
   "About",
   "Help",
   "Press",
   "API",
   "Jobs",
   "Privacy",
   "Terms",
   "Locations",
   "Top Accounts",
   "Hashtags",
   "Language",
];

const HomeScreenProfile = () => {
   return (
      <div className="app__homeScreenProfile-container">
         <div className="app__homeScreenProfile-profile app__flex">
            <div className="app__homeScreenProfile-profile-img app__flex">
               <CgProfile />
            </div>

            <div className="app__homeScreenProfile-profile-name app__flex">
               <p className="bold" style={{ cursor: "pointer" }}>
                  username
               </p>
               <p className="text-gray">User Name</p>
            </div>

            <div className="app__homeScreenProfile-profile-logout app__flex">
               <button>
                  <p>Switch</p>
               </button>
            </div>
         </div>

         <div className="app__homeScreenProfile-suggestions">
            <div className="app__homeScreenProfile-suggestions-header app__flex">
               <p className="text-gray bold">Suggestions for you</p>
               <p className="bold" style={{ cursor: "pointer" }}>
                  See all
               </p>
            </div>

            <div className="app__homeScreenProfile-suggestions-list">
               {suggestions.map((item, i) => (
                  <div
                     key={i}
                     className="app__homeScreenProfile-suggestions-list-item app__flex"
                  >
                     <div className="app__homeScreenProfile-suggestions-list-item-img">
                        {item.icon}
                     </div>

                     <div className="app__homeScreenProfile-suggestions-list-item-name">
                        <p className="bold" style={{ cursor: "pointer" }}>
                           {item.userName}
                        </p>
                        <p className="text-gray">Popular</p>
                     </div>

                     <div className="app__homeScreenProfile-suggestions-list-item-btn app__flex">
                        <button>
                           <p>Follow</p>
                        </button>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         <div className="app__homeScreenProfile-footer app__flex">
            {footerList.map((item, i) => (
               <div key={i} className="app__homeScreenProfile-footer-item">
                  <p>{`${item} ${i !== footerList.length - 1 ? "•" : ""}`}</p>
               </div>
            ))}

            <div className="app__homeScreenProfile-footer-copyright">
               <p>© 2022 INSTAGRAM CLONE</p>
            </div>
         </div>
      </div>
   );
};

export default HomeScreenProfile;
