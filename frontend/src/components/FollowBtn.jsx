import React from "react";

const FollowBtn = ({ followers, setFollowers }) => {
  const handleClick = () => {
    setFollowers(followers + 1);
  };
  return (
    <>
      <Button variant="primary" onClick={handleClick}>
        Follow
      </Button>
    </>
  );
};

export default FollowBtn;
