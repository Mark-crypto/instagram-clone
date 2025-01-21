import React from "react";
import Button from "react-bootstrap/Button";

const FollowBtn = ({ followers, setFollowers }) => {
  const handleClick = () => {
    setFollowers(followers + 1);
  };
  return (
    <>
      <Button
        variant="primary"
        onClick={handleClick}
        style={{ width: "100px", fontWeight: "600" }}
      >
        Follow
      </Button>
    </>
  );
};

export default FollowBtn;
