"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const useBeatsFromUser = (user) => {
  const [beats, setBeats] = useState([]);

  const getBeats = async () => {
    try {
      const response = await axios.get("/api/beats");
      setBeats(response.data.data);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }


  }

  
  useEffect(() => {
    getBeats();
  }, []);

  return { beats };
};

export default useBeatsFromUser;
