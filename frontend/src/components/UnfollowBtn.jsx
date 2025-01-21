import React from "react";
import Button from "react-bootstrap/Button";

const UnfollowBtn = ({ followers, setFollowers }) => {
  const handleClick = () => {
    if (followers > 0) {
      setFollowers(followers - 1);
    }
  };
  return (
    <>
      <Button
        variant="primary"
        onClick={handleClick}
        style={{ width: "100px", fontWeight: "600" }}
      >
        unfollow
      </Button>
    </>
  );
};

export default UnfollowBtn;
