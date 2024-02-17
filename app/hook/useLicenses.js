import { useState, useEffect } from "react";
import axios from "axios";

const useLicenses = () => {
  const [licencias, setLicencias] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchUsuarios = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await axios.get("/api/license");
        setLicencias(response.data.data);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }

      setIsLoading(false);
    };

    fetchUsuarios();
  }, []);

  return { licencias, isLoading, isError };
};

export default useLicenses;
