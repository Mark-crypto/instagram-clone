import axios from "axios";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
        <div className="bio">
          <h2>Username + Photo</h2>
        </div>
        <div className="profile-post">
          <h2>Posts</h2>
        </div>
      </div>
    </>
  );
};

export default Profile;
