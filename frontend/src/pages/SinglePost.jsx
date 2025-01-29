import AddComment from "../components/AddComment";
import Comments from "./Comments";
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/SinglePost.css";
import Likes from "../components/Likes";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Posts from "./Post";
import { IoChatbubbleOutline } from "react-icons/io5";

function SinglePost() {
  const [show, setShow] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const handleCloseComment = () => setShowComment(false);
  const handleShowComment = () => setShowComment(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const image =
    "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png";
  return (
    <>
      <div className="single_post">
        <div className="post_header">
          <h5 style={{ textAlign: "center" }}>instagram_username</h5>
          <p style={{ textAlign: "center" }}>Nairobi, Kenya</p>
        </div>
        <div className="post_image">
          <img src={image} alt="post" />
        </div>
        <div className="post_footer">
          <Likes />

          <Button
            variant="primary"
            style={{ width: "60px", height: "40px" }}
            onClick={handleShowComment}
          >
            <IoChatbubbleOutline />
          </Button>
          <Button
            variant="primary"
            style={{ width: "150px", height: "40px" }}
            onClick={handleShow}
          >
            Add Comment
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Comment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <AddComment />
            </Modal.Body>
          </Modal>
          <Modal show={showComment} onHide={handleCloseComment}>
            <Modal.Header closeButton>
              <Modal.Title>Comment Section</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Comments />
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default SinglePost;
