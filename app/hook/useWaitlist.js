"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const useWaitList = (user) => {
  const [waitlist, setWaitList] = useState([]);

  const getWaitlist = async () => {
    try {
      const response = await axios.get("/api/waitlist");
      setWaitList(response.data.data);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }


  }

  
  useEffect(() => {
    getWaitlist();
  }, []);

  return { waitlist };
};

export default useWaitList;
