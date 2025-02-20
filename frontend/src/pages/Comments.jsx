import axios from "axios";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

const Comments = () => {
  const [comments, setComments] = useState([]);
  // const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/comments");
        setLoading(false);
        setComments(response.data);
      } catch (error) {
        toast.error("Failed to fetch comments");
        setError(true);
      }
    };
    //fetchComments();
    console.log("fetching comments");
  }, []);
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return toast.error("Failed to fetch comments");
  }
  return (
    <>
      <ToastContainer />
      <div className="comments">
        <div className="comment">
          <h6>instagram_username</h6>
          <p>What a nice view</p>
          {/* {comments.map((comment) => (
            <div key={comment.id}>
              <p>{comment.comment}</p>
            </div>
          ))} */}
        </div>
      </div>
    </>
  );
};

export default Comments;
