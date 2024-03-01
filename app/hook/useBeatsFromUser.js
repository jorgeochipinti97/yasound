"use client";
// hooks/useUsuarios.js
import { useState, useEffect } from "react";
import axios from "axios";

const useBeatsFromUser = (user) => {
  const [beats, setBeats] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await axios.get("/api/beats");
        setBeats(response.data.data.filter((e) => e.autor == user));
      } catch (error) {
        setIsError(true);
        console.log(error);
      }

      setIsLoading(false);
    };

    fetchUsuarios();
  }, []);

  return { beats };
};

export default useBeatsFromUser;
