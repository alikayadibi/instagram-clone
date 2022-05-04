import React from "react";

import "./Feed.scss";
import { Stories, Posts } from "../../components";

const Feed = () => {
   return (
      <div className="app__feed-container">
         <Stories />
         <Posts />
      </div>
   );
};

export default Feed;
