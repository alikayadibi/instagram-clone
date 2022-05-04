import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { IoChatbubbleOutline, IoPaperPlaneOutline } from "react-icons/io5";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineSmile } from "react-icons/ai";

import "./Post.scss";

const Post = () => {
   return (
      <div className="app__post-container">
         <div className="app__flex app__post-header">
            <img src="https://picsum.photos/32" alt="profile-pic" />
            <h3>username</h3>
            <div className="app__post-header-more app__flex">
               <FiMoreHorizontal />
            </div>
         </div>

         <div className="app__post-content">
            <img src="https://picsum.photos/800/1200" alt="post-content" />
         </div>

         <div className="app__post-btns app__flex">
            <div className="app__post-btns-group-one app__flex">
               <FaRegHeart />
               <IoChatbubbleOutline />
               <IoPaperPlaneOutline />
            </div>
            <div className="app__post-btns-group-two app__flex">
               <BsBookmark />
            </div>
         </div>

         <div className="app__flex app__post-comment-section">
            <h3 className="hover">468,245 likes</h3>

            <div className="app__flex app__post-caption">
               <p>
                  <span className="text-decoration">username</span>post
                  caption😀
               </p>
            </div>

            <p className="text-gray hover">View all 2,264 comments</p>
            <p className="text-gray text-sm">1 DAY AGO</p>

            <div className="app__post-comment-section-border"></div>

            <form className="app__flex app__post-comment-section-form">
               <AiOutlineSmile />
               <input type="text" placeholder="Add a comment..." />
               <div className="app__post-comment-section-form-btn app__flex">
                  <button>Post</button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Post;
