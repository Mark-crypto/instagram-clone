import AddComment from "../components/AddComment";
import Comments from "./Comments";
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/SinglePost.css";
import Likes from "../components/Likes";
import Posts from "./Post";

function SinglePost() {
  return (
    <>
      <div className="single_post">
        <div className="post_header">User_one</div>
        <div className="post_image">Image</div>
        <div className="post_footer">Like button and comment button</div>
      </div>
    </>
  );
}

export default SinglePost;
