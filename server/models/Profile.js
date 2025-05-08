import mongoose from "mongoose";

const ProfileSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    photo: { type: String, required: true },
    bio: { type: String, required: true },
  },
  { timestamps: true }
);

const Profile = mongoose.model("profile", ProfileSchema);
