import { useState } from "react";
import { FaHeart } from "react-icons/fa";

const Likes = () => {
  const [likes, setLikes] = useState(0);
  const handleClick = () => {
    setLikes(likes + 1);
  };
  return (
    <>
      <div>
        <FaHeart onClick={handleClick} />
        <p> {likes} likes</p>
      </div>
    </>
  );
};

export default Likes;
