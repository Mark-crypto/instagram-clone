import axios from "axios";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get("http://localhost:3000/comments");
        setComments(response.data);
      } catch (error) {
        toast.error("Failed to fetch comments");
      }
    };
    //fetchComments();
    console.log("fetching comments");
  }, []);
  return (
    <>
      <ToastContainer />
      <div className="comments">
        <div className="comment">
          <h2>Comments</h2>
        </div>
      </div>
    </>
  );
};

export default Comments;
