"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const useBlogs = (user) => {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    try {
      const response = await axios.get("/api/blog");
      setBlogs(response.data.data);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }

  }

  
  useEffect(() => {
    getBlogs();
  }, []);

  return { blogs };
};

export default useBlogs;
