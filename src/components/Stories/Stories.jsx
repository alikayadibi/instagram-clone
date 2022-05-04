import React, { useEffect } from "react";

import "./Stories.scss";

const storyNames = [
   "mattmatt",
   "mustafakemal",
   "f1",
   "zeynepzeynep",
   "emmaemma",
   "gwengwen",
   "hakanhakan",
   "alyaalya",
   "bahabaha",
   "aliali",
];

const Stories = () => {
   useEffect(() => {
      const scrollTags = document.querySelector(".app__stories");
      scrollTags.addEventListener("wheel", (evt) => {
         evt.preventDefault();
         scrollTags.scrollLeft += evt.deltaY * 3;
      });
   }, []);

   return (
      <div className="app__stories-container app__flex">
         <div className="app__stories app__flex">
            {storyNames.map((name, i) => (
               <div key={i} className="app__stories-item app__flex">
                  <img src="https://picsum.photos/56" alt="profile-pic" />
                  <p className="text-gray">
                     {name.length <= 10 ? name : `${name.slice(0, 9)}...`}
                  </p>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Stories;
