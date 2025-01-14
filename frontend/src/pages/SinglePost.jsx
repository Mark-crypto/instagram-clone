import AddComment from "../components/AddComment";
import Comments from "../components/Comments";
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/SinglePost.css";

function SinglePost() {
  return (
    <>
      <div className="single_post">
        <div className="post_header"></div>
        <div className="post_image"></div>
        <div className="post_footer"></div>
      </div>
    </>
  );
}

export default SinglePost;
