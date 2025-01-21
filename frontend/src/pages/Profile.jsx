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
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const [followers, setFollowers] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("http://localhost:3000/profile");
        setProfile(response.data);
      } catch (error) {
        toast.error("Failed to fetch profile");
      }
    };
    //fetchProfile();
    console.log("fetching profile");
  }, []);
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
              <h4 style={{ textAlign: "center" }}>{followers}</h4>
              <p>Followers</p>
            </div>
            <div className="profile_following">
              <h4 style={{ textAlign: "center" }}>10</h4>
              <p>Following</p>
            </div>
          </div>
        </div>
        <div className="profile_follows">
          <Follow followers={followers} setFollowers={setFollowers} />
          <Unfollow followers={followers} setFollowers={setFollowers} />
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
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Profile;
