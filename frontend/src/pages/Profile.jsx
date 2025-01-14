import axios from "axios";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Profile.css";
import Post from "./Post";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);

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
          <h4>hard_coded</h4>
        </div>
        <div className="profile_photo">
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="profile"
          />
          <div className="profile_posts">
            <h4>2</h4>
            <p>Posts</p>
          </div>
          <div className="profile_followers">
            <h4>2</h4>
            <p>Followers</p>
          </div>
          <div className="profile_following">
            <h4>2</h4>
            <p>Following</p>
          </div>
        </div>
        <div className="profile_info">
          <h4>hard_coded</h4>
          <p>hard_coded</p>
          <p>hard_coded</p>
        </div>
        <div className="profile_btns">
          <button>Add Post</button>
          <button>Logout</button>
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
