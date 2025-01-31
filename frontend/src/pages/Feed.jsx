import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import SinglePost from "./SinglePost";
import Navbar from "../components/Navbar";

const Feed = () => {
  return (
    <>
      <Navbar />
      <SinglePost />
    </>
  );
};

export default Feed;
