import axios from "axios";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Profile.css";
import Post from "./Post";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Follow from "../components/FollowBtn";
import Unfollow from "../components/UnfollowBtn";

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const [followers, setFollowers] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("http://localhost:3000/profile");
        setLoading(false);
        setProfile(response.data);
      } catch (error) {
        toast.error("Failed to fetch profile");
        setError(true);
      }
    };
    fetchProfile();
    console.log("fetching profile");
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return toast.error("Failed to fetch profile");
  }
  return (
    <>
      <ToastContainer />
      <div className="profile">
        <div className="username">
          <h4>Instagram User</h4>
        </div>

        <div className="profile_photo">
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="profile"
          />
          <div className="profile_stats">
            <div className="profile_posts">
              <h4 style={{ textAlign: "center" }}>2</h4>
              <p>Posts</p>
            </div>
            <div className="profile_followers">
              <h4 style={{ textAlign: "center" }}>{profile.followers}</h4>
              <p>Followers</p>
            </div>
            <div className="profile_following">
              <h4 style={{ textAlign: "center" }}>10</h4>
              <p>Following</p>
            </div>
          </div>
        </div>
        <div className="profile_follows">
          <Follow followers={profile.followers} setFollowers={setFollowers} />
          <Unfollow followers={profile.followers} setFollowers={setFollowers} />
        </div>
        <div className="profile_info">
          <p>This is my bio</p>
          <p>Welcome to my page</p>
          <p>I code for a living</p>
        </div>
        <div className="profile_btns">
          <Button
            variant="primary"
            style={{ width: "200px", fontWeight: "600" }}
            onClick={handleShow}
          >
            Add Post
          </Button>
          <Button
            variant="primary"
            style={{ width: "200px", fontWeight: "600" }}
          >
            Logout
          </Button>
        </div>
        <div className="photos">image 1 image 2</div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Post />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Profile;
